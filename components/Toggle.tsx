
// import { Switch } from "./ui/switch"
// import { useTheme } from "next-themes"


"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import { MdOutlineWbSunny } from "react-icons/md";

import { FaRegMoon } from "react-icons/fa";

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"



// const Toggle =()=>{
  // const { setTheme } = useTheme()

  // const handleSwitchClick = () => {
  //   setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'system'));
  // };

  //   return (
  //       <div className="flex items-center space-x-2">
  //       <Switch onClick={() => handleSwitchClick()}/>
  //     </div>
    

export function Toggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <MdOutlineWbSunny className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />

          <FaRegMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />

          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}



export default  Toggle;