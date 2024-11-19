import {
    File,
    ListFilter,
    MoreHorizontal,
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
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import getCustomers from "@/lib/getCustomers"

export default async function Customers() {
    const customers = await getCustomers()
    const admins = customers?.filter((user: any) => user.role === "admin")
    return (
        <div className="flex min-h-screen px-4 lg:px-6 flex-col bg-muted/40">
            <Tabs defaultValue="week">
                <div className="flex items-center">
                    <TabsList>
                        <TabsTrigger value="week">Week</TabsTrigger>
                        <TabsTrigger value="month">Month</TabsTrigger>
                        <TabsTrigger value="year">Year</TabsTrigger>
                    </TabsList>
                    <div className="ml-auto flex items-center gap-2">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="h-7 gap-1 text-sm"
                                >
                                    <ListFilter className="h-3.5 w-3.5" />
                                    <span className="sr-only sm:not-sr-only">Filter</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem checked>
                                    Dhaka
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Gazipur
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Chattogram
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button
                            size="sm"
                            variant="outline"
                            className="h-7 gap-1 text-sm"
                        >
                            <File className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only">Export</span>
                        </Button>
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
                                        admins?.map((admin: any) => (
                                            <TableRow key={admin._id} className="bg-accent">
                                                <TableCell>
                                                    <div className="font-medium">{admin.name}</div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    {admin.email}
                                                </TableCell>
                                                <TableCell>
                                                    {admin.role}
                                                </TableCell>
                                            </TableRow>
                                        ))
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