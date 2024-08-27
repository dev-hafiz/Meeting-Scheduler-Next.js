import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className=" flex flex-col justify-center items-center my-20">
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
        <h3 className="text-sm">
          Sign Up for with Linkedin, Facebook and Google
        </h3>
        <div className="flex justify-center gap-8 mt-3">
          <Button className="px-5 py-6 flex gap-4 w-[120px] rounded-lg bg-[#F5F5F5] hover:bg-[#EBEBEB]">
            <Image src="/socialIn.png" alt="google" width={25} height={25} />
          </Button>
          <Button className="px-5 py-6 flex gap-4 w-[120px] rounded-lg bg-[#F5F5F5] hover:bg-[#EBEBEB]">
            <Image src="/socialFb.png" alt="google" width={25} height={25} />
          </Button>
          <Button className="px-5 py-6 flex gap-4 w-[120px] rounded-lg bg-[#F5F5F5] hover:bg-[#EBEBEB]">
            <Image
              src="/socialGoogle.png"
              alt="google"
              width={25}
              height={25}
            />
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
