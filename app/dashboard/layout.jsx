import React from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

function Layout({ children }) {
  return (
    <div>
      <div className="hidden md:block bg-white h-screen w-64 fixed mt-[65px]">
        <SideNav />
      </div>
      <div>
        <Header />
        <div className="md:ml-64 p-10">{children}</div>
      </div>
    </div>
  );
}

export default Layout;
