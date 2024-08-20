"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LocationOption from "@/app/_utils/LocationOption";
import Image from "next/image";
import Link from "next/link";
import ThemeOptions from "@/app/_utils/ThemeOptions";

const MeetingForm = () => {
  const [themeColor, setThemeColor] = useState();
  const [eventName, setEventName] = useState();
  const [duration, setDuration] = useState(30);
  const [locationType, setLocationType] = useState();
  const [locationUrl, setLocationUrl] = useState();

  return (
    <div className="p-8">
      <Link href={"/dashboard"}>
        <h2 className="flex gap-2">
          <ChevronLeft /> Cancel
        </h2>
      </Link>
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-4">Create New Event </h2>
        <hr />
      </div>
      <div className="flex flex-col gap-3 my-4">
        <h2 className="font-bold">Event Name *</h2>
        <Input
          placeholder="Name of your meeting event"
          onChange={(event) => setEventName(event.target.value)}
        />

        <h2 className="font-bold">Duration *</h2>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="max-w-40">
              {duration} Min
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setDuration(15)}>
              15 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDuration(30)}>
              30 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDuration(45)}>
              45 Min
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setDuration(60)}>
              60 Min
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <h2 className="font-bold">Location *</h2>
        <div className="grid grid-cols-4 gap-3">
          {LocationOption.map((option, index) => (
            <div
              onClick={() => setLocationType(option.name)}
              className={`
              border flex flex-col justify-center items-center p-3 rounded-lg
              cursor-pointer hover:bg-blue-100 
              ${locationType === option.name && "bg-blue-100 border-blue-500"}
              `}
            >
              <Image
                src={option.icon}
                width={30}
                height={30}
                alt={option.name}
              />
              <h2>{option.name}</h2>
            </div>
          ))}
        </div>

        {locationType && (
          <div>
            <h2 className="font-bold">Add {locationType} Url *</h2>
            <Input
              placeholder="Add url"
              onChange={(event) => setLocationUrl(event.target.value)}
            />
          </div>
        )}

        <h2 className="font-bold">Select Theme Color *</h2>
        <div className="flex justify-evenly">
          {ThemeOptions.map((color, index) => (
            <div
              onClick={() => setThemeColor(color)}
              key={index}
              className={`w-7 h-7 rounded-full 
              ${themeColor === color && "border-4 border-black"}
              `}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      </div>
      <Button
        disabled={!eventName || !duration || !locationType || !locationUrl}
        className="w-full mt-9"
      >
        Create
      </Button>
    </div>
  );
};

export default MeetingForm;
