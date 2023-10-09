export const Cart = () => {
  return (
    <div className='w-full max-w-7xl px-4 mx-auto'>
      <h1 className='font-medium text-2xl text-center my-4'>
        Página carrinho de compras
      </h1>

      <section className='flex items-center justify-between border-b-2 border-gray-300 gap-2'>
        <img
          src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000'
          alt='Logo produto'
          className='w-28'
        />
        <strong>Preço: R$1.000</strong>

        <div className='flex items-center justify-center gap-3'>
          <button className='bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center'>
            -
          </button>
          2
          <button className='bg-slate-600 px-2 rounded text-white font-medium flex items-center justify-center'>
            +
          </button>
        </div>
        <strong className='float-right max-sm:hidden'>SubTotal: R$1.000</strong>
      </section>
      <p className='font-bold mt-4'>Total: R$1.000</p>
    </div>
  );
};
