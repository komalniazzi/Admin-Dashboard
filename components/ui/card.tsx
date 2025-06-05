import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-medium  m-1 ml-2 mr-2 p-2 bg-black text-card shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"



const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-2 mt-2 text-white " , className)} {...props} />
))
CardContent.displayName = "CardContent"



export { Card,  CardContent }
