import React from "react";
// components
// import { DashboardHeader } from "components/toolbars";
// Custom Hooks
import { useUser } from "lib/hooks";

import dynamic from "next/dynamic";

const DashboardHeader = dynamic(() => import("../components/toolbars/DashboardHeader"));

const DashboardLayout = ({ children }) => {
  const user = useUser();
  console.log(user);
  return (
    <div className="dashboard-wrapper">
      <header className="dashboard-header">
        <DashboardHeader user={user} />
      </header>
      <main className="dashboard-main">{children}</main>
    </div>
  );
};

export default DashboardLayout;
