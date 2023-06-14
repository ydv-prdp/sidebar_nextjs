import Link from "next/link"

interface SidebarProps{
    children: React.ReactNode
}
const Sidebar:React.FC<SidebarProps> = ({children}) => {
   children
  return (
    <div className="flex h-screen bg-slate-800">
        <div  className="
                hidden
                md:flex
                flex-col
                gap-y-2
                bg-black
                h-full
                w-[300px]
                p-2 q
            ">
            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>
            <Link href="/contact">
                Courses
            </Link>
            <Link href="/mixture">
                Mixture
            </Link>
            <Link href="/contact">
                Contact Us
            </Link>
        </div>
       <main className="h-full flex-1 overflow-y-auto py-2">
            {children}
       </main>
    </div>
  )
}

export default Sidebar