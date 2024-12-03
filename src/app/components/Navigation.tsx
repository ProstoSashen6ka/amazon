'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Navigation(){
    const pathname = usePathname()
    return(
        <nav className="flex bg-zinc-400">
            <div className="flex-1 w-56 h-12 text-center"><Link  className={`${pathname === '/' ? 'text-teal-400': 'hover:text-teal-400'}`} href="/">Home</Link></div>
            <div className="flex-1 w-56 h-12 text-center"><Link  className={`${pathname === '/shopping-cart' ? 'text-teal-400': 'hover:text-teal-400'}`} href="/shopping-cart">Shopping cart</Link></div>
        </nav>
    )
}
