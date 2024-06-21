"use client"

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function Home() {
 
  return (
    <div className="flex h-screen">
    <Sidebar/>
      <Navbar title="Music"/>
    <div className="flex flex-col flex-1">
     
    </div>
  </div>
  );
}
