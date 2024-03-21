import { createContext } from "react";
import all_products from "../assets/data/all_product";

export const ShopContext = createContext(null);

const ShopProvider = ({ children }) => {
  const shopInfo = {all_products};

  return (
    <ShopContext.Provider value={shopInfo}>{children}</ShopContext.Provider>
  );
};

export default ShopProvider;
