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
          className="max-w-xs"
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