import { Cards } from "@/components/cards"
import { Heading } from "@/components/heading"
import { Text } from "@/components/text"
import Link from "next/link"

export default function Home() {
  return (
    <section>
      <Heading>Hi, I&apos;m Chinmay ✌️</Heading>

      <section className="prose prose-neutral mt-8 max-w-full dark:prose-invert">
        <Text>
          I&apos;m a full-stack developer from India, open for freelance and
          full-stack development roles. My primary tech stack includes Next.js,
          TypeScript, Motion, and Drizzle. Check out my{" "}
          <Link href={"/projects"}>
            <span className="text-neutral-400">/</span>projects
          </Link>{" "}
          to see what I&apos;ve been working on.
        </Text>

        <Text>
          Reach out to me at{" "}
          <Link href="mailto:chinmaypvt04@gmail.com" className="underline">
            chinmay.sawant4804@gmail.com
          </Link>
        </Text>
      </section>
      <Cards />

    </section>
  )
}

export const revalidate = 3600
