"use client"
import { TrendingUp } from "lucide-react"
 import SalesReportChart from "./SalesReport";
 import {Alert} from "@heroui/react";
import SalesLocation from './SalesLocation';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis , ResponsiveContainer,
  RadialBarChart,
  RadialBar,
  Cell,
  PolarAngleAxis, } from "recharts"

  import {
  Card,
  Button,
  Chip,
  cn,
} from "@heroui/react";
import {
  Card as LocalCard,
  CardContent,
 
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
//import { Button } from '@heroui/react'
import { Icon } from "@iconify/react";

import  {ButtonProps, CardProps} from "@heroui/react";
import React from 'react'

const data=[
   {
    title: "ABNB",
    subtitle: "Airbnb, Inc.",
    value: "$137,34",
    chartData: [
      {month: "January", value: 120},
      {month: "February", value: 126},
      {month: "March", value: 123},
      {month: "April", value: 130},
      {month: "May", value: 133},
      {month: "June", value: 128},
      {month: "July", value: 125},
      {month: "August", value: 132},
      {month: "September", value: 135},
      {month: "October", value: 134},
      {month: "November", value: 136},
    ],
    change: "0.3%",
    color: "warning",
    xaxis: "month",
  },
]


const chartData = [
  { month: "Jan", desktop: 186, mobile: 80 },
  { month: "Feb", desktop: 305, mobile: 200 },
  { month: "Mar", desktop: 237, mobile: 120 },
  { month: "Apr", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "Jun", desktop: 214, mobile: 140 },
  { month: "Jul", desktop: 300, mobile: 140 },
  { month: "Aug", desktop: 250, mobile: 300 },
  { month: "Sep", desktop: 214, mobile: 140 },
  { month: "Nov", desktop: 214, mobile: 140 },
  { month: "Dec", desktop: 214, mobile: 140 },

 
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} 

const chartItem = {

  color: "success",
  total: 1000,
  chartData: [
    {
      name: "75%",
      value: 750,
      fill: "hsl(var(--heroui-success))",
    },
  ],
};



function SalesFigures() {
  const abnbStat = data.find(item => item.title === "ABNB");
   return (
      <section className='flex flex-col gap-4 p-4 mt-1 bg-[#18181B] rounded-[30px]'>
         <div className=' flex items-center justify-between'>
            <h1 className='font-bold text-white '>Sales Figures</h1>
            <div className='flex items-center gap-2'>
               <Button className="text-white font-semibold bg-black" variant='light'>
                  Marketing
               </Button>
               <Button className="text-white font-semibold bg-black" variant='light'>
                  Direct
               </Button>

              
            </div>

         </div>

          <LocalCard className="  p-4 w-full max-w-full mx-auto">
      
      <CardContent>
        <ChartContainer config={chartConfig} style={{ backgroundColor: "#000000" }} >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} stroke="#333" />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
                stroke="#fff"
              
            />
            <YAxis
              tickLine={false}
              axisLine={false}        
              tickMargin={8}
              tickCount={7}
             
              stroke="#fff"
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area
              dataKey="mobile"
              type="natural"
              fill="none"
            
        stroke="red"
        strokeWidth={3}
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
             fill="none"
        stroke="green"
        strokeWidth={3}
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      
    </LocalCard>
<div className="flex flex-col  lg:flex-row flex-nowrap gap-6 md:gap-8 lg:gap-8  mt-4 items-start">
  
  <div className="flex flex-col gap-2 w-full lg:w-auto lg:min-w-[500px]">
<div className="w-full">
        <CircleChartCard {...chartItem} className="w-full " />
      </div>

      <div className="w-full">
        <CircleChartCard {...chartItem} className="w-full"/>
      </div>
</div>


{abnbStat && (
  <div className="p-4 bg-black rounded-xl text-white flex-1 min-w-[300px] w-full lg:w-auto ">
   
    

    <div className="w-full h-44 mt-3">
      <ResponsiveContainer>
        <AreaChart data={abnbStat.chartData}>
          <Area
            dataKey="value"
            stroke="#facc15"
            fill="rgba(234,179,8,0.2)"
            type="monotone"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    
    <p className="text-2xl font-bold">{abnbStat.value}</p>
  <div className="flex justify-end">
  <p className="flex items-center gap-1 text-sm text-yellow-400">
    <TrendingUp size={16} />
    {abnbStat.change}
  </p>
</div>
     <h2 className="text-xs font-normal">{abnbStat.title} - {abnbStat.subtitle}</h2>

  </div>
)}
</div>
<div className="flex  flex-wrap gap-6 mt-6 lg:gap-8 justify-center ">
<div className="bg-black rounded-xl  p-4 sm:p-6 md:p-8 flex-1 min-w-[300px] max-w-[600px]">
  <div className="grid grid-cols-3 gap-4">
    <CircleChartCard {...chartItem} hideCenterText />
    <CircleChartCard {...chartItem} hideCenterText />
    <CircleChartCard {...chartItem} hideCenterText />
  </div>
  <div className="flex items-center  justify-center w-full mt-4">
      <div className="flex flex-col  w-full">
        {[ "primary"].map((color) => (
          <div key={color} className="w-full flex items-center my-3">
            <Alert 
            color={color}
              variant="flat"
               title={"Net sales, found on the income statement are used to calculate this ration returns and funds must be backed out of total sales to measure the truly measure the firms's assets ability to generate sales."}
                classNames={{
            base: "bg-[#001731]", 
            title: "text-white font-normal",           
           iconWrapper: "bg-[#001731] border-none",
           alertIcon:"text-blue-900 " 
          }}
                />
          </div>
        ))}
      </div>
    </div>
  
</div>
<div className="flex-1 min-w-[300px] max-w-[600px]">
    <SalesReportChart />
    </div>
</div>


<div className="flex flex-col gap-4 mt-6">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-white">New Customers</h1>
          <div className="flex items-center gap-2">
           <h1 className="font-bold text-white">Transaction History</h1>
          </div>
        </div>

        
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <SalesLocation />
          </div>
      </div>

      </section>
   )
}


