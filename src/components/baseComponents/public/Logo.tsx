import { Package2 } from "lucide-react"
import Link from "next/link"

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6" />
            <span className="">Ecom Manager</span>
        </Link>
    )
}

export default Logo