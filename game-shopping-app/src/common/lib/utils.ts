import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { ICartItem } from "@/common/models";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const currencyFormatter = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency'});
export const formatCurrency = (currency: number) => currencyFormatter.format(currency);

export const getItemFromCart = (id: string, cartItems: ICartItem[]) => cartItems.find((game) => game.id === id);

export const filterItemFromCart = (id: string, cartItems: ICartItem[]) => cartItems.filter((game) => game.id !== id);
