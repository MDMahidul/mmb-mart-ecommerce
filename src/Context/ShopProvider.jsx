import { createContext, useEffect, useState } from "react";
//import products from "../assets/data/all_product";
import useProducts from "../hooks/useProducts";
import axios from "axios";
import toast from "react-hot-toast";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const ShopContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 0; i < 300 + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopProvider = ({ children }) => {
  const [products] = useProducts();
  const [cartItems, setCartItems] = useState(getDefaultCart());
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null);

  /* set theme */
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* set user role */
  useEffect(() => {
    const fetchUser = async () => {
      if (user) {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/user/${user.email}`
        );
        const user = response.data;
        setUserRole(user?.role);
      }
    };
    fetchUser();
  }, [user]);

  /* create user using firebase */
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /* user login fucntion */
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  /* password reset */
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  /* logout method */
  const logOut = () => {
    setLoading(true);
    localStorage.removeItem("auth-token");
    return signOut(auth);
  };

  /* social media login */
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  /* set current user */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, {
            email: currentUser?.email,
          })
          .then((data) => {
            localStorage.setItem("access-token", data.data.token);
            setLoading(false);
          });
      }else{
        localStorage.removeItem("access-token");
        setLoading(false);
      }
      console.log(currentUser);
    });

    return ()=>{
      return unsubscribe();
    }
  }, []);

  /* add product to cart */
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    /* check if user logged in */
    if (localStorage.getItem("auth-token")) {
      try {
        const res = axios.post(
          `${import.meta.env.VITE_API_URL}/addtocart`,
          { itemId: itemId },
          {
            "auth-token": `${localStorage.getItem("auth-token")}`,
          }
        );

        toast.success("Item added to cart");
      } catch (error) {
        console.log(error.message);
        toast.error(error.message);
      }
    }
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
    user,
    loading,
    setLoading,
    createUser,
    userLogin,
    googleSignIn,
    logOut,
    products,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    resetPassword,
    theme,
    setTheme,
    userRole,
    updateUserProfile,
  };

  return (
    <ShopContext.Provider value={shopInfo}>{children}</ShopContext.Provider>
  );
};

export default ShopProvider;
