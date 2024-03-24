import { createContext, useState } from "react";
import all_products from "../assets/data/all_product";

export const ShopContext = createContext(null);
const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < all_products.length+1; i++) {
    cart[i] = 0;
  }
  return cart;
};
const ShopProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
//console.log(cartItem);
  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}));
    console.log("clicked");
  };
  //console.log(cartItems);

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === parseInt(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
        console.log(totalAmount);
      }
    }
    return totalAmount; // Move return statement here
  };


  const shopInfo = { all_products, cartItems, addToCart, removeFromCart,getTotalCartAmount };

  return (
    <ShopContext.Provider value={shopInfo}>{children}</ShopContext.Provider>
  );
};

export default ShopProvider;
