import { Heading } from "@/components/heading"
import Link from "next/link"

export default function Resume() {
    const fileId = "1wHswNUtU2bHyVLM3-72BwJyWHeNUap_S"
    const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`
    const viewUrl = `https://drive.google.com/file/d/${fileId}/view`
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`

    return (
        <section>
            <Heading>Resume</Heading>

            <div className="mt-8 space-y-6">
                {/* Action buttons */}
                <div className="flex flex-wrap gap-4">
                    <Link
                        href={viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-200 hover:scale-105"
                    >
                        <span className="text-neutral-400">/</span>view
                    </Link>
                    <Link
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-all duration-200 hover:scale-105"
                    >
                        <span className="text-neutral-400">/</span>download
                    </Link>
                </div>

                {/* Embedded PDF */}
                <div className="w-full">
                    <iframe
                        src={embedUrl}
                        className="w-full h-[80vh] border border-neutral-200 dark:border-neutral-800 rounded-lg"
                        title="Resume PDF"
                        allow="autoplay"
                    />
                </div>

                {/* Fallback message */}
                <div className="text-sm text-neutral-500 dark:text-neutral-400">
                    If the PDF doesn&apos;t load above, you can{" "}
                    <Link
                        href={viewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                        view it directly
                    </Link>{" "}
                    or{" "}
                    <Link
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-neutral-900 dark:hover:text-neutral-100"
                    >
                        download it
                    </Link>.
                </div>
            </div>
        </section>
    )
}

export const revalidate = 3600 