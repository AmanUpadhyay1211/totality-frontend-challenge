"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";
import Images from "@/api/images";
import { useSelector, useDispatch } from "react-redux";
import { addCartItem, setCart } from "@/Redux/slices/cartSlice";
import manageCartService from "@/appwrite/manageCartService";
import { ID } from "appwrite";

function getImage() {
  return Images[Math.floor(Math.random() * Images.length)];
}

function PropertyCard({ property }) {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);
  const cartData = useSelector((state) => state.cart.cart);

  const {
    id,
    title,
    description,
    price,
    location,
    bedrooms,
    amenities,
    images,
    ratings,
  } = property;

  const handleAddToCart = async () => {
    console.log("Add to cart clicked");
    if (userData) {
      if (cartData && cartData.userID) {
        // User has a cart, update it
        const updatedCart = {
          ...cartData,
          cartItems: [...cartData.cartItems, property]
        };
        await manageCartService.updateCart(updatedCart);
        dispatch(addCartItem(property));
      } else {
        // User does not have a cart, create a new one
        const newCart = {
          slug: ID.unique(),
          userID: userData.$id,
          userName: userData.name,
          cartItems: [property],
          bookedItems: []
        };
        const createdCart = await manageCartService.createCart(newCart);
        if (createdCart) {
          dispatch(setCart(createdCart));
          dispatch(addCartItem(property));
        }
      }
    } else {
      console.log("Show a popup on screen that login is required to book a property");
     alert("login is required to book a property")
    }
  };

  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-[550px] rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={getImage()}
            width="1000"
            height="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          <b>{price}$</b> <b>{ratings}</b>
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {ratings}
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={`https://www.google.com/maps/place/${location}`}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {location}
          </CardItem>
          <div onClick={()=>handleAddToCart(property)} >
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Add to Cart
          </CardItem></div>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default PropertyCard;
