import React from "react"
import { FaGolang, FaSass, FaServer } from "react-icons/fa6";
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
    SiNpm,
    SiPostgresql,
    SiDocker
} from "react-icons/si"
import { DiRedis } from "react-icons/di";

import { TbBrandThreejs } from "react-icons/tb";

export type Project = {
    number: string
    title: string
    description: React.ReactNode
    introDescription: React.ReactNode
    image: string
    skills: string[]
    icons: React.ReactNode[]
    href?: string | null
    github?: string
    status: "completed" | "in-progress" | "archived"
}

export const projects: Project[] = [
    {
        number: "01",
        title: "Fern-UI - A Component Library",
        introDescription: "An open-source collection of 15+ high-quality components having smooth animations using Motion and GSAP",
        description: (
            <>
                Fern UI A minimalist React component library built for speed and aesthetics. Combining the utility of Tailwind CSS with the high-performance animations of Framer Motion and GSAP, Fern UI offers 15+ production-ready components designed to bridge the gap between simple layouts and complex interactivity.
            </>
        ),
        image: "/assets/projects/fern-ui.png",
        skills: ["React", "ShadnCN", "Tailwind CSS", "Framer Motion", "GSAP"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiShadcnui key="shadcn" className="text-white" />,
            <SiTailwindcss key="tailwind" className="text-cyan-500" />,
            <SiFramer key="framer" className="text-black dark:text-white" />,
            <SiGreensock key="gsap" className="text-green-600" />,
        ],
        href: "https://fern-ui.vercel.app/",
        github: "https://github.com/ChinmayNoob/fern-ui",
        status: "completed"
    },
    {
        number: "02",
        title: "Conductor - A Distributed Task Scheduler",
        introDescription: "A distributed task scheduler built using Go, PostgreSQL, Redis and gRPC",
        description: (
            <>
                Conductor is a distributed task scheduler built using Go, PostgreSQL, Redis and gRPC. It is a scalable and fault-tolerant task scheduler that can handle large number of tasks and can be used in distributed systems.
            </>
        ),
        image: "/assets/projects/conductor.png",
        skills: ["Go", "PostgreSQL", "gRPC", "Docker"],
        icons: [
            <FaGolang key="golang" className="text-blue-600" />,
            <SiPostgresql key="postgresql" className="text-blue-600" />,
            <FaServer key="grpc" className="text-green-600" />,
            <SiDocker key="docker" className="text-blue-600" />,
        ],
        github: "https://github.com/ChinmayNoob/conductor",
        status: "completed"
    },
    {
        number: "03",
        title: "Loopin - A Questionnaire Platform",
        introDescription: "A platform for coders to ask and solve questions and queries with community support",
        description: (
            <>
                Developed a questionnaire platform for coders to ask and solve questions and queries having community supports.Built using Nextjs,Tanstack Query,Drizzle ORM,ShadnCN,Tailwind CSS
            </>
        ),
        image: "/assets/projects/loopin.png",
        skills: ["Next.js", "Tanstack Query", "Drizzle ORM", "ShadnCN", "Tailwind CSS"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiReactquery key="tanstack" className="text-red-500" />,
            <SiDrizzle key="drizzle" className="text-green-500" />,
            <SiShadcnui key="shadcn" className="text-white" />,
            <SiTailwindcss key="tailwind" className="text-cyan-500" />
        ],
        href: "https://loop1n.vercel.app/",
        github: "https://github.com/ChinmayNoob/tuff",
        status: "completed"
    },
    {
        number: "04",
        title: "Faker-ind",
        introDescription: "A comprehensive npm package for generating fake data for Indian users",
        description: (
            <>
                Developed a robust fake data generator for Indian users, supporting 11 major Indian languages. Faker-ind lets developers easily generate realistic Indian names, phone numbers, bank details, and placeholder text with multi-language support and dynamic locale switching. Ideal for creating localized apps, testing, and prototyping with authentic Indian data.
            </>
        ),
        image: "/assets/projects/faker-ind.png",
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
        number: "05",
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
        href: "https://laughtaleop.vercel.app/",
        github: "https://github.com/ChinmayNoob/laughtale",
        status: "completed"
    },
    {
        number: "06",
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
        github: "https://github.com/ChinmayNoob/t3xture",
        status: "completed"
    },
    {
        number: "07",
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
        github: "https://github.com/ChinmayNoob/lamo",
        status: "completed"
    },
    {
        number: "08",
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
        github: "https://github.com/ChinmayNoob/boxbox",
        status: "completed"
    },
    {
        number: "09",
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
        number: "10",
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
        number: "11",
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
        number: "12",
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
        number: "13",
        title: "Wesleys Theory",
        introDescription: "A landing page dedicated to Kendrick Lamar&apos;s intro song",
        description: (
            <>
                Designed a landing page tribute to Kendrick Lamar&apos;s &quot;Wesley&apos;s Theory&quot; using React, TypeScript, Framer Motion, Three.js, and GSAP. Features immersive 3D elements, parallax effects, and smooth animations.
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
        github: "https://github.com/ChinmayNoob/wesleys-theory",
        status: "completed"
    },
    {
        number: "14",
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
        github: "https://github.com/ChinmayNoob/omen",
        status: "completed"
    },
    {
        number: "15",
        title: "Zoro Studios",
        introDescription: "A Landing Page for a Studio built using Next.js, GSAP, Motion having a cool loader component",
        description: (
            <>
                Built a landing page for a studio using Next.js, GSAP, and Framer Motion. Features a cool loader component and a modern, responsive design.
            </>
        ),
        image: "/assets/projects/zoro.png",
        skills: ["Next.js", "Framer Motion", "TypeScript", "GSAP"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiFramer key="framer" className="text-black dark:text-white" />,
            <SiTypescript key="typescript" className="text-blue-600" />,
            <SiGreensock key="gsap" className="text-green-600" />
        ],
        href: "https://zoro-studios-five.vercel.app/",
        github: "https://github.com/ChinmayNoob/zoro-studios",
        status: "completed"
    },
    {
        number: "16",
        title: "Claude AI Agent",
        introDescription: "A Claude AI Agent built in Golang that can list files, read files, edit code, and answer project-related questions with seamless tool integrations for developer workflows.",
        description: (
            <>
                This Golang-based Claude AI Agent enhances developer productivity by automating file management, code editing, and project insights. It integrates seamlessly with your workspace to handle interactive queries and streamline development tasks efficiently.
            </>
        ),
        image: "/assets/projects/agent.webp",
        skills: ["Golang"],
        icons: [
            <FaGolang key="golang" className="text-blue-600" />
        ],
        github: "https://github.com/ChinmayNoob/claude-agent",
        status: "completed"
    },
    {
        number: "17",
        title: "Go-Parser",
        introDescription: "A lightweight, fast SQL parser written in Go, specifically designed for querying CSV files.",
        description: (
            <>
                A lightweight, fast SQL parser written in Go, specifically designed for querying CSV files. This parser supports the essential SQL operations (SELECT, INSERT, UPDATE, DELETE) with comprehensive error handling and validation.
            </>
        ),
        image: "/assets/projects/parser.webp",
        skills: ["Golang"],
        icons: [
            <FaGolang key="golang" className="text-blue-600" />
        ],
        github: "https://github.com/ChinmayNoob/parser-go",
        status: "completed"
    },
] 