import { Button } from "@/components/ui/button"
import Link from "next/link"
import Logo from "./Logo"
import { ThemeToggle } from "./ThemeToggle"

export default function Navbar() {
    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
            <div>
                <Logo />
            </div>
            <div className="flex justify-end items-center gap-3 ml-auto">
                <ThemeToggle />
                <Link href="/login">
                    <Button className="w-full">Get Started</Button>
                </Link>
            </div>
        </header>
    )
}