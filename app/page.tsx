"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar, {SidebarItem} from "@/components/Sidebar"
import { Boxes, LayoutDashboard, Package, Receipt, Settings, UserCircle } from "lucide-react";

export default function Home() {

  return (
    <>
      <Navbar title="Music" />
    <div className="flex  h-screen">
      <div className="flex flex-col ">
        <Sidebar>
          <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" alert active={true} />
          <SidebarItem icon={<UserCircle size={20} />} text="Dashboard" alert active={false}/>
          <SidebarItem icon={<Boxes size={20} />} text="Dashboard" alert active={false}/>
          <SidebarItem icon={<Package size={20} />} text="Dashboard" alert active={false}/>
          <SidebarItem icon={<Receipt size={20} />} text="Dashboard" alert active={false}/>
          <SidebarItem icon={<Settings size={20} />} text="Dashboard" alert active={false}/>
        </Sidebar>
      </div>
    </div>
    </>
  );
}
