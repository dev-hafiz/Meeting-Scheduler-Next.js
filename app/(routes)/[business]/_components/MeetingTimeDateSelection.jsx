"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarCheck, Clock, MapPin, Timer } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import TimeDateSelection from "./TimeDateSelection";

const MeetingTimeDateSelection = ({ eventInfo, businessInfo }) => {
  const [date, setDate] = useState(new Date());
  const [timeSlots, setTimeSlots] = useState();
  const [enableTimeSlot, setEnableTimeSlot] = useState(false);
  const [selectedTime, setSelectedTime] = useState();

  useEffect(() => {
    eventInfo?.duration && createTimeSlot(eventInfo?.duration);
  }, [eventInfo]);

  //Time Slots Calculatin
  const createTimeSlot = (interval) => {
    const startTime = 8 * 60; // 8 AM in minutes
    const endTime = 22 * 60; // 10 PM in minutes
    const totalSlots = (endTime - startTime) / interval;
    const slots = Array.from({ length: totalSlots }, (_, i) => {
      const totalMinutes = startTime + i * interval;
      const hours = Math.floor(totalMinutes / 60);
      const minutes = totalMinutes % 60;
      const formattedHours = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format
      const period = hours >= 12 ? "PM" : "AM";
      return `${String(formattedHours).padStart(2, "0")}:${String(
        minutes
      ).padStart(2, "0")} ${period}`;
    });

    setTimeSlots(slots);
  };

  const handleDateChange = (date) => {
    setDate(date);
    const day = format(date, "EEEE");
    if (businessInfo?.daysAvailable?.[day]) {
      setEnableTimeSlot(true);
    } else {
      setEnableTimeSlot(false);
    }
  };

  return (
    <div
      className="p-5 py-10 shadow-lg m-5 border-t-8
      mx-10
      md:mx-26
      lg:mx-56
      mt-20
      my-10
      "
      style={{ borderTopColor: eventInfo?.themeColor }}
    >
      <Image src="/logo.png" width={100} height={100} alt="logo" />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        {/* Meeting Info  */}
        <div className="p-4 border-r">
          <h2>{businessInfo?.businessName}</h2>
          <h2 className="font-bold text-2xl">
            {eventInfo?.eventName ? eventInfo?.eventName : "Meeting Name"}
            <div className="mt-5 flex flex-col gap-4">
              <h2 className="flex gap-2 items-center text-xl font-normal">
                <Clock /> {eventInfo?.duration} Min
              </h2>
              <h2 className="flex gap-2 items-center text-xl  font-normal">
                <MapPin /> {eventInfo?.locationType} Meeting
              </h2>
              <h2 className="flex gap-2 items-center text-xl  font-normal">
                <CalendarCheck /> {format(date, "PPP")}
              </h2>
              {selectedTime && (
                <h2 className="flex gap-2 items-center text-xl  font-normal">
                  <Timer /> {selectedTime}
                </h2>
              )}
              <Link
                href={eventInfo?.locationUrl || "#"}
                className="text-primary text-[16px] font-normal"
              >
                {eventInfo?.locationUrl}
              </Link>
            </div>
          </h2>
        </div>

        {/* Time & Date section  */}
        <TimeDateSelection
          date={date}
          enableTimeSlot={enableTimeSlot}
          handleDateChange={handleDateChange}
          setSelectedTime={setSelectedTime}
          timeSlots={timeSlots}
        />
      </div>
    </div>
  );
};

export default MeetingTimeDateSelection;
