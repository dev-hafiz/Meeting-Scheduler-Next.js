import React from "react";
import SideNavBar from "./_components/SideNavBar";

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="w-64 bg-slate-100 h-screen">
        <SideNavBar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
