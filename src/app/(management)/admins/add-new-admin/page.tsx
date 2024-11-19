import AddAdminForm from "@/components/baseComponents/dashboard/AddAdminForm"
import GeneralUsers from "@/components/baseComponents/dashboard/GeneralUsers"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

export default function AddNewAdmin() {
    return (
        <Tabs defaultValue="addnew" className="p-2">
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
        </Tabs>
    )
}