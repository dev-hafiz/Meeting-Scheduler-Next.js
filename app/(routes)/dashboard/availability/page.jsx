"use client";

import DaysList from "@/app/_utils/DaysList";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";

const Availability = () => {
  const [daysAvailable, setDaysAvaiable] = useState([]);
  const [startTime, setStartTime] = useState();
  const [endtTime, setEndTime] = useState();

  const onHandleChange = (day, value) => {
    setDaysAvaiable({
      ...daysAvailable,
      [day]: value,
    });
  };

  const handleSave = () => {
    console.log(daysAvailable, startTime, endtTime);
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
            <Input type="time" onChange={(e) => setStartTime(e.target.value)} />
          </div>
          <div className="mt-3">
            <h2>End Time</h2>
            <Input type="time" onChange={(e) => setEndTime(e.target.value)} />
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
