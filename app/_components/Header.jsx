"use client";
import { Button } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between md:px-44 px-5  py-3 shadow-sm">
        <Image
          src="/logo.png"
          width={200}
          height={150}
          alt="logo"
          className="w-[150px] md:w-[200px]"
        />
        <ul className="hidden md:flex gap-14 font-medium text-lg">
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Product
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Pricing
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            Contuct us
          </li>
          <li className="hover:text-primary transition-all duration-300 cursor-pointer">
            About us
          </li>
        </ul>
        <div className="flex gap-5">
          <LoginLink>
            <Button variant="ghost">Login</Button>
          </LoginLink>

          <RegisterLink>
            <Button>Get Started</Button>
          </RegisterLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
