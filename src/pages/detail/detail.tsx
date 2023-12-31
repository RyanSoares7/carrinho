import { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';
import { ProductProps } from '../home/Home';
import { BsCartPlus } from 'react-icons/bs';
import { CartContext } from '../../contexts/CartContext';
import toast from 'react-hot-toast';

export const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductProps>();
  const { addItemCart } = useContext(CartContext);

  useEffect(() => {
    async function getProduct() {
      const response = await api.get(`/products/${id}`);
      setProduct(response.data);
    }

    getProduct();
  }, [id]);

  function handleAddItem(product: ProductProps) {
    toast.success('Produto adicionado no carrinho!', {
      style: {
        borderRadius: 10,
        backgroundColor: '#121212',
        color: '#FFF',
      },
    });
    addItemCart(product);
  }

  return (
    <div>
      <main className='w-full max-w-7xl px-4 mx-auto my-6'>
        {product && (
          <section className='w-full'>
            <div className='flex flex-col lg:flex-row'>
              <img
                className='flex-1 w-full max-h-72 object-contain'
                src={product?.cover}
                alt={product?.title}
              />
            </div>
            <div className='flex-1'>
              <p className='font-bold text-2xl mt-4 mb-2'>{product?.title}</p>
              <p>{product?.description}</p>
              <strong className='text-zinc-700'>
                {product.price.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </strong>
              <button
                className='bg-zinc-900 p-1 rounded ml-2'
                onClick={() => handleAddItem(product)}
              >
                <BsCartPlus size={20} color='#FFF' />
              </button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
};
