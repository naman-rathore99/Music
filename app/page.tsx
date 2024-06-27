"use client"

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar, { SidebarItem } from "@/components/Sidebar"
import { Boxes, LayoutDashboard, Package, Receipt, Settings, UserCircle } from "lucide-react";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function Home() {

  return (
    <>
      <Navbar title="Music" />
      <div className="flex  h-screen">
        <div className="flex flex-col ">
          <Sidebar>
            <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" alert active={true} />
            <SidebarItem icon={<UserCircle size={20} />} text="Dashboard" alert active={false} />
            <SidebarItem icon={<Boxes size={20} />} text="Dashboard" alert active={false} />
            <SidebarItem icon={<Package size={20} />} text="Dashboard" alert active={false} />
            <SidebarItem icon={<Receipt size={20} />} text="Dashboard" alert active={false} />
            <SidebarItem icon={<Settings size={20} />} text="Dashboard" alert active={false} />
          </Sidebar>
        </div>
        <Tabs defaultValue="music" className="h-full space-y-6">
          <TabsContent
            value="music"
            className="border-none p-0 outline-none"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  Listen Now
                </h2>
                <p className="text-sm text-muted-foreground">
                  Top picks for you. Updated daily.
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {/* {listenNowAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[250px]"
                                aspectRatio="portrait"
                                width={250}
                                height={330}
                              />
                            ))} */}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
            <div className="mt-6 space-y-1">
              <h2 className="text-2xl font-semibold tracking-tight">
                Made for You
              </h2>
              <p className="text-sm text-muted-foreground">
                Your personal playlists. Updated daily.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="relative">
              <ScrollArea>
                <div className="flex space-x-4 pb-4">
                  {/* {madeForYouAlbums.map((album) => (
                              <AlbumArtwork
                                key={album.name}
                                album={album}
                                className="w-[150px]"
                                aspectRatio="square"
                                width={150}
                                height={150}
                              />
                            ))} */}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent
            value="podcasts"
            className="h-full flex-col border-none p-0 data-[state=active]:flex"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold tracking-tight">
                  New Episodes
                </h2>
                <p className="text-sm text-muted-foreground">
                  Your favorite podcasts. Updated daily.
                </p>
              </div>
            </div>
            <Separator className="my-4" />
            {/* <PodcastEmptyPlaceholder />  */}
          </TabsContent>
        </Tabs>
      </div>
      
      <div>
      
      </div>
    </>
  );
}
