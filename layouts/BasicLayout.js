import React from "react";
// components
import { Navigation } from "components/toolbars";

function BasicLayout({ children }) {
  return (
    <div>
      <Navigation />
      <main>{children}</main>
      {/* <SiteFooter /> */}
    </div>
  );
}

export default BasicLayout;
