"use client"

import { defaultVariantsNoDelay } from "@/components/motion-variants"
import { motion } from "motion/react"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa6"

export function LinkedInCard() {
   const MotionLink = motion(Link)
   return (
      <MotionLink
         href={"https://linkedin.com/in/olivercederborg"}
         target="_blank"
         title="Linkedin profile"
         variants={defaultVariantsNoDelay}
         whileHover={{ scale: 1.05 }}
         className="card-border relative col-span-2 row-span-1 flex items-center justify-center gap-x-2 overflow-hidden rounded-xl bg-[#0077B5] text-white dark:bg-[#0077B5] md:col-span-1 md:col-start-3 md:row-span-1 md:row-start-3"
      >
         <FaLinkedin size={24} />
      </MotionLink>
   )
}
