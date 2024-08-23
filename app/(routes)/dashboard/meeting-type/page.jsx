"use client";
import { Input } from "@/components/ui/input";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";
import React, { useEffect } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const MeetingType = () => {
  const { user } = useKindeBrowserClient();
  //Get Data From Firebase
  const db = getFirestore(app);

  useEffect(() => {
    user && getEventList();
  }, [user]);

  const getEventList = async () => {
    const q = query(
      collection(db, "MeetingEvent"),
      where("createdBy", "==", user?.email)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  return (
    <div className="p-5">
      <div className="flex flex-col gap-5">
        <h2 className="font-bold text-3xl">Meeting Event Type </h2>
        <Input placeholder="Search " className="max-w-xs" />
        <hr />
      </div>
    </div>
  );
};

export default MeetingType;
