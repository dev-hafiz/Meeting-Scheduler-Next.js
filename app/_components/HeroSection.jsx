"use client";
import { Button } from "@/components/ui/button";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div class="md:px-44 px-5 py-16">
      <div className="hidden lg:block">
        <Image
          src="/level.png"
          width={360}
          height={200}
          className="h-auto absolute right-[550px] top-[100px]"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div class="flex flex-col justify-center ">
          <div className="  text-start max-w-3xl">
            <h2 className="font-bold md:text-start text-center leading-none text-[76px] text-slate-700">
              Effortless scheduling
              <br />
              made easy
            </h2>
            <h2 className="text-[16px] text-center mt-8 text-[#486284] md:w-3/4 w-full md:text-justify ">
              Calenda streamlines scheduling, so you don't have to deal with
              endless email threads. Instead, you can quickly find a time that
              works for everyone and focus on other important tasks.
            </h2>
            <div className="flex flex-col md:justify-start md:items-start justify-center items-center">
              <p className="text-[16px] mt-8 text-[#070707] w-3/4 text-justify ">
                Sign Up for with Linkedin, Facebook and Google
              </p>
              <div className="flex justify-start gap-8 mt-3 pb-5 border-b-[1px] w-full">
                <LoginLink>
                  <Button className="px-5 py-6 flex gap-4 w-[120px] rounded-lg bg-[#F5F5F5] hover:bg-[#EBEBEB]">
                    <Image
                      src="/socialIn.png"
                      alt="google"
                      width={25}
                      height={25}
                    />
                  </Button>
                </LoginLink>
                <LoginLink>
                  <Button className="px-5 py-6 flex gap-4 w-[120px] rounded-lg bg-[#F5F5F5] hover:bg-[#EBEBEB]">
                    <Image
                      src="/socialFb.png"
                      alt="google"
                      width={25}
                      height={25}
                    />
                  </Button>
                </LoginLink>
                <LoginLink>
                  <Button className="px-5 py-6 flex gap-4 w-[120px] rounded-lg bg-[#F5F5F5] hover:bg-[#EBEBEB]">
                    <Image
                      src="/socialGoogle.png"
                      alt="google"
                      width={25}
                      height={25}
                    />
                  </Button>
                </LoginLink>
              </div>

              <p className="text-[16px] mt-3 text-[#070707] w-3/4 text-justify ">
                <LoginLink>
                  <span className="text-[#1A78F5] underline mr-1">
                    Sign up Free with Email.
                  </span>
                </LoginLink>
                No Credit card required
              </p>
            </div>
          </div>
        </div>
        <div class="hidden  lg:block   ">
          <img
            src="/Meetup.png"
            alt="Hero Level"
            className="w-[630px] h-[680px] float-right"
          />
        </div>
      </div>
      <div className="md:-mt-14 mt-10 flex flex-col md:justify-start md:items-start justify-center items-center">
        <img src="/users.png" className="w-[250px] h-auto" />
        <h2 className="text-[20px] mt-4 text-[#486284] w-3/4 md:text-start text-center">
          2000<sup className="text-xl">+</sup> registered users
        </h2>
      </div>
    </div>
  );
};

export default HeroSection;
