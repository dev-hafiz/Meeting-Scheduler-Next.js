import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="hidden lg:block">
        <Image
          src="/profile1.jpg"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute right-36"
        />
        <Image
          src="/profile2.jpg"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute top-48  left-16"
        />
        <Image
          src="/profile3.jpg"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute bottom-20 left-36"
        />
        <Image
          src="/profile4.jpg"
          width={100}
          height={100}
          className="h-[100px] object-cover rounded-full absolute right-16 bottom-32"
        />
      </div>
      <div className="mt-5 md:mt-20 text-center max-w-3xl">
        <h2 className="font-bold text-[60px] text-slate-700">
          Easy scheduling ahead
        </h2>
        <h2 className="text-xl mt-5 text-slate-500 ">
          Calenda is your scheduling automation platform for eliminating the
          back-and-forth emails to find the perfect time - and so much more.
        </h2>
      </div>
      <div className="flex w-full flex-col gap-4 mt-5 mx-5 md:mx-0 text-center">
        <h3 className="text-sm">Sign Up for with Google and Facebook </h3>
        <div className="flex justify-center gap-8">
          <Button className="p-7 flex gap-4">
            <Image src="/google.png" alt="google" width={40} height={40} />
            Sign up with Google
          </Button>
          <Button className="p-7 flex gap-4">
            <Image src="/facebook.png" alt="google" width={40} height={40} />
            Sign up with Facebook
          </Button>
        </div>
        <hr className="w-2/4 mx-auto mt-2" />
        <h2>
          <Link href="" className="text-primary">
            Sign up Free with Email.
          </Link>{" "}
          No Credit card reuired
        </h2>
      </div>
    </div>
  );
};

export default Hero;
