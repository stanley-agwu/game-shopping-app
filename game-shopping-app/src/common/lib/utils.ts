import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { GameItem } from "@/common/context/shopContext";
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const currencyFormatter = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency'});
export const formatCurrency = (currency: number) => currencyFormatter.format(currency);

export const getItemFromCart = (id: string, cartItems: GameItem[]) => cartItems.find((game) => game.id === id);
