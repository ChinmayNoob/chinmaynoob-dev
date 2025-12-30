import type { Metadata } from "next";
import { Epilogue, Inter, Pacifico } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import { ThemeProvider } from "@/components/theme-provider";

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-sans" });
const pacifico = Pacifico({ subsets: ["latin"], weight: ["400"], variable: "--font-pacifico" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Chinmay | Full-Stack Developer",
  description: "I'm a full-stack developer from India, open for freelance and full-stack development roles. My primary tech stack includes Next.js, TypeScript, Motion, and Drizzle.",
  authors: [{ name: "Chinmay" }],
  keywords: ["Chinmay", "Full-Stack Developer", "Next.js", "TypeScript", "React", "Web Developer", "Portfolio"],

  openGraph: {
    title: "Chinmay | Full-Stack Developer",
    description: "I'm a full-stack developer from India, open for freelance and full-stack development roles. My primary tech stack includes Next.js, TypeScript, Motion, and Drizzle.",
    url: "https://chinmaynoob.vercel.app/",
    siteName: "Chinmay Portfolio",
    images: [
      {
        url: "/cover.png",
        width: 1200,
        height: 1200,
        alt: "Chinmay - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Chinmay | Full-Stack Developer",
    description: "I'm a full-stack developer from India, open for freelance and full-stack development roles. My primary tech stack includes Next.js, TypeScript, Motion, and Drizzle.",
    images: ["/cover.png"],
    creator: "@chinmaynoob",
  },

  // Additional metadata
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "bg-neutral-100 text-neutral-700 dark:bg-neutral-950 dark:text-neutral-300",
          epilogue.variable,
          pacifico.variable,
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container flex min-h-screen max-w-2xl flex-col">
            <Header />
            <main className="flex flex-1 flex-col pb-20 pt-40 md:pt-48">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
        <div className="pointer-events-none fixed inset-0 z-[99] h-full w-full overflow-hidden bg-[url(/assets/noise.png)] opacity-30 dark:opacity-[0.17]" />
      </body>
    </html>
  );
}
