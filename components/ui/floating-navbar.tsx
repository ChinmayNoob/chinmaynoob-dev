"use client"

import * as React from "react"
import { type NavItem } from "@/components/layouts/header"
import { MobileNavigation } from "@/components/mobile-navigation"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const FloatingNav = ({
   navItems,
   className,
}: {
   navItems: NavItem[]
   className?: string
}) => {
   const pathname = usePathname()
   const [visible, setVisible] = React.useState(true)
   const [prevScrollY, setPrevScrollY] = React.useState(0)

   React.useEffect(() => {
      const handleScroll = () => {
         const currentScrollY = window.scrollY

         // Show navbar when at the top
         if (currentScrollY < 10) {
            setVisible(true)
         } else if (currentScrollY < prevScrollY) {
            // Scrolling up - show navbar
            setVisible(true)
         } else if (currentScrollY > prevScrollY && currentScrollY > 100) {
            // Scrolling down and past threshold - hide navbar
            setVisible(false)
         }

         setPrevScrollY(currentScrollY)
      }

      window.addEventListener("scroll", handleScroll, { passive: true })
      return () => window.removeEventListener("scroll", handleScroll)
   }, [prevScrollY])

   return (
      <motion.div
         initial={{
            opacity: 0,
            y: -20,
         }}
         animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
         }}
         transition={{
            duration: 0.35,
            delay: visible ? 0.25 : 0,
            ease: "backOut",
         }}
         className={cn(
            "fixed inset-x-4 top-5 z-[49] mx-auto flex max-w-2xl items-center justify-between overflow-hidden rounded-full border border-neutral-200/20 bg-transparent backdrop-blur-md px-3 py-2 dark:border-neutral-800/20",
            className,
         )}
      >
         <div className="hidden md:flex">
            {navItems.map((navItem, idx: number) => {
               const isActive = pathname === navItem.link
               return (
                  <Link
                     key={`link=${idx}`}
                     href={navItem.link}
                     className={cn(
                        "relative flex h-8 items-center px-4 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300",
                     )}
                  >
                     <span
                        className={cn("hidden text-sm sm:block")}
                     >
                        <span className="mr-px text-neutral-400">/</span>
                        {navItem.name.toLowerCase()}
                     </span>

                     {isActive && (
                        <motion.span
                           transition={{
                              ease: "backInOut",
                              duration: 0.35,
                           }}
                           layoutId="active-nav"
                           className="absolute inset-x-0 inset-y-0 z-[-1] hidden rounded-full bg-neutral-200/50 sm:flex dark:bg-neutral-800"
                        />
                     )}
                  </Link>
               )
            })}
         </div>
         <div className="md:hidden">
            <MobileNavigation navItems={navItems} />
         </div>

         <ThemeToggle />
      </motion.div>
   )
}
