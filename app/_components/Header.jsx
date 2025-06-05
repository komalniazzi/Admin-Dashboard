"use client";

import React from "react";
import {
   Navbar,
   NavbarBrand,
   NavbarContent,
   NavbarItem,
   NavbarMenu,
   NavbarMenuItem,
   NavbarMenuToggle,
   Link,
   Button,
   Divider,
   Avatar,
   Input,
   Badge,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import { cn } from "@heroui/react";

// import { AcmeIcon } from "./acme";

const menuItems = [
   "About",
   "Blog",
   "Customers",
   "Pricing",
   "Enterprise",
   "Changelog",
   "Documentation",
   "Contact Us",
];

export default function Header(props) {

   return (
      <div className="flex items-center justify-between  w-full p-4">
         {/* Left Content */}
         <div className="rounded-full text-lg font-semibold text-white text-background">
              <span aria-label="map-emoji"  role="img">
                       📈    
                        </span>
            Overview
         </div>

         <div className="flex-grow max-w-sm ">
            <Input
               fullWidth
               aria-label="search"
               className="px-1 sm:px-5 "
               labelPlacement="outside"
               placeholder="Search..."
               endContent={
                  <Icon
                     className="text-default-500  [&>g]:stroke-[2px]"
                     icon="solar:magnifer-linear"
                     width={18}
                  />
               }
            />
         </div>

         {/* Right Content */}
         <div className="flex items-center gap-3">
            <Button>
                <Badge color="primary" content="5" size="sm" shape="circle" showOutline={false}>
               <Icon icon="mage:notification-bell-fill" width="24" height="24" />
               </Badge>
            </Button>

            <Button>
               <Icon icon="majesticons:settings-cog-line" width="24" height="24" />
            </Button>
            <Avatar isBordered size="sm" src="https://i.pravatar.cc/150?u=a04258114e29026708c" />

         </div>
      </div>
   );
}
