"use client"

import { cn } from "@/lib/utils"
import {
    HTMLMotionProps,
    motion,
} from "motion/react"

type ProjectShellProps = {
    children: React.ReactNode
} & HTMLMotionProps<"div">

export function ProjectShell({ children, className, ...props }: ProjectShellProps) {
    return (
        <motion.div
            className={cn(
                "prose prose-neutral mt-8 max-w-full text-pretty dark:prose-invert",
                className,
            )}
            {...props}
        >
            {children}
        </motion.div>
    )
} 