import { FloatingNav } from "@/components/ui/floating-navbar"

export type NavItem = {
   name: string
   link: string
   icon?: React.ReactNode
}

const navItems: NavItem[] = [
   { name: "Home", link: "/" },
   { name: "Work", link: "/work" },
   { name: "Projects", link: "/projects" },
   { name: "Bookshelf", link: "/bookshelf" },
   { name: "Blogs", link: "/blogs" },
]

export function Header() {
   return (
      <header className="flex">
         <FloatingNav navItems={navItems} />
      </header>
   )
}
