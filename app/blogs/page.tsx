import { Heading } from "@/components/heading"

export default function Blogs() {

    return (
        <section>
            <Heading>Blogs</Heading>

            <div className="mt-8">
                <h2 className="text-xl font-medium mb-4 text-neutral-800 dark:text-neutral-200">
                    Coming Soon
                </h2>
            </div>
        </section>
    )
}

export const revalidate = 3600
