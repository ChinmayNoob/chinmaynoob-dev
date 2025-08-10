"use client"

import { projects, type Project } from "@/app/projects/data"
import { defaultVariantsNoDelay } from "@/components/motion-variants"
import { cn } from "@/lib/utils"
import { AnimatePresence, MotionProps, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { AiOutlineRight } from "react-icons/ai"
import { CgArrowsExpandUpRight } from "react-icons/cg"
import { FaGithub } from "react-icons/fa"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function Projects() {
    const [expandedProject, setExpandedProject] = useState<string | null>(null)

    return (
        <TooltipProvider>
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
                    className="mt-16 flex flex-col space-y-8"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.number}
                            variants={defaultVariantsNoDelay}
                        >
                            <ProjectCard
                                project={project}
                                isExpanded={expandedProject === project.number}
                                onToggle={() => setExpandedProject(expandedProject === project.number ? null : project.number)}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </TooltipProvider>
    )
}

type ProjectCardProps = {
    project: Project
    isExpanded: boolean
    onToggle: () => void
} & MotionProps

export function ProjectCard({ project, isExpanded, onToggle, ...props }: ProjectCardProps) {
    const isInProgress = project.status === "in-progress"
    const [isImageHovered, setIsImageHovered] = useState(false)

    const overlayVariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.2
            }
        }
    }

    return (
        <motion.div
            variants={defaultVariantsNoDelay}
            className={cn(
                "relative flex flex-col rounded-xl bg-white p-6 transition-colors duration-200 ease-in-out dark:bg-neutral-900",
                {
                    "ring-1 ring-neutral-200 ring-offset-8 ring-offset-neutral-100 dark:ring-neutral-500/20 dark:ring-offset-neutral-950":
                        isInProgress,
                },
            )}
            layout
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            {...props}
        >
            <div
                className="flex justify-between items-center w-full cursor-pointer"
                onClick={onToggle}
            >
                <div className="flex items-center w-full">
                    <div className="flex-1">
                        <h2 className="m-0 mb-1 text-xl font-medium dark:text-white">
                            {project.title}
                        </h2>
                        <p className="m-0 text-sm text-neutral-500 dark:text-neutral-400">
                            {project.introDescription}
                        </p>
                    </div>
                </div>
                <motion.div
                    className="rounded-xl p-3 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    whileHover={{ scale: 1.05 }}
                >
                    <AiOutlineRight size={20} />
                </motion.div>
            </div>

            <AnimatePresence mode="wait">
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="mt-6 overflow-hidden"
                    >
                        <div className="flex flex-col gap-6">
                            {/* Project Image */}
                            <motion.div
                                className="relative w-full h-[300px] lg:h-[400px] rounded-lg overflow-hidden"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.1 }}
                                onHoverStart={() => setIsImageHovered(true)}
                                onHoverEnd={() => setIsImageHovered(false)}
                                whileHover={{ scale: 1.02 }}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain transition-transform duration-300"
                                />

                                <AnimatePresence>
                                    {isImageHovered && (
                                        <motion.div
                                            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center"
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={overlayVariants}
                                        >
                                            <div className={`flex items-center gap-4 ${project.github ? 'gap-4' : ''}`}>
                                                {/* Live Demo Button - Only show if live URL exists */}
                                                {project.href && (
                                                    <Link href={project.href} target="_blank">
                                                        <motion.button
                                                            className="bg-indigo-700 p-3 rounded-full flex items-center justify-center hover:bg-indigo-500 transition-all duration-300"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                            <CgArrowsExpandUpRight className="w-6 h-6 text-white" />
                                                        </motion.button>
                                                    </Link>
                                                )}

                                                {/* GitHub Button - Only show if github URL exists */}
                                                {project.github && (
                                                    <Link href={project.github} target="_blank">
                                                        <motion.button
                                                            className="bg-blue-700 p-3 rounded-full flex items-center justify-center hover:bg-blue-500 transition-all duration-300"
                                                            whileHover={{ scale: 1.1 }}
                                                            whileTap={{ scale: 0.95 }}
                                                            initial={{ opacity: 0, scale: 0.8 }}
                                                            animate={{ opacity: 1, scale: 1 }}
                                                            exit={{ opacity: 0, scale: 0.8 }}
                                                            transition={{ delay: 0.1 }}
                                                        >
                                                            <FaGithub className="w-6 h-6 text-white" />
                                                        </motion.button>
                                                    </Link>
                                                )}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>

                            {/* Mobile Buttons - Show only on mobile */}
                            <motion.div
                                className="flex md:hidden gap-4 justify-center"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.15 }}
                            >
                                {/* Live Demo Button - Only show if live URL exists */}
                                {project.href && (
                                    <Link href={project.href} target="_blank" className="flex-1">
                                        <motion.button
                                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg flex items-center justify-center transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <CgArrowsExpandUpRight className="w-6 h-6" />
                                        </motion.button>
                                    </Link>
                                )}

                                {/* GitHub Button - Only show if github URL exists */}
                                {project.github && (
                                    <Link href={project.github} target="_blank" className="flex-1">
                                        <motion.button
                                            className="w-full bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-lg flex items-center justify-center transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <FaGithub className="w-6 h-6" />
                                        </motion.button>
                                    </Link>
                                )}
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                className="prose prose-neutral dark:prose-invert max-w-none"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {project.description}
                            </motion.div>

                            {/* Tech Stack */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                <h4 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                    {project.icons.map((icon, index) => (
                                        <Tooltip key={index}>
                                            <TooltipTrigger asChild>
                                                <motion.div
                                                    className="p-2 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg transition-transform duration-200 hover:scale-110 cursor-pointer"
                                                    whileHover={{ scale: 1.1 }}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.4 + (index * 0.05) }}
                                                >
                                                    <span className="text-lg">
                                                        {icon}
                                                    </span>
                                                </motion.div>
                                            </TooltipTrigger>
                                            <TooltipContent
                                                className="px-2 py-1 text-xs bg-neutral-900/90 dark:bg-neutral-100/90 text-white dark:text-neutral-900 border-none shadow-lg"
                                                sideOffset={2}
                                            >
                                                <p className="font-normal">{project.skills[index]}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}