function formatTotal(value) {
  return value?.toLocaleString() ?? "0";
}

const CircleChartCard = React.forwardRef(
  ({ className, title, color, chartData, total,hideCenterText = false, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn("h-[140px] w-full  border border-transparent bg-black", className)}
        {...props}
      >
        <div className="flex flex-col gap-y-2 p-4 pb-0">
         
        </div>
        <div className="flex h-full gap-x-3 pl-2">
          <ResponsiveContainer
            className="[&_.recharts-surface]:outline-none"
            height="100%"
            width="100%"
          >
            <RadialBarChart
              barSize={8}
              cx="20%"
              cy="50%"
              data={chartData}
              endAngle={-270}
              innerRadius={50}
              outerRadius={50}
              startAngle={90}
            >
              <PolarAngleAxis angleAxisId={0} domain={[0, total]} tick={false} type="number" />
              <RadialBar
                angleAxisId={0}
                animationDuration={1000}
                animationEasing="ease"
                background={{
                  fill: "hsl(var(--heroui-default-100))",
                }}
                cornerRadius={12}
                dataKey="value"
              >
                {chartData.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={`hsl(var(--heroui-${color === "default" ? "foreground" : color}))`}
                  />
                ))}
              </RadialBar>
              {!hideCenterText && (
              <g>
                <text textAnchor="middle" x="50%" y="48%">
                  <tspan className="fill-default text-lg font-bold" dx="-0.9em" dy="-0.5em" x="50%">
                    {chartData?.[0].name}
                     <tspan className="fill-default-500 text-sm font-normal "dx="1em" dy="1.5em" x="50%">
    Hit rate this year
  </tspan>
                  </tspan>
                  <tspan className="fill-foreground text-medium font-semibold" dy="1.5em" x="50%">
                    {formatTotal(total)}
                  </tspan>
                </text>
              </g>
              )}
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    );
  }
);

CircleChartCard.displayName = "CircleChartCard";

export default SalesFigures