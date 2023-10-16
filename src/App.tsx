import { createBrowserRouter } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Cart } from './pages/cart/Cart';
import { ProductDetail } from './pages/detail/detail';

import { Layout } from './components/layout/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:id',
        element: <ProductDetail />,
      },
    ],
  },
]);

export { router };
