"use client"

import { Leetcode } from "@/components/icons/leetcode"
import { defaultVariantsNoDelay } from "@/components/motion-variants"
import { motion } from "motion/react"
import Link from "next/link"

export function LeetcodeCard() {
    const MotionLink = motion(Link)
    return (
        <MotionLink
            href={"https://leetcode.com/u/chinmaysk0408/"}
            target="_blank"
            title="Leetcode profile"
            variants={defaultVariantsNoDelay}
            whileHover={{ scale: 1.05 }}
            className="card-border relative col-span-2 row-span-1 flex items-center justify-center gap-x-2 overflow-hidden rounded-xl font-semibold bg-[#404040] text-white md:col-span-2 md:col-start-4 md:row-span-1"
        >
            <Leetcode className="h-6 md:h-8" />
            <span className="hidden md:block text-sm font-semibold">LeetCode</span>
        </MotionLink>
    )
} 