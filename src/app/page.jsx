"use client";
import properties from "@/api/properties";
import authService from "@/appwrite/authService";
import {
  HeroSection,
  PropertyCard,
  ReviewSection,
  Navbar,
} from "@/components/index";
import { useSelector,useDispatch } from "react-redux";
import { login } from "@/Redux/slices/authSlice";
import { createCart, } from "@/Redux/slices/cartSlice";
import { useEffect } from "react";
import manageCartService from "@/appwrite/manageCartService";

export default function Home({ children }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const cartData = useSelector((state) => state.cart.cart);
  console.log(userData)

  // const getUSer = async () => {
  //   const user = await authService.getCurrentUser();
  //   console.log(user);
  //   const user2 = await authService.getCurrentUserbyProvider();
  //   console.log(user2);
  // };
  // getUSer();

  useEffect(() => {
    async function ReduxConfig() {
      const user = await authService.getCurrentUser();
      if (user) {
        dispatch(login(user));

        if (!cartData.userID) {
          const carts = await manageCartService.getCart();
          const userCart = carts.documents.find(cart => cart.userID === user.$id);
          if (userCart) {
            dispatch(setCart(userCart));
          }
        }
      }
    }
    ReduxConfig();
  }, [dispatch, cartData.userID]);
  

  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Navbar />
      <HeroSection />
      <div>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      <ReviewSection />
    </main>
  );
}
