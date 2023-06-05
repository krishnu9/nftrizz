"use client"
import { NavItem as MainNavItem } from "@/types"
import Link from "next/link"

interface MainNavProps {
    items: MainNavItem[]
    children?: React.ReactNode
}

export function MainNav({items, children}: MainNavProps) {
    return (
        // continue from here
        <div className="flex gap-6 md:gap-10 border-2 border-gray-800">
            {items.map((item) => (<Link key={item.title} href={item.href}>
                {item.title}
                </Link>)
            )}
        </div>
    )
}
