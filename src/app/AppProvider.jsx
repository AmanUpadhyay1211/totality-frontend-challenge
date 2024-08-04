"use client"; // Ensure this is at the top of the file

import { useEffect } from "react";
import manageCartService from "@/appwrite/manageCartService";
import authService from "@/appwrite/authService";
import { login } from "@/Redux/slices/authSlice";
import { setCart } from "@/Redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Provider } from "react-redux";
import store from "@/Redux/store";

const AppContent = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await authService.getCurrentUser();
        const OAuthUser = await authService.getCurrentUserbyProvider();
        let userCart = null;

        if (user) {
          dispatch(login(user));
          const carts = await manageCartService.getCart();
          userCart = carts.documents.find(cart => cart.userID === user.$id);
          dispatch(setCart(userCart));
          console.log(user, userCart);
        } else if (OAuthUser) {
          dispatch(login(OAuthUser));
          const carts = await manageCartService.getCart();
          userCart = carts.documents.find(cart => cart.userID === OAuthUser.userId);
          dispatch(setCart(userCart));
          console.log(OAuthUser, userCart);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return <>{children}</>;
};

const AppProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <AppContent>{children}</AppContent>
    </Provider>
  );
};

export default AppProvider;