import { Button } from "@/components/ui/button";
import { Briefcase, Calendar, Clock, Plus, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

const SideNavBar = () => {
  const menu = [
    {
      id: 1,
      name: "Meeting Type",
      path: "/dashboard/meeting-type",
      icon: Briefcase,
    },
    {
      id: 2,
      name: "Scheduled Metting",
      path: "/dashboard/scheduled-metting",
      icon: Calendar,
    },
    {
      id: 3,
      name: "Availability",
      path: "/dashboard/availability",
      icon: Clock,
    },
    {
      id: 4,
      name: "Settings",
      path: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="p-5 py-14">
      <div className="flex justify-center">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </div>
      <Button className="flex gap-2 w-full rounded-full mt-7">
        <Plus /> Create
      </Button>
      <div className="mt-5 flex flex-col gap-4">
        {menu.map((item, index) => (
          <Button
            variant="gost"
            className="w-full flex gap-2 justify-start hover:bg-blue-100"
            key={index}
          >
            <item.icon /> {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SideNavBar;
