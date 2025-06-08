"use client"

import { kraftbase, type Job } from "@/app/work/data"
import { defaultVariantsNoDelay } from "@/components/motion-variants"
import { cn } from "@/lib/utils"
import { AnimatePresence, MotionProps, motion } from "motion/react"
import React from "react"

const jobs: Job[] = [kraftbase]

export function Jobs() {
   return (
      <AnimatePresence>
         <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
               hidden: { opacity: 0 },
               visible: {
                  opacity: 1,
                  transition: {
                     delayChildren: 0.25,
                     staggerChildren: 0.1,
                  },
               },
            }}
            className="mt-16 flex flex-col items-center"
         >
            {jobs.map((job, index) => (
               <React.Fragment key={job.company}>
                  {index !== 0 && (
                     <motion.div
                        variants={{
                           hidden: { opacity: 0, scaleY: 0 },
                           visible: {
                              opacity: 1,
                              scaleY: 1,
                              transition: {
                                 delay: 0.65,
                                 duration: 0.5,
                              },
                           },
                        }}
                        className="z-[-1] mt-[9px] h-6 w-px origin-top bg-neutral-200 dark:bg-neutral-500/20"
                     />
                  )}
                  <JobCard job={job} />
               </React.Fragment>
            ))}
         </motion.div>
      </AnimatePresence>
   )
}

type JobCardProps = {
   job: Job
} & MotionProps
export function JobCard({ job, ...props }: JobCardProps) {
   const currentJob = job.to === "now"
   return (
      <motion.div
         variants={defaultVariantsNoDelay}
         className={cn(
            "card-border relative flex flex-col rounded-xl bg-white p-6 py-8 transition-colors duration-200 ease-in-out dark:bg-neutral-900",
            {
               "ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:ring-neutral-500/20 dark:ring-offset-neutral-950":
                  currentJob,
            },
         )}
         {...props}
      >
         <h2 className="m-0 mb-1 flex justify-between text-xl font-normal dark:text-white">
            {job.company}{" "}
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
               {job.from} — {job.to}
            </span>
         </h2>
         <p className="m-0 text-sm text-neutral-500 dark:text-neutral-400">
            {job.position}
         </p>
         <p className="mb-0 mt-4">{job.introDescription}</p>
      </motion.div>
   )
}
