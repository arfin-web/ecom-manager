"use client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Notifications from './Notifications'
import { Button } from "@/components/ui/button"
import { Bell } from "lucide-react"

const NotificationButton = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
                    <Bell className="h-4 w-4" />
                    <span className="sr-only">Toggle notifications</span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <Notifications />
            </PopoverContent>
        </Popover>
    )
}

export default NotificationButton