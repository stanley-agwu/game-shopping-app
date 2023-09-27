import { useContext } from "react";
import ShopContext, { ShopCart } from "@/common/context/shopContext";

export const useShopContext = (): ShopCart => useContext(ShopContext);