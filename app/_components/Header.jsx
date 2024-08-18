import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-5 shadow-sm">
        <Image
          src="/logo.svg"
          width={100}
          height={100}
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
          <Button variant="ghost">Login</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
