import { useEffect, useState } from 'react';
import { BsCartPlus } from 'react-icons/bs';

import { api } from '../../services/api';

export const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const response = await api.get('/products');
      console.log(response.data);
    }

    getProducts();
  }, []);

  return (
    <div>
      <main className='w-full max-w-7xl px-4 mx-auto'>
        <h1 className='font-bold text-2xl mb-4 mt-10 text-center'>
          Produtos em alta
        </h1>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5'>
          <section className='w-full'>
            <img
              className='w-full rounded-lg max-h-70 mb-2'
              src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000'
              alt='air pods'
            />
            <p className='font-medium mt-1 mb-2'>Airpods Pro 3</p>

            <div className='flex gap-3 items-center'>
              <strong className='text-zinc-700/90'>R$ 1000</strong>
              <button className='bg-zinc-900 p-1 rounded'>
                <BsCartPlus size={20} color='#FFF' />
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
