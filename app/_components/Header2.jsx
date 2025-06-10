'use client'
import React from 'react'
import { Button, Select, SelectItem } from '@heroui/react';
import { Icon } from '@iconify/react';


export const animals = [
   { key: "this Year", label: "This Year" },
   { key: "yesterday", label: "Yesterday" },
   { key: "last Year", label: "Last Year" },
  
];

function Header2() {
   return (
      <div className='flex items-center justify-between p-2  '> 
         <Select     
       classNames={{
         base:"max-w-full sm:max-w-[12rem] h-12",
         mainWrapper:"h-full",
         input:"text-small text-white",
         trigger:"bg-[#18181B] text-white",
         innerWrapper:"h-full font-normal bg-[#18181B] dark:bg-default-500/20",
          listbox: "bg-[#18181B] text-white",                
             item: "hover:bg-gray-700",                           
             label: "text-white font-bold ",  
       }}
       color="primary"
          defaultSelectedKeys={["this Year"]}
          label="Show:"
          radius="lg"
          placeholder="Select Year"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.key}>{animal.label}</SelectItem>
          ))}
        </Select>
         <Button color='primary'>
            <Icon icon="material-symbols:download-rounded" width="24" height="24" />
            Generate Report
         </Button>
      </div>
   )
}

export default Header2