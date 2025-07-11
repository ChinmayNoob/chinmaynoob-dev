"use client"

import { defaultVariantsNoDelay } from "@/components/motion-variants"
import { motion } from "motion/react"
import Image from "next/image"

export function MeCard() {
   return (
      <motion.div
         variants={defaultVariantsNoDelay}
         whileHover={{ scale: 1.05 }}
         className="card-border relative col-span-4 row-span-3 overflow-hidden rounded-xl md:col-span-2 md:row-span-3"
      >
         <Image
            alt="Chinmay Sawant"
            src="/assets/chinmay.webp"
            height={300}
            width={300}
            className="h-full object-cover grayscale-[0.35] filter"
            priority
         />
      </motion.div>
   )
}
