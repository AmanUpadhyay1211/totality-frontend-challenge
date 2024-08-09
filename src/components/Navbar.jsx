"use client";
import React, { useState, useEffect } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import { Logo, ManageAccount } from "@/components/index";
import { useSelector } from "react-redux";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ className }) {
  const reduxUserData = useSelector((state) => state.auth.userData);
  const reduxCartData = useSelector((state) => state.cart.cart);
  const [cartItem, setcartItem] = useState(reduxCartData?.cartItem || []);
  const [JSONcart, setJSONcart] = useState([]);
  const [active, setActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setcartItem(reduxCartData?.cartItem || []);
  }, [reduxCartData]);

  useEffect(() => {
    const parsedCart = cartItem.map((item) => {
      try {
        return JSON.parse(item);
      } catch (error) {
        console.error("Invalid JSON string:", item);
        return null;
      }
    });
    setJSONcart(parsedCart);
  }, [cartItem]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 w-[80vw] mx-auto z-50",
        className
      )}
    >
      <Menu className=" " setActive={setActive}>
        <div className="container flex justify-between h-[10vh] px-6">
          <div className="left flex justify-center items-center">
            <Logo className="" height="70" />
          </div>

          <div className="right flex items-center">
            <button
              className="md:hidden block text-white"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            <div
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:flex flex-col md:flex-row items-center gap-7 absolute md:static top-14 right-0 md:top-0 md:right-0 bg-gray-800 md:bg-transparent w-full md:w-auto p-5 md:p-0 z-40`}
            >
              {reduxUserData && cartItem.length > 0 ? (
                <Link href={"/cart"}>
                  {" "}
                  <MenuItem setActive={setActive} active={active} item="Cart">
                    <div className="text-sm grid grid-cols-2 gap-3 w-full md:w-30vw p-4">
                      {JSONcart.map((item) => (
                        <ProductItem
                          title={item.title}
                          href={`property/${item.id}`}
                          src={item.images[0]}
                          description={item.description}
                          key={item.id}
                        />
                      ))}
                    </div>
                  </MenuItem>
                </Link>
              ) : (
                <MenuItem setActive={setActive} active={active} item="Cart">
                  Cart is empty
                </MenuItem>
              )}

              <MenuItem setActive={setActive} active={active} item="More">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/contact">Contact</HoveredLink>
                  <HoveredLink href="/about">About</HoveredLink>
                  <HoveredLink href="/explore">Explore</HoveredLink>
                  <HoveredLink href="/social-media">Social-Media</HoveredLink>
                </div>
              </MenuItem>

              {reduxUserData ? (
                <div className="flex items-center space-x-4">
                  <ManageAccount />
                </div>
              ) : (
                <Link href="/signin">
                  <div className="hover:text-yellow-500 text-white">
                    Sign In
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </Menu>
    </div>
  );
}
