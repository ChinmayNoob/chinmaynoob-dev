import { Heading } from "@/components/heading"
import Link from "next/link"

export default function Socials() {
    const socials = [
        {
            name: "Email",
            href: "mailto:chinmaypvt04@gmail.com",
            label: "chinmaypvt04@gmail.com"
        },
        {
            name: "LinkedIn",
            href: "https://linkedin.com/in/chinmay", // Update with actual LinkedIn URL
            label: "/linkedin"
        },
        {
            name: "GitHub",
            href: "https://github.com/chinmay", // Update with actual GitHub URL
            label: "/github"
        },
        {
            name: "Twitter",
            href: "https://twitter.com/chinmay", // Update with actual Twitter URL
            label: "/twitter"
        },
        {
            name: "Codeforces",
            href: "https://codeforces.com/profile/chinmay", // Update with actual Codeforces URL
            label: "/codeforces"
        }
    ]

    return (
        <section>
            <Heading>Connect with me</Heading>

            <div className="mt-8 space-y-4">
                {socials.map((social) => (
                    <div key={social.name}>
                        <Link
                            href={social.href}
                            className="group inline-block text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-200 hover:scale-105"
                            target={social.name !== "Email" ? "_blank" : undefined}
                            rel={social.name !== "Email" ? "noopener noreferrer" : undefined}
                        >
                            <span className="text-neutral-400">/</span>{social.label}
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

export const revalidate = 3600
