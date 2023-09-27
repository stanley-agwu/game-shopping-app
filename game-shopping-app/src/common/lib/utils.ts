import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const currencyFormatter = new Intl.NumberFormat(undefined, { currency: 'USD', style: 'currency'});
export const formatCurrency = (currency: number) => currencyFormatter.format(currency);
