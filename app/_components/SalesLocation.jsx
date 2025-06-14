"use client";
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Avatar,
  Chip
} from "@heroui/react";
import {
  FaEllipsisH,
  FaComment,
  FaBan,
  FaCheck,
  FaUndo,
  FaTimes
} from 'react-icons/fa';

const newCustomers = [
  {
    name: 'Seth Daniels',
    username: '@sethdaniels',
    img: 'https://storage.googleapis.com/a1aa/image/9af17cbb-bfca-4197-9e29-7be79c878dfa.jpg',
  },
  {
    name: 'Myrtle Perkins',
    username: '@myrtleperkins',
    img: 'https://storage.googleapis.com/a1aa/image/fde2d720-f677-48ba-c7e5-38171d4ea28e.jpg',
  },
  {
    name: 'Dominic Baker',
    username: '@dminicbaker',
    img: 'https://storage.googleapis.com/a1aa/image/99c934d3-2ba5-4d3d-7d45-c84668df2f59.jpg',
  },
  {
    name: 'Ollie Baldwin',
    username: '@olliebaldwin',
    img: 'https://storage.googleapis.com/a1aa/image/2fbda5df-30bc-4aaf-b97d-bb28190921b5.jpg',
  },
];

const transactions = [
  {
    type: 'success',
    label: 'Payment from',
    ref: '#10023',
    time: 'Today, 10:30 AM',
    amount: '+ $650.00',
    icon: <FaCheck />,
    bgColor: 'bg-[#0f4d3f]',
    statusColor: 'text-[#1ed760]',
    statusText: 'Completed',
  },
  {
    type: 'refund',
    label: 'Process refund to',
    ref: '#10024',
    time: 'Today, 10:30 AM',
    amount: '- $250.00',
    icon: <FaUndo />,
    bgColor: 'bg-[#6a4b1a]',
    statusColor: 'text-[#1ed760]',
    statusText: 'Completed',
  },
  {
    type: 'failed',
    label: 'Payment failed from',
    ref: '#10025',
    time: 'Today, 10:30 AM',
    amount: '+ $128.00',
    icon: <FaTimes />,
    bgColor: 'bg-[#6a1a0f]',
    statusColor: 'text-[#d9480f]',
    statusText: 'Declined',
  },
];

const SalesLocation = () => {
  return (
    <div className="w-full ">
      <div className="flex flex-col lg:flex-row  gap-6 w-full">    
        <Card className="w-full lg:w-[330px] lg:flex-none bg-black rounded-xl  ">
          <CardBody className='mt-4' >
            <ul className="flex flex-col gap-5">
              {newCustomers.map((customer, index) => (
                <li key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar 
                      src={customer.img} 
                      alt={customer.name}
                      className="w-10 h-10"
                    />
                    <div className="flex flex-col leading-tight">
                      <span className="font-semibold text-white text-sm">{customer.name}</span>
                      <span className="text-[#6B6B6B] text-xs">{customer.username}</span>
                    </div>
                  </div>
                  <div className="flex gap-4 text-white text-lg">
                    <FaComment className="cursor-pointer" />
                    <FaBan className="cursor-pointer" />
                  </div>
                </li>
              ))}
            </ul>
          </CardBody>
          <CardFooter>
            <Button 
              className="w-full bg-[#2E2E2E] text-[#B3B3B3] hover:bg-[#3a3a3a]"
              variant="flat"
              size="sm"
            >
              View more Customers
            </Button>
          </CardFooter>
        </Card>

        <div className="flex-1 min-w-0">
        <Card className="h-full bg-black rounded-xl">
         
          <CardBody className='p-0'>
            <div className="overflow-x-auto">
            <Table aria-label="Transaction history" 
             classNames={{
  
    wrapper:"bg-black w-full overflow-x-auto",
     base: "min-w-[600px] md:min-w-full",
    tbody: "bg-black",
    th: "text-[#B3B3B3] bg-[#2E2E2E]  text-xs font-semibold py-3 px-4",
    td: "text-white py-4 px-4",
    tr: "border-b border-[#2E2E2E]"
  }}
            >
              <TableHeader>
                <TableColumn >
                  PAYMENT NUMBER
                </TableColumn>
                <TableColumn >
                  AMOUNT
                </TableColumn>
                <TableColumn >
                  STATUS
                </TableColumn>
              </TableHeader>
              <TableBody >
                {transactions.map((txn, idx) => (
                  <TableRow key={idx} className="border-b border-[#2E2E2E]">
                    <TableCell>
                      <div className="flex items-start gap-3">
                        <div className={`w-6 h-6 rounded-full ${txn.bgColor} flex items-center justify-center mt-1`}>
                          <span className="text-xs text-white">{txn.icon}</span>
                        </div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-white text-sm">
                            {txn.label}{' '}
                            <a href="#" className="text-[#0a6ed1] hover:underline">
                              {txn.ref}
                            </a>
                          </span>
                          <span className="text-[#6B6B6B] text-xs">{txn.time}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-4 px-4 font-semibold text-white text-sm">
                      {txn.amount}
                    </TableCell>
                    <TableCell className="py-4 px-4">
                      <Chip 
                        className={`${txn.bgColor} ${txn.statusColor}`}
                        size="sm"
                      >
                        {txn.statusText}
                      </Chip>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </div>
          </CardBody>
          <CardFooter>
            <Button 
              className="w-full bg-[#2E2E2E] text-[#B3B3B3] hover:bg-[#3a3a3a]"
              variant="flat"
              size="sm"
            >
              View All transactions
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default SalesLocation;