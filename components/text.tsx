"use client"

import { defaultVariants } from "./motion-variants"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { MotionProps, motion } from "motion/react"

type TextProps = {
   children: React.ReactNode
   className?: string
   asChild?: boolean
   hasMotion?: boolean
} & MotionProps

export function Text({
   children,
   className,
   asChild,
   hasMotion = true,
   ...props
}: TextProps) {
   const BaseComp = asChild ? Slot : "p"
   const Comp = hasMotion ? motion(BaseComp) : BaseComp

   const motionProps = hasMotion ? {
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
      variants: defaultVariants,
      ...props
   } : {}

   return (
      <Comp
         {...motionProps}
         className={cn("text-base font-normal leading-relaxed", className)}
      >
         {children}
      </Comp>
   )
}
