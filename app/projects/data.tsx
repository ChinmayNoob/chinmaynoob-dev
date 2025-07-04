import React from "react"
import { FaSass } from "react-icons/fa6";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiTailwindcss,
    SiFramer,
    SiGreensock,
    SiShadcnui,
    SiGoogledisplayandvideo360,
    SiClerk,
    SiSupabase,
    SiReactquery,
    SiDrizzle,
    SiZincsearch,
    SiNpm
} from "react-icons/si"
import { TbBrandThreejs } from "react-icons/tb";

export type Project = {
    number: string
    title: string
    description: React.ReactNode
    introDescription: React.ReactNode
    image: string
    skills: string[]
    icons: React.ReactNode[]
    href: string
    github?: string
    status: "completed" | "in-progress" | "archived"
}

export const projects: Project[] = [
    {
        number: "01",
        title: "Jhoom",
        introDescription: "A web-based video conferencing platform",
        description: (
            <>
                Built a web-based video conferencing platform with Next.js, Tailwind CSS, ShadCN UI, and Stream SDK. Features secure authentication, customizable layouts, attendee monitoring, admin controls, and organized meeting management for a fast and efficient user experience.
            </>
        ),
        image: "/assets/projects/jhoom.webp",
        skills: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Stream SDK", "Clerk"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiTypescript key="typescript" className="text-blue-600" />,
            <SiTailwindcss key="tailwind" className="text-cyan-500" />,
            <SiShadcnui key="shadcn" className="text-white" />,
            <SiGoogledisplayandvideo360 key="stream" className="text-blue-700" />,
            <SiClerk key="clerk" className="text-purple-600" />
        ],
        href: "https://videoconferenceapp.vercel.app/",
        github: "https://github.com/ChinmayNoob/videoconferenceapp",
        status: "completed"
    },
    {
        number: "02",
        title: "T3XTURE",
        introDescription: "A fully responsive and dynamic website for an agency ",
        description: (
            <>
                Built a fully responsive agency website with Next.js and Framer Motion, featuring smooth animations, interactive elements, and a mobile-first design for seamless user experience across all devices.
            </>
        ),
        image: "/assets/projects/t3xture.webp",
        skills: ["Next.js", "TypeScript", "Tailwind CSS", "Motion"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiTypescript key="typescript" className="text-blue-600" />,
            <SiTailwindcss key="tailwind" className="text-cyan-500" />,
            <SiFramer key="motion" className="text-green-500" />,
        ],
        href: "https://t3xture.vercel.app/",
        status: "completed"
    },
    {
        number: "03",
        title: "Crollo",
        introDescription: "A full stack note taking app",
        description: (
            <>
                Developed a full-stack note-taking app with Next.js, Supabase, Tanstack Query, and Gemini-API for AI-powered summaries. Features authentication, rich text editing, auto-save, and a modern, responsive UI.
            </>
        ),
        image: "/assets/projects/crollo.webp",
        skills: ["Next.js", "Tailwind CSS", "TypeScript", "ShadCN UI", "Tanstack Query", "Supabase"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiTailwindcss key="tailwind" className="text-cyan-500" />,
            <SiTypescript key="typescript" className="text-blue-600" />,
            <SiShadcnui key="shadcn" className="text-white" />,
            <SiReactquery key="tanstack" className="text-red-500" />,
            <SiSupabase key="supabase" className="text-green-500" />
        ],
        href: "https://notesassignment.vercel.app/",
        github: "https://github.com/ChinmayNoob/notesassignment",
        status: "completed"
    },
    {
        number: "04",
        title: "808s",
        introDescription: "A minimalistic music player",
        description: (
            <>
                Created a minimalistic music player with Next.js, Tailwind CSS, and Framer Motion. Includes playlist management, real-time lyrics, track visualization, and a mobile-first, responsive design.
            </>
        ),
        image: "/assets/projects/808s.webp",
        skills: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiTypescript key="typescript" className="text-blue-600" />,
            <SiTailwindcss key="tailwind" className="text-cyan-500" />,
            <SiShadcnui key="shadcn" className="text-white" />,
            <SiFramer key="motion" className="text-black dark:text-white" />
        ],
        href: "https://808s.vercel.app/",
        github: "https://github.com/ChinmayNoob/808s",
        status: "completed"
    },
    {
        number: "05",
        title: "Urahara's Kitchen",
        introDescription: "A fully responsive and dynamic website for a restaurant",
        description: (
            <>
                Built a dynamic restaurant website with Next.js, Tailwind CSS, and Framer Motion. Features menu showcase, online ordering, reservations, and a mobile-friendly, animated interface.
            </>
        ),
        image: "/assets/projects/urahara.webp",
        skills: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiTypescript key="typescript" className="text-blue-600" />,
            <SiTailwindcss key="tailwind" className="text-cyan-500" />,
            <SiShadcnui key="shadcn" className="text-white" />,
            <SiFramer key="motion" className="text-black dark:text-white" />
        ],
        href: "https://resturant-menu-eta.vercel.app/",
        github: "https://github.com/ChinmayNoob/resturant-menu",
        status: "completed"
    },
    {
        number: "06",
        title: "Wesleys Theory",
        introDescription: "A landing page dedicated to Kendrick Lamar&apos;s intro song",
        description: (
            <>
                Designed a landing page tribute to Kendrick Lamar's "Wesley's Theory" using React, TypeScript, Framer Motion, Three.js, and GSAP. Features immersive 3D elements, parallax effects, and smooth animations.
            </>
        ),
        image: "/assets/projects/kendrick.webp",
        skills: ["React", "TypeScript", "Sass", "Framer Motion", "Three.js", "GSAP"],
        icons: [
            <SiReact key="react" className="text-blue-500" />,
            <SiTypescript key="typescript" className="text-blue-600" />,
            <FaSass key="sass" className="text-pink-600" />,
            <SiFramer key="framer" className="text-black dark:text-white" />,
            <TbBrandThreejs key="threejs" className="text-blue-500" />,
            <SiGreensock key="gsap" className="text-green-600" />
        ],
        href: "https://wesleys-theory.vercel.app/",
        status: "completed"
    },
    {
        number: "07",
        title: "BoxBox - A F1 Concept",
        introDescription: "2025 F1 Season Details",
        description: (
            <>
                Developed a comprehensive Formula 1 website for F1 enthusiasts featuring the complete 2025 season with Grand Prix details, live race results,
                and driver/constructor standings. Built with Next.js, TypeScript, and Framer Motion for smooth animations. Includes interactive data
                visualizations, dynamic filtering, real-time updates, and responsive design optimized for all devices.
            </>
        ),
        image: "/assets/projects/boxbox.webp",
        skills: ["Next.js", "Framer Motion", "TypeScript"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiFramer key="framer" className="text-black dark:text-white" />,
            <SiTypescript key="typescript" className="text-blue-600" />
        ],
        href: "https://boxboxf1.vercel.app/",
        status: "completed"
    },
    {
        number: "08",
        title: "Faker-ind",
        introDescription: "A comprehensive npm package for generating fake data for Indian users",
        description: (
            <>
                Developed a robust fake data generator for Indian users, supporting 11 major Indian languages. Faker-ind lets developers easily generate realistic Indian names, phone numbers, bank details, and placeholder text with multi-language support and dynamic locale switching. Ideal for creating localized apps, testing, and prototyping with authentic Indian data.
            </>
        ),
        image: "/assets/projects/faker-ind.webp",
        skills: ["TypeScript", "NPM Package", "Localization", "Open Source"],
        icons: [
            <SiTypescript key="typescript" className="text-blue-600" />,
            <SiNpm key="npm" className="text-red-500" />
        ],
        href: "https://www.npmjs.com/package/@chinmayn00b/faker-ind",
        github: "https://github.com/ChinmayNoob/faker-ind",
        status: "completed"
    },
    {
        number: "09",
        title: "Laughtale-A One Piece Game",
        introDescription: "One Piece-themed Monopoly board game with animated landing and character reveals.",
        description: (
            <>
                Created an interactive, One Piece-themed board game featuring an animated landing page and scroll-triggered character reveals. Developed a Monopoly-like board with card-based mechanics and smooth visual transitions to maximize user engagement. Engineered the core game logic using Zustand for global state management, leveraging centralized state and derived values to efficiently handle player movement and game flow. Achieved a 40% increase in response time through selective updates, and implemented a decoupled event system to enable seamless UI animations and modular component interactions.
            </>
        ),
        image: "/assets/projects/laughtale.webp",
        skills: ["Next.js", "Framer Motion", "TypeScript", "Zustand"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiFramer key="framer" className="text-black dark:text-white" />,
            <SiTypescript key="typescript" className="text-blue-600" />,
            <SiZincsearch key="zustand" className="text-green-500" />
        ],
        href: "https://boxboxf1.vercel.app/",
        status: "completed"
    },
    {
        number: "10",
        title: "Tuff - A Questionnaire Platform",
        introDescription: "A platform for coders to ask and solve DSA related questions and queries",
        description: (
            <>
                Developed a questionnaire platform for coders to ask and solve DSA related questions and queries.Built using Nextjs,Tanstack Query,Drizzle ORM,ShadnCN,Tailwind CSS

            </>
        ),
        image: "/assets/projects/tuff.webp",
        skills: ["Next.js", "Tanstack Query", "Drizzle ORM", "ShadnCN", "Tailwind CSS"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiReactquery key="tanstack" className="text-red-500" />,
            <SiDrizzle key="drizzle" className="text-green-500" />,
            <SiShadcnui key="shadcn" className="text-white" />,
            <SiTailwindcss key="tailwind" className="text-cyan-500" />
        ],
        href: "https://boxboxf1.vercel.app/",
        status: "completed"
    },
    {
        number: "11",
        title: "Omen",
        introDescription: "An Effective Pomodoro Timer",
        description: (
            <>
                Built this Pomodoro Timer on weekend nights, customize your timings, break sessions are also provided and onepiece and naruto themed white noise are also present.
            </>
        ),
        image: "/assets/projects/omen.webp",
        skills: ["Next.js", "Framer Motion", "TypeScript"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiFramer key="framer" className="text-black dark:text-white" />,
            <SiTypescript key="typescript" className="text-blue-600" />
        ],
        href: "https://omen-eta.vercel.app/",
        status: "completed"
    },
    {
        number: "12",
        title: "Lamo",
        introDescription: "Meme Generator",
        description: (
            <>
                Generated memes edit them ,download memes and share them with your friends.
            </>
        ),
        image: "/assets/projects/lamo.webp",
        skills: ["Next.js", "Framer Motion", "TypeScript"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiFramer key="framer" className="text-black dark:text-white" />,
            <SiTypescript key="typescript" className="text-blue-600" />
        ],
        href: "https://lamo-gold.vercel.app/",
        status: "completed"
    }


] 