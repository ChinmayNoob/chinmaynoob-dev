import { Heading } from "@/components/heading"
import Link from "next/link"

export const metadata = {
    title: "Chinmay Sawant | Blogs",
    description:
        "Explore my blogs, showcasing my thoughts and ideas.",
}

export default function Blogs() {
    const blogs = [
        {
            title: "How I Built a Distributed Task Scheduler using Go",
            tags: ["Go", "Distributed Systems"],
            date: "2025-11-12",
            link: "https://chinmxyblog.vercel.app/posts/distributed-task-scheduler"
        },
    ]

    return (
        <section>
            <Heading>Blogs</Heading>

            <div className="mt-8">
                <div className="space-y-4">
                    {blogs.map((blog) => (
                        <div
                            key={blog.title}
                            className="flex items-center justify-between"
                        >
                            <div className="flex-1">
                                <Link
                                    href={blog.link}
                                    target="_blank"
                                    className="font-bold text-neutral-600 dark:text-neutral-400 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
                                >
                                    {blog.title}
                                </Link>
                                <div className="flex items-center gap-2 mt-1">
                                    {blog.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-neutral-400 dark:text-neutral-600 font-pacifico ml-4">
                                {blog.date}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export const revalidate = 3600
