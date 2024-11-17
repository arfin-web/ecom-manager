import {
    Home,
    LineChart,
    Package,
    ShoppingCart,
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
        badgeValue: `${allOrders.length}`
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
        title: "Analytics",
        icon: <LineChart className="h-4 w-4" />,
        link: "/analytics",
        badge: false,
        badgeValue: null
    },
]

export default dashboardMenus