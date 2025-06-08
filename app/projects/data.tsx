import React from "react"
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
    SiMui
} from "react-icons/si"

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
        title: "E-Commerce Platform",
        introDescription: "A modern e-commerce platform built with Next.js",
        description: (
            <>
                Developed a fully responsive e-commerce platform with advanced features including real-time inventory management,
                secure payment processing, and personalized product recommendations. Implemented server-side rendering for optimal
                SEO performance and integrated with multiple payment gateways.
            </>
        ),
        image: "/assets/projects/ecommerce.jpg",
        skills: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiTypescript key="typescript" className="text-blue-600" />,
            <SiStripe key="stripe" className="text-purple-600" />,
            <SiPostgresql key="postgresql" className="text-blue-700" />,
            <SiTailwindcss key="tailwind" className="text-cyan-500" />
        ],
        href: "https://example-ecommerce.com",
        github: "https://github.com/username/ecommerce-platform",
        status: "completed"
    },
    {
        number: "02",
        title: "Task Management App",
        introDescription: "A collaborative task management application",
        description: (
            <>
                Built a comprehensive task management system with real-time collaboration features, drag-and-drop functionality,
                and team workspaces. Integrated with popular productivity tools and implemented advanced filtering and
                search capabilities for enhanced user experience.
            </>
        ),
        image: "/assets/projects/taskmanager.png",
        skills: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
        icons: [
            <SiReact key="react" className="text-blue-500" />,
            <SiNodedotjs key="nodejs" className="text-green-600" />,
            <SiSocketdotio key="socketio" className="text-black dark:text-white" />,
            <SiMongodb key="mongodb" className="text-green-500" />,
            <SiMui key="materialui" className="text-blue-500" />
        ],
        href: "https://example-tasks.com",
        github: "https://github.com/username/task-manager",
        status: "completed"
    },
    {
        number: "03",
        title: "Portfolio Website",
        introDescription: "A stunning portfolio website for a creative agency",
        description: (
            <>
                Created an award-winning portfolio website featuring smooth animations, interactive galleries,
                and dynamic content management. Optimized for performance with lazy loading and implemented
                a custom CMS for easy content updates.
            </>
        ),
        image: "/assets/projects/portfolio.png",
        skills: ["Next.js", "Framer Motion", "Sanity CMS", "GSAP", "CSS3"],
        icons: [
            <SiNextdotjs key="nextjs" className="text-black dark:text-white" />,
            <SiFramer key="framer" className="text-black dark:text-white" />,
            <SiSanity key="sanity" className="text-red-500" />,
            <SiGreensock key="gsap" className="text-green-600" />,
            <SiCss3 key="css3" className="text-blue-600" />
        ],
        href: "https://example-portfolio.com",
        status: "completed"
    },
    {
        number: "04",
        title: "Analytics Dashboard",
        introDescription: "Real-time analytics dashboard for business intelligence",
        description: (
            <>
                Developed a comprehensive analytics dashboard with real-time data visualization, customizable reports,
                and advanced filtering options. Integrated with multiple data sources and implemented role-based
                access control for enterprise security requirements.
            </>
        ),
        image: "/assets/projects/analytics.png",
        skills: ["Vue.js", "D3.js", "Python", "FastAPI", "Chart.js"],
        icons: [
            <SiVuedotjs key="vuejs" className="text-green-500" />,
            <SiD3Dotjs key="d3js" className="text-orange-500" />,
            <SiPython key="python" className="text-yellow-500" />,
            <SiFastapi key="fastapi" className="text-green-600" />,
            <SiChartdotjs key="chartjs" className="text-pink-500" />
        ],
        href: "https://example-analytics.com",
        github: "https://github.com/username/analytics-dashboard",
        status: "completed"
    }
] 