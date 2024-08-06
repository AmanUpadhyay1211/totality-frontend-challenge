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

export default function Navbar({ className }) {
  const reduxUserData = useSelector((state) => state.auth.userData);
  const reduxCartData = useSelector((state) => state.cart.cart);
  const [cartItem, setcartItem] = useState(reduxCartData?.cartItem || []);
  const [JSONcart, setJSONcart] = useState([]);
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

  // Ensure we log the entire reduxCartData object for debugging
  console.log("Redux Cart Data:", reduxCartData);

  // Logging cartItem for debugging
  console.log("User Data:", reduxUserData);
  console.log("Cart Item:", cartItem);

  const [active, setActive] = useState("");

  return (
    <div
      className={cn("fixed top-5 inset-x-0 w-[80vw] mx-auto z-50", className)}
    >
      <Menu className=" " setActive={setActive}>
        <div className="container flex justify-between h-[10vh] px-6">
          <div className="left">
            <Logo className="" height="70" />
          </div>

          <div className="right routes flex h-full items-center gap-7">
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/web-dev">Web Development</HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>

            {reduxUserData && cartItem.length > 0 ? (
             <Link href={'/cart'}> <MenuItem setActive={setActive} active={active} item="Cart">
                <div className="text-sm grid grid-cols-2 gap-10 p-4">
                  {JSONcart.map((item) =>
                      <ProductItem
                      title={item.title}
                      href={`property/${item.id}`}
                      src={item.images[0]}
                      description={item.description}
                      key={item.id}
                    />
                  )}
                </div>
              </MenuItem></Link>
            ) : (
              <MenuItem setActive={setActive} active={active} item="Cart">
                Cart is empty
              </MenuItem>
            )}

            {reduxUserData ? (
              <div className="flex items-center space-x-4">
                <ManageAccount />
              </div>
            ) : (
              <Link href="/signin">
                <div className="hover:text-yellow-500">Sign In</div>
              </Link>
            )}
          </div>
        </div>
      </Menu>
    </div>
  );
}
