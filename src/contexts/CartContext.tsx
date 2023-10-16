import { createContext, ReactNode } from 'react';

type CartProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  cover: string;
  amount: number;
  total: number;
};

interface CartContextData {
  cart: CartProps[];
}

export const CartContext = createContext({} as CartContextData);
