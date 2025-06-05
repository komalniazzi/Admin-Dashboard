"use client";

import React from "react";
import {
   Button,
   Card,
   CardBody,
   CardFooter,
   Input,
   ScrollShadow,
   Spacer,
} from "@heroui/react";
import { Icon } from "@iconify/react";

 //import { DashboardIcon } from "../images/icon.png";
import { sectionItems, sectionNestedItems } from "../../components-data/sidebar-items";

import Sidebar from "../../components-data/sidebar";

/**
 * 💡 TIP: You can use the usePathname hook from Next.js App Router to get the current pathname
 * and use it as the active key for the Sidebar component.
 *
 * ```tsx
 * import {usePathname} from "next/navigation";
 *
 * const pathname = usePathname();
 * const currentPath = pathname.split("/")?.[1]
 *
 * <Sidebar defaultSelectedKey="home" selectedKeys={[currentPath]} />
 * ```
 */
export default function Component() {
   return (
      <div className="h-dvh">
         <div className="relative flex flex-col flex-1 h-full p-6 w-72 border-r-small border-divider">
            <div className="flex items-center  px-2">
               <div className="flex items-center justify-center w-6 h-6 rounded-full bg-foreground ">
                    <Icon 
      icon="mdi:rocket" 
      width="24" 
      height="24" 
    className="text-blue-500 "
      aria-label="rocket icon"
    /> 
               </div>
               <span className="font-extrabold text-white text-large ">DashboardX</span> 
            </div>

            <Spacer y={8} />

            <ScrollShadow className="h-full max-h-full py-6 pr-6 -mr-2">
               <Sidebar defaultSelectedKey="home" items={sectionItems} />
                
           <Card className="relative mx-2 mt-24 bg-[#001731] overflow-visible " radius="lg" shadow="sm">
  <Button
    className="absolute -top-7 left-1/2 -translate-x-1/2 z-10 w-10 h-12"
    color="primary"
    variant="solid"
    size="sm"
    radius="lg"
  >
    ↑
  </Button>

  <CardBody className="text-center px-5 py-7 text-white">
    <h3 className="text-medium font-normal">
      Upgrade to <strong>Pro</strong> for more resources 🚀
    </h3>
    <Button
      className="mt-5 shadow-md"
      color="primary"
      fullWidth
      radius="lg"
      variant="solid"
    >
      Upgrade
    </Button>
  </CardBody>
</Card>

            </ScrollShadow>

            <Spacer y={8} />

         </div>
      </div>
   );
}
