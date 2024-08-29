"use client";

import DaysList from "@/app/_utils/DaysList";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import { app } from "@/config/FirebaseConfig";
import React, { useEffect, useState } from "react";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { toast } from "sonner";

const Availability = () => {
  const [daysAvailable, setDaysAvailable] = useState([
    {
      Sunday: false,
    },
    {
      Monday: false,
    },
    {
      Tuesday: false,
    },
    {
      Wednesday: false,
    },
    {
      Thrusday: false,
    },
    {
      Friday: false,
    },
    {
      Saturday: false,
    },
  ]);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const { user } = useKindeBrowserClient();

  console.log(daysAvailable);
  //firebase database
  const db = getFirestore(app);

  const onHandleChange = (day, value) => {
    setDaysAvailable({
      ...daysAvailable,
      [day]: value,
    });
  };

  useEffect(() => {
    user && getBusinessInfo();
  }, [user]);

  //Get Business info from BD
  const getBusinessInfo = async () => {
    // const docRef = (db, "Business", user?.email);
    // const docSnap = await getDoc(docRef);
    // const result = docSnap.data();
    // setDaysAvaiable(result.daysAvailable);

    try {
      const docRef = doc(db, "Business", user?.email); // Corrected line
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const result = docSnap.data();
        setDaysAvailable(result?.daysAvailable);
        setStartTime(result?.startTime);
        setEndTime(result?.endTime);
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  //Send Business Info In DB
  const handleSave = async () => {
    // console.log(daysAvailable, startTime, endTime);
    const docRef = doc(db, "Business", user?.email);

    await updateDoc(docRef, {
      daysAvailable: daysAvailable,
      startTime: startTime,
      endTime: endTime,
    }).then((resp) => {
      toast("Availability Updated !");
    });
  };

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold ">Availability</h2>
      <hr className="my-7" />
      <div>
        <h2 className="font-bold"> Availability Days</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-3">
          {DaysList.map((item, index) => (
            <div key={index}>
              <h2>
                <Checkbox
                  checked={
                    item?.day &&
                    daysAvailable &&
                    daysAvailable[item.day] !== undefined
                      ? daysAvailable[item.day]
                      : false
                  }
                  onCheckedChange={(e) => onHandleChange(item?.day, e)}
                />{" "}
                {item?.day}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-bold mt-10"> Availability Time</h2>
        <div className="flex items-center gap-10">
          <div className="mt-3">
            <h2>Start Time</h2>
            <Input
              type="time"
              defaultValue={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
          </div>
          <div className="mt-3">
            <h2>End Time</h2>
            <Input
              type="time"
              defaultValue={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
        </div>
      </div>
      <Button className="mt-10" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default Availability;
