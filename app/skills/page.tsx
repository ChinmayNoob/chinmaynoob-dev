import { Heading } from "@/components/heading"
import { SkillsGrid } from "@/components/skills-grid"

export const metadata = {
    title: "Chinmay Sawant | Skills",
    description: "Explore my skills, showcasing my knowledge and expertise.",
}

export default function Skills() {
    return (
        <section>
            <Heading className="mb-1 mt-0">Skills</Heading>
            <SkillsGrid />
        </section>
    )
}

export const revalidate = 3600
