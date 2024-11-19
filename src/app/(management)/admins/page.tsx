import {
    PlusCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
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
import getCustomers from "@/lib/getCustomers"
import Link from "next/link"

export default async function Customers() {
    const customers = await getCustomers()
    return (
        <div className="flex min-h-screen px-4 lg:px-6 flex-col bg-muted/40">
            <Tabs defaultValue="week">
                <div className="flex items-center">
                    <h2>All <span className="text-primary">Admins</span></h2>
                    <div className="ml-auto flex items-center gap-2">
                        <Link href="/admins/add-new-admin">
                            <Button size="sm" className="h-7 gap-1">
                                <PlusCircle className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                    Add New Admin
                                </span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <TabsContent value="week" className="mt-5">
                    <Card x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>Customers</CardTitle>
                            <CardDescription>
                                See all of your valuable customers.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>
                                            Email
                                        </TableHead>
                                        <TableHead>
                                            Role
                                        </TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        customers?.map((customer: any) => {
                                            if (customer.role == "admin") {
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