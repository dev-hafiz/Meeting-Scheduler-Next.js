import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div>
      <div>
        <Image
          src="/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className="w-[150px] md:w-[200px]"
        />
      </div>
    </div>
  );
};

export default Header;
