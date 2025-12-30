type Skill = {
    name: string
    icon?: React.ReactNode
}

type SkillCategory = {
    title: string
    skills: Skill[]
}

const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        skills: [
            { name: "TypeScript" },
            { name: "JavaScript" },
            { name: "Golang" },
            { name: "C++" },
        ],
    },
    {
        title: "Frameworks",
        skills: [
            { name: "React" },
            { name: "Next.js" },
            { name: "Node.js" },
            { name: "Express" },
            { name: "Tailwind CSS" },
            { name: "Shadcn UI" },
            { name: "Framer Motion" },
            { name: "Tanstack Query" }
        ],
    },
    {
        title: "Databases/ORMs",
        skills: [
            { name: "PostgreSQL" },
            { name: "MongoDB" },
            { name: "Drizzle ORM" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { name: "Git" },
            { name: "Docker" },
            { name: "Bash" },
        ],
    },
    {
        title: "Cloud",
        skills: [
            { name: "Vercel" },
            { name: "AWS" },
        ],
    },
]

export function SkillsGrid() {
    return (
        <div className="mt-8 space-y-6">
            {skillCategories.map((category) => (
                <div
                    key={category.title}
                    className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6"
                >
                    <div className="w-28 text-xs font-medium uppercase tracking-wide text-muted-foreground/80 sm:w-32 shrink-0">
                        {category.title}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <div
                                key={skill.name}
                                className="group inline-flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1 text-xs text-foreground/80 transition-transform duration-150 ease-out hover:scale-[1.04] hover:bg-muted"
                            >
                                {skill.icon && (
                                    <span className="inline-flex items-center justify-center text-[0] transition-transform duration-150 ease-out group-hover:scale-110">
                                        {skill.icon}
                                    </span>
                                )}
                                <span className="whitespace-nowrap">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}


