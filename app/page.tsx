"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar, { Sidebaritems } from "@/components/Sidebar"
import { Boxes, LayoutDashboard, Package, Receipt, Settings, UserCircle } from "lucide-react";

export default function Home() {

  return (
    <div className="flex h-screen">

      <Navbar title="Music" />

      <div className="flex flex-col flex-1">
        <Sidebar>
          <Sidebaritems icon={<LayoutDashboard size={20} />} text="Dashboard" alert active={undefined} />
          <Sidebaritems icon={<UserCircle size={20} />} text="Dashboard" alert />
          <Sidebaritems icon={<Boxes size={20} />} text="Dashboard" alert />
          <Sidebaritems icon={<Package size={20} />} text="Dashboard" alert />
          <Sidebaritems icon={<Receipt size={20} />} text="Dashboard" alert />
          <Sidebaritems icon={<Settings size={20} />} text="Dashboard" alert />
        </Sidebar>

      </div>
    </div>
  );
}
