"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <LogoutLink>Logout</LogoutLink>
    </div>
  );
};

export default Dashboard;
