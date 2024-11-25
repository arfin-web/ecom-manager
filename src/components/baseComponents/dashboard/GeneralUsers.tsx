"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
} from "@/components/ui/tabs"
import { useCustomers } from "@/lib/useCustomers"
import SetAdminForm from "./SetAdminForm"

export default function GeneralUsers() {
    const { customers } = useCustomers()
    return (
        <div className="flex min-h-screen px-4 lg:px-6 flex-col bg-muted/40">
            <Tabs defaultValue="week">
                <h2>All <span className="text-primary">Users</span></h2>
                <TabsContent value="week" className="mt-5">
                    <Card x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>Users</CardTitle>
                            <CardDescription>
                                See all of your valuable Users.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>User</TableHead>
                                        <TableHead>
                                            Email
                                        </TableHead>
                                        <TableHead>
                                            Role
                                        </TableHead>
                                        <TableHead>
                                            Action
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        customers?.map((customer: any) => {
                                            if (customer.role == "customer") {
                                                return (
                                                    <TableRow key={customer._id} className="bg-accent">
                                                        <TableCell>
                                                            <div className="font-medium">{customer.name}</div>
                                                        </TableCell>
                                                        <TableCell className="hidden sm:table-cell">
                                                            {customer.email}
                                                        </TableCell>
                                                        <TableCell>
                                                            {customer.role}
                                                        </TableCell>
                                                        <TableCell>
                                                            <Popover>
                                                                <PopoverTrigger asChild>
                                                                    <Button variant="outline" className="text-primary" size="sm">Set As Admin</Button>
                                                                </PopoverTrigger>
                                                                <PopoverContent className="w-80 p-3">
                                                                    <SetAdminForm customerData={customer} />
                                                                </PopoverContent>
                                                            </Popover>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            }
                                        })
                                    }
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    )
}