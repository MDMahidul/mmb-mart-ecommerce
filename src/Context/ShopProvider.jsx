import { createContext, useEffect, useState } from "react";
//import products from "../assets/data/all_product";
import useProducts from "../hooks/useProducts";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300+1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopProvider = ({ children }) => {
  const [products] = useProducts();
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [userRole,setUserRole]=useState(null);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  /* add product to cart */
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log("clicked");
  };

  /* remove product from cart */
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find(
          (product) => product.id === parseInt(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
        console.log(totalAmount);
      }
    }
    return totalAmount; // Move return statement here
  };

  const shopInfo = {
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    theme,
    setTheme, userRole,setUserRole
  };

  return (
    <ShopContext.Provider value={shopInfo}>{children}</ShopContext.Provider>
  );
};

export default ShopProvider;
