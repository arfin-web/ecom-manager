import {
    ArrowRightLeft,
    Globe,
    Home,
    LineChart,
    Package,
    ShoppingCart,
    UserRoundCog,
    Users,
} from "lucide-react"
import allOrders from "./allOrders"

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
        badgeValue: `${allOrders?.length || 0}`
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
        title: "Geography",
        icon: <Globe className="h-4 w-4" />,
        link: "/geography",
        badge: false,
        badgeValue: null
    },
    {
        id: 7,
        title: "Admins",
        icon: <UserRoundCog className="h-4 w-4" />,
        link: "/admins",
        badge: false,
        badgeValue: null
    },
]

export default dashboardMenus