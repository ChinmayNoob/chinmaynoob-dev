export type Job = {
   company: string
   position: string
   introDescription: React.ReactNode
   description?: React.ReactNode
   from: string
   to: string
}

export const kraftbase: Job = {
   company: "Kraftbase",
   position: "Frontend Developer",
   introDescription: (
      <>
         Developed a fully responsive ticket reselling platform from scratch using Next.js and TypeScript. Enhanced server state management with TanStack Query, improving performance by 40%. Collaborated with backend team on 15+ API integrations and designed high-converting landing pages.
      </>
   ),
   from: "Jan 2025",
   to: "Feb 2025",
}


