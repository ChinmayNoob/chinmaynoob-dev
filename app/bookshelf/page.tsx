import { Heading } from "@/components/heading"

export default function Socials() {
    const books = [
        {
            name: "Notes from the Underground",
            author: "Fyodor Dostoevsky",
            status: "reading"
        },
        {
            name: "Norwegian Wood",
            author: "Haruki Murakami",
            status: "read"
        },
        {
            name: "White Nights",
            author: "Fyodor Dostoevsky",
            status: "read"
        },
        {
            name: "1984",
            author: "George Orwell",
            status: "read"
        },
    ]

    const readingNow = books.filter((book) => book.status === "reading")
    const readBooks = books.filter((book) => book.status === "read")

    return (
        <section>
            <Heading>Bookshelf</Heading>

            <div className="mt-8">
                <h2 className="text-xl font-medium mb-4 text-neutral-800 dark:text-neutral-200">
                    Currently Reading
                </h2>
                <div className="space-y-4">
                    {readingNow.map((book) => (
                        <div
                            key={book.name}
                            className="flex items-center justify-between"
                        >
                            <p className="text-neutral-600 dark:text-neutral-400">
                                {book.name}
                            </p>
                            <p className="text-sm text-neutral-400 dark:text-neutral-600 font-pacifico">
                                {book.author}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-xl font-medium mb-4 text-neutral-800 dark:text-neutral-200">
                    Read
                </h2>
                <div className="space-y-4">
                    {readBooks.map((book) => (
                        <div
                            key={book.name}
                            className="flex items-center justify-between"
                        >
                            <p className="text-neutral-600 dark:text-neutral-400">
                                {book.name}
                            </p>
                            <p className="text-sm text-neutral-400 dark:text-neutral-600 font-pacifico">
                                {book.author}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export const revalidate = 3600
