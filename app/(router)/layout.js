import React from "react";
import SideNav from "./_components/SIdeNav";

const layout = ({ children }) => {
  return (
    <div>
      <div className="sm:w-64 hidden sm:block fixed">
        <SideNav />
      </div>
      <div className="ml-64">{children}</div>
    </div>
  );
};

export default layout;