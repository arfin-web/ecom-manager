"use client"

import AddAdminForm from "@/components/baseComponents/dashboard/AddAdminForm"
import GeneralUsers from "@/components/baseComponents/dashboard/GeneralUsers"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useProfile } from "@/lib/useProfile"

export default function AddNewAdmin() {
    const { profile } = useProfile()
    return (
        <>
            {
                profile?.role === "admin" ? <Tabs defaultValue="addnew" className="p-2">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="addnew">Add New Admin</TabsTrigger>
                        <TabsTrigger value="addexisting">Add From Existing</TabsTrigger>
                    </TabsList>
                    <TabsContent value="addnew">
                        <AddAdminForm />
                    </TabsContent>
                    <TabsContent value="addexisting">
                        <GeneralUsers />
                    </TabsContent>
                </Tabs> : <div className="container mx-auto">
                    <div className="flex h-screen justify-center items-center">
                        <h1 className="text-3xl font-bold">You are <span className="text-primary">Unauthorized!</span></h1>
                    </div>
                </div>
            }
        </>
    )
}