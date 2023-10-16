import { useContext } from 'react';

import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className='w-full max-w-7xl px-4 mx-auto'>
      <h1 className='font-medium text-2xl text-center my-4'>
        Página carrinho de compras
      </h1>

      {cart.length === 0 && (
        <div className='flex flex-col items-center justify-center'>
          <p className='font-medium'>Seu carrinho está vazio...</p>
          <Link
            to='/'
            className='bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded'
          >
            Acessar Produtos
          </Link>
        </div>
      )}

      {cart.map((item) => (
        <section
          className='flex items-center justify-between border-b-2 border-gray-300 gap-2'
          key={item.id}
        >
          <img src={item.cover} alt={item.title} className='w-28' />
          <strong>Preço: R${item.price.toFixed(2)}</strong>

          <div className='flex items-center justify-center gap-3'>
            <button className='bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center'>
              -
            </button>
            {item.amount}
            <button className='bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center'>
              +
            </button>
          </div>
          <strong className='float-right max-sm:hidden'>
            SubTotal: R${item.total}
          </strong>
        </section>
      ))}

      {cart.length !== 0 && <p className='font-bold mt-4'>Total: R$1.000</p>}
    </div>
  );
};
