"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar, {SidebarItem} from "@/components/Sidebar"
import { Boxes, LayoutDashboard, Package, Receipt, Settings, UserCircle } from "lucide-react";

export default function Home() {

  return (
    <>
    <div className="flex h-screen">
      <div className="flex flex-col ">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" alert active={undefined} />
          <SidebarItem icon={<UserCircle size={20} />} text="Dashboard" alert />
          <SidebarItem icon={<Boxes size={20} />} text="Dashboard" alert />
          <SidebarItem icon={<Package size={20} />} text="Dashboard" alert />
          <SidebarItem icon={<Receipt size={20} />} text="Dashboard" alert />
          <SidebarItem icon={<Settings size={20} />} text="Dashboard" alert />
        </Sidebar>
      </div>
      <Navbar title="Music" />
    </div>
    </>
  );
}
