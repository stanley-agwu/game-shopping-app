import { useEffect, useReducer } from "react";
import { ShopCart } from "@/common/context/shopContext";
import { shopCartReducer } from "@/common/context/reducers/shopCartReducer";

export const usePersistState = (key: string, initialState: ShopCart) => {
  const [state, dispatch] = useReducer(shopCartReducer, initialState, () => {
    const storedCartItems = localStorage.getItem(key);
    return storedCartItems ? JSON.parse(storedCartItems) as ShopCart : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return { state, dispatch};
}
