import { Card, CardBody, CardFooter, CardHeader } from '@heroui/react'
import React from 'react'

const data = [
   {
      title: "SALES",
      amount: "21.2K",
      sales:"($15.8K last year)",
      value: 105.23
   },
   {
      title: "PURCHASE",
      amount: "21.2K",
       sales:"($15.8K last year)",
      value: 105.23
   }, {
      title: "RETURN",
      amount: "21.2K",
       sales:"($15.8K last year)",
      value: 105.23
   }, {
      title: "MARKETING",
      amount: "21.2K",
       sales:"($15.8K last year)",
      value: 105.23
   }
]
function AnalyticsOverview() {
   return (
      <section className='flex flex-col gap-4 p-4 mt-2 bg-[#18181B] rounded-[30px]'>
         <h1 className='font-bold text-white '>Analytics Overview</h1>
         <div className='grid grid-cols-1 gap-6 ml-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {
               data.map((item) => (
                  <CardToUse key={item.title} title={item.title} amount={item.amount} value={item.value} sales={item.sales}
                  />
               ))
            }
         </div>
      </section>
   )
}

function CardToUse({ title, amount, value, sales }) {
   return (
      <Card className='py-4 bg-black'>
         <CardHeader className='flex items-center justify-center font-medium text-sm text-white'>
            {title}
         </CardHeader>
         <CardBody className='flex flex-col items-center justify-center text-white'>
        <div className='text-2xl font-bold'>${amount}</div>
        <p className='text-sm text-gray-400 mt-1'>{sales}</p>
         </CardBody>
         <CardFooter className='flex items-center justify-center text-success'>{value} %</CardFooter>
      </Card>
   )
}

export default AnalyticsOverview