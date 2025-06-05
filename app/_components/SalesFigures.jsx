"use client"
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
 
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { Button } from '@heroui/react'
import React from 'react'

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


function SalesFigures() {
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

          <Card className="  p-4 w-full max-w-full mx-auto">
      
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
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
             fill="none"
        stroke="green"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      
    </Card>
      </section>
   )
}

export default SalesFigures