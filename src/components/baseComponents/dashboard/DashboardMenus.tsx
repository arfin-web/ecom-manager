"use client"
import { Badge } from "@/components/ui/badge"
import dashboardMenus from "@/data/dashboardMenus"
import Link from "next/link"
import { usePathname } from "next/navigation"

const DashboardMenus = () => {
    const pathname = usePathname()
    return (
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {
                dashboardMenus.map((menus) => {
                    const isActive = pathname === menus.link
                    return (
                        <Link
                            key={menus.id}
                            href={menus.link}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary ${isActive ? 'bg-muted text-primary' : ''}`}>
                            {menus.icon}
                            {menus.title}
                            <Badge className={`ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${!menus.badge ? 'hidden' : 'flex'}`}>
                                {menus.badgeValue}
                            </Badge>
                        </Link>
                    )
                })}
        </nav>
    )
}

export default DashboardMenus