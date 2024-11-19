"use client"
import {
    PlusCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useProfile } from "@/lib/useProfile"
import Link from "next/link"

const AddAdminButton = () => {
    const { profile } = useProfile()
    return (
        <>
            {
                profile?.role == "admin" && <Link href="/admins/add-new-admin">
                    <Button size="sm" className="h-7 gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Add New Admin
                        </span>
                    </Button>
                </Link>
            }
        </>
    )
}

export default AddAdminButton