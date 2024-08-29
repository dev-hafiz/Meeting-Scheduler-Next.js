"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";
import Image from "next/image";
import React, { useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CreateBusiness = () => {
  const [businessName, setBusinessName] = useState();
  const db = getFirestore(app);
  const { user } = useKindeBrowserClient();
  const router = useRouter();

  const onCreateBusiness = async () => {
    // console.log("btn Click", businessName);
    await setDoc(doc(db, "Business", user.email), {
      businessName: businessName,
      email: user.email,
      userName: user.given_name + " " + user.family_name,
    }).then((resp) => {
      // console.log("Document Save");
      toast("New Business Created!");
      router.replace("/dashboard");
    });
  };
  return (
    <div className="flex flex-col items-center p-14 gap-20 my-10">
      <Link href="/">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="logo"
          className="w-[150px] md:w-[200px]"
        />
      </Link>
      <div className="flex flex-col items-center gap-4 max-w-3xl ">
        <h2 className="text-4xl font-bold">
          What should we call your business?
        </h2>
        <p className="text-slate-500">
          You can always change this later from settings
        </p>
        <div className="w-full">
          <label className="text-slate-400">Team Name</label>
          <Input
            placeholder="Write your tema name"
            className="mt-2"
            onChange={(event) => setBusinessName(event.target.value)}
          />
        </div>
        <Button
          disabled={!businessName}
          onClick={onCreateBusiness}
          className="w-full"
        >
          Create Business
        </Button>
      </div>
    </div>
  );
};

export default CreateBusiness;
