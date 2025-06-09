import React from "react"
import { FaSass } from "react-icons/fa6";
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiNodedotjs,
    SiMongodb,
    SiPostgresql,
    SiTailwindcss,
    SiStripe,
    SiSocketdotio,
    SiVuedotjs,
    SiPython,
    SiFramer,
    SiSanity,
    SiGreensock,
    SiCss3,
    SiD3Dotjs,
    SiFastapi,
    SiChartdotjs,
    SiMui,
    SiShadcnui,
    SiGoogledisplayandvideo360,
    SiClerk,
    SiSupabase,
    SiReactquery
} from "react-icons/si"
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";

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
                Built a web-based video conferencing platform using Next.js, Tailwind CSS, ShadCN UI, and Stream SDK, enabling
                users to create, join, and record conference calls. Integrated Clerk for authentication to manage user sessions securely.
                Elevated user experience by implementing features like customizable grid layouts, attendee monitoring, and admin
                controls, improving user satisfaction by 30%. Organized meetings into upcoming, previous, and recorded categories,
                leading to a 40% reduction in navigation time and increased efficiency.
            </>
        ),
        image: "/assets/projects/jhoom.png",
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
                Created a fully responsive website following modern design principles and current web trends using Next.js and Framer Motion.
                Implemented smooth animations, interactive elements, and optimized performance for all devices. Designed with mobile-first
                approach ensuring seamless user experience across desktop, tablet, and mobile platforms. Applied contemporary UI/UX
                patterns including micro-interactions, dynamic layouts, and accessibility standards for enhanced user engagement.
            </>
        ),
        image: "/assets/projects/t3xture.png",
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
                A full-stack note taking website built using NextJS, Tanstack-Query for state-management, Supabase for database and authentication,
                Tailwind-CSS and ShadCN for styling, and Gemini-API for note-summarization. Features include user authentication with login, register,
                and logout using email/password or Google OAuth, comprehensive notes CRUD operations with rich text formatting, AI-powered summary
                generation using Google's Gemini-API, auto-save and real-time summarization capabilities, and a responsive UI built with modern,
                accessible design principles.
            </>
        ),
        image: "/assets/projects/crollo.png",
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
                Built a minimalistic web-based music player designed to play your favorite songs with a clean, intuitive interface.
                Integrated comprehensive music functionality including play, pause, skip, volume control, and playlist management.
                Implemented advanced features like real-time lyrics display, track visualization, and smooth animations using Framer Motion.
                Designed with a mobile-first approach using Tailwind CSS and ShadCN UI components for a seamless user experience
                across all devices. Optimized for performance with efficient audio streaming and responsive design principles.
            </>
        ),
        image: "/assets/projects/808s.png",
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
                Developed a comprehensive restaurant menu and website for a client using Next.js, Tailwind CSS, ShadCN UI, and Framer Motion.
                Created an intuitive, visually appealing interface showcasing the restaurant's menu, ambiance, and dining experience with smooth
                animations and interactive elements. Implemented mobile-responsive design ensuring seamless functionality across all devices.
                Integrated online ordering system, reservation management, and location details to enhance customer engagement. The website
                contributed to a 25% increase in sales by improving online presence and streamlining the customer ordering process.
            </>
        ),
        image: "/assets/projects/urahara.png",
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
        introDescription: "A landing page dedicated to Kendrick Lamar's intro song",
        description: (
            <>
                Created a stunning landing page dedicated to Kendrick Lamar's intro song "Wesley's Theory" from the critically acclaimed album
                "To Pimp a Butterfly". Built using React, TypeScript, and Sass with advanced animations powered by Framer Motion, Three.js, and GSAP.
                Implemented immersive 3D elements, parallax gallery effects, and horizontal gallery navigation that capture the essence and rhythm of the song.
                Features interactive visual components, smooth scrolling experiences, responsive design, and seamless user experience that pays homage to the
                artistic depth of Kendrick's music. Combined cutting-edge web technologies to create an engaging multimedia tribute.
            </>
        ),
        image: "/assets/projects/kendrick.jpg",
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
        title: "Urahara's Kitchen",
        introDescription: "A fully responsive and dynamic website for a restaurant",
        description: (
            <>
                Developed a comprehensive restaurant menu and website for a client using Next.js, Tailwind CSS, ShadCN UI, and Framer Motion.
                Created an intuitive, visually appealing interface showcasing the restaurant's menu, ambiance, and dining experience with smooth
                animations and interactive elements. Implemented mobile-responsive design ensuring seamless functionality across all devices.
                Integrated online ordering system, reservation management, and location details to enhance customer engagement. The website
                contributed to a 25% increase in sales by improving online presence and streamlining the customer ordering process.
            </>
        ),
        image: "/assets/projects/urahara.png",
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


] 