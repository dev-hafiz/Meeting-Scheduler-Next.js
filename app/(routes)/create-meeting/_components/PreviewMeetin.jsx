import { Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const PreviewMeetin = ({ formValue }) => {
  return (
    <div className="p-5 py-10 shadow-lg m-5 border-t-8">
      <Image src="/logo.png" width={100} height={100} />
      <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
        {/* Meeting Info  */}
        <div className="p-4 border-r">
          <h2>Business Name</h2>
          <h2 className="font-bold text-2xl">
            {formValue?.eventName ? formValue?.eventName : "Meeting Name"}
            <div className="mt-5 flex flex-col gap-4">
              <h2 className="flex gap-2 items-center text-xl font-normal">
                <Clock /> {formValue?.duration} Min
              </h2>
              <h2 className="flex gap-2 items-center text-xl  font-normal">
                <MapPin /> {formValue?.locationType} Meeting
              </h2>
              <Link
                href={formValue?.locationUrl || "#"}
                className="text-primary text-[16px] font-normal"
              >
                {formValue?.locationUrl}
              </Link>
            </div>
          </h2>
        </div>

        {/* Time & Date section  */}
        <div className="md:col-span-2"></div>
      </div>
    </div>
  );
};

export default PreviewMeetin;
