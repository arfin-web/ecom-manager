import {
    Bell,
    Menu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import UpgradePlanCard from "@/components/baseComponents/dashboard/UpgradePlanCard"
import Logo from "@/components/baseComponents/public/Logo"
import DashboardMenus from "@/components/baseComponents/dashboard/DashboardMenus"
import { ThemeToggle } from "@/components/baseComponents/public/ThemeToggle"
import WelcomeText from "@/components/baseComponents/dashboard/WelcomeText"
import UserButton from "@/components/baseComponents/dashboard/UserButton"
import Notifications from "@/components/baseComponents/dashboard/Notifications"

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <div className="hidden bg-muted/40 md:block">
                    <div className="flex h-full max-h-screen flex-col gap-2 fixed">
                        <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
                            <Logo />
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                                        <Bell className="h-4 w-4" />
                                        <span className="sr-only">Toggle notifications</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="border-none bg-inherit">
                                    <Notifications />
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                        <div className="flex-1">
                            <DashboardMenus />
                        </div>
                        <div className="mt-auto p-4">
                            <UpgradePlanCard />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <header className="flex h-14 items-center gap-4 bg-muted/40 px-4 lg:h-[60px] lg:px-6">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="shrink-0 md:hidden"
                                >
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle navigation menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="left" className="flex flex-col border-none">
                                <div className="mt-5">
                                    <DashboardMenus />
                                </div>
                                <div className="mt-auto">
                                    <UpgradePlanCard />
                                </div>
                            </SheetContent>
                        </Sheet>
                        <div className="w-full flex-1">
                            <WelcomeText />
                        </div>
                        <div className="flex justify-end items-center gap-3">
                            <ThemeToggle />
                            <UserButton />
                        </div>
                    </header>
                    <main>
                        {children}
                    </main>
                </div>
            </div>
        </>
    );
}