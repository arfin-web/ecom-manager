"use client"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
    ArrowRightLeft,
    BellElectric,
    Globe,
    Home,
    LineChart,
    Package,
    ShoppingCart,
    UserRoundCog,
    Users,
} from "lucide-react"
import { useOrders } from "@/lib/useOrders"
import { useProfile } from "@/lib/useProfile"

const DashboardMenus = () => {
    const pathname = usePathname()
    const { profile } = useProfile()
    const { orders } = useOrders()

    const dashboardMenus = [
        {
            id: 1,
            title: "Dashboard",
            icon: <Home className="h-4 w-4" />,
            link: "/dashboard",
            badge: false,
            badgeValue: null
        },
        {
            id: 2,
            title: "Orders",
            icon: <ShoppingCart className="h-4 w-4" />,
            link: "/orders",
            badge: true,
            badgeValue: `${orders?.length || 0}`
        },
        {
            id: 3,
            title: "Products",
            icon: <Package className="h-4 w-4" />,
            link: "/products",
            badge: false,
            badgeValue: null
        },
        {
            id: 4,
            title: "Customers",
            icon: <Users className="h-4 w-4" />,
            link: "/customers",
            badge: false,
            badgeValue: null
        },
        {
            id: 5,
            title: "Transactions",
            icon: <ArrowRightLeft className="h-4 w-4" />,
            link: "/transactions",
            badge: false,
            badgeValue: null
        },
        {
            id: 6,
            title: "Overview",
            icon: <LineChart className="h-4 w-4" />,
            link: "/analytics",
            badge: false,
            badgeValue: null
        },
        {
            id: 7,
            title: "Geography",
            icon: <Globe className="h-4 w-4" />,
            link: "/geography",
            badge: false,
            badgeValue: null
        },
        {
            id: 8,
            title: "Admins",
            icon: <UserRoundCog className="h-4 w-4" />,
            link: "/admins",
            badge: false,
            badgeValue: null
        },
        {
            id: 9,
            title: "Notices",
            icon: <BellElectric className="h-4 w-4" />,
            link: "/notices",
            badge: false,
            badgeValue: null
        },
    ]
    return (
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {
                dashboardMenus.map((menus) => {
                    const isActive = pathname === menus.link
                    if (profile?.email) {
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
                    } else {
                        return null
                    }
                })}
        </nav>
    )
}

export default DashboardMenus