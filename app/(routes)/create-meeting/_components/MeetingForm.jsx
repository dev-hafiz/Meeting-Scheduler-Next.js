import { ChevronLeft } from "lucide-react";
import React from "react";

const MeetingForm = () => {
  return (
    <div className="p-4">
      <h2 className="flex gap-2">
        <ChevronLeft /> Cancel{" "}
      </h2>
      <div className="mt-4">
        <h2 className="font-bold text-2xl my-4">Create New Event </h2>
        <hr />
      </div>
    </div>
  );
};

export default MeetingForm;
