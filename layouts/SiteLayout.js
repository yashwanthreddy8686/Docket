import React from "react";
// next
import { useRouter } from "next/router";
// layouts
import DashboardLayout from "./DashboardLayout";
import BasicLayout from "./BasicLayout";
// hooks
import { useUser } from "lib/hooks";

function SiteLayout({ children }) {
  const router = useRouter();

  if (router.pathname.startsWith("/dashboard")) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  if (router.pathname.startsWith("/projects")) {
    return <DashboardLayout>{children}</DashboardLayout>;
  }

  if (router.pathname.startsWith("/accounts")) {
    return <>{children}</>;
  }

  return <BasicLayout>{children}</BasicLayout>;
}

export default SiteLayout;
