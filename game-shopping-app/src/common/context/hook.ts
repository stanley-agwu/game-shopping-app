import { useContext, useEffect, useReducer } from "react";
import ShopContext, { ShopCart } from "@/common/context/shopContext";
import { shopCartReducer } from "@/common/context/reducers/shopCartReducer";

export const usePersistState = <T>(key: string, initialState: T) => {
  const [state, dispatch] = useReducer(shopCartReducer, initialState, () => {
    const storedCartItems = localStorage.getItem(key);
    return storedCartItems ? JSON.parse(storedCartItems) : initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [key, state]);

  return { state, dispatch}
}

export const useShopContext = (): ShopCart => useContext(ShopContext);