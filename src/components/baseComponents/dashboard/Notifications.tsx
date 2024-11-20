import { BellRing, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import getNotices from "@/lib/getNotices"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type CardProps = React.ComponentProps<typeof Card>

export default async function Notifications({ className, ...props }: CardProps) {
    const notices = await getNotices()
    return (
        <Card className={cn("w-[380px] border-none", className)} {...props}>
            <CardContent className="grid gap-4 pt-5">
                <div className="flex items-center space-x-4 rounded-md border p-4">
                    <BellRing className="text-primary" />
                    <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium leading-none">
                            Notifications
                        </p>
                        <p className="text-sm text-muted-foreground">
                            See Recent Notifications
                        </p>
                    </div>
                </div>
                <div>
                    {notices?.reverse().map((notification: any) => (
                        <div
                            key={notification._id}
                            className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-primary" />
                            <div className="space-y-1">
                                <p className="text-sm font-medium leading-none">
                                    {notification.title}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {notification.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Link href="/notices" className="w-full">
                    <Button className="w-full">
                        <Check /> See All
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}