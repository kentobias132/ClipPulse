"use client";

import {
  CircleUser,
  FileVideo,
  HomeIcon,
  PanelsTopLeft,
  ShieldAlert,
  ShieldPlus,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function SideNav() {
  const menuOption = [
    { id: 1, name: "Dashboard", path: "/dashboard", icon: PanelsTopLeft },
    {
      id: 2,
      name: "Create new",
      path: "/dashboard/create-new",
      icon: FileVideo,
    },
    { id: 3, name: "Upgrade", path: "/dashboard/upgrade", icon: ShieldPlus },
    { id: 4, name: "Account", path: "/dashboard/account", icon: CircleUser },
  ];

  const path = usePathname();

  return (
    <div className="w-64 p-5 h-screen shadow-md">
      <div className="grid gap-2">
        {menuOption.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`flex gap-3 p-3 items-center hover:bg-primary hover:text-white rounded-md cursor-pointer ${
                path == item.path && "bg-primary text-white"
              }`}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
