import { Projects } from "@/app/projects/components/projects"
import { ProjectShell } from "@/app/projects/components/project-shell"
import { Heading } from "@/components/heading"
import { defaultVariants } from "@/components/motion-variants"

export const metadata = {
    title: "Chinmay Sawant | Projects",
    description:
        "Explore my portfolio of projects, showcasing my skills in web development, design, and more.",
}

export default async function ProjectsPage() {
    return (
        <section>
            <Heading className="mb-1 mt-0">My Projects</Heading>

            <ProjectShell
                initial="hidden"
                animate="visible"
                variants={defaultVariants}
            >
                <p>
                    A collection of projects showcasing my development skills and creative solutions.
                </p>
                <Projects />
            </ProjectShell>
        </section>
    )
}