import ReactDOM from 'react-dom/client';
import { router } from './App.tsx';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import CartProvider from './contexts/CartContext';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <RouterProvider router={router} />
    <Toaster />
  </CartProvider>
);
