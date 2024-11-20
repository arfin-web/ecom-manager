import {
    File,
    ListFilter,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
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
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import getOrders from "@/lib/getOrders"
import OrderPdf from "@/components/baseComponents/dashboard/OrderPdf"

export default async function Orders() {
    const orders = await getOrders()
    return (
        <div className="flex min-h-screen px-4 lg:px-6 flex-col bg-muted/40">
            <Tabs defaultValue="week">
                <div className="flex items-center">
                    <h2 className="text-lg font-bold">All <span className="text-primary">Orders</span></h2>
                    {/* <div className="ml-auto flex items-center gap-2">
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
                                    Fulfilled
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Declined
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem>
                                    Refunded
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
                    </div> */}
                </div>
                <TabsContent value="week" className="mt-5">
                    <Card x-chunk="dashboard-05-chunk-3">
                        <CardHeader className="px-7">
                            <CardTitle>Orders</CardTitle>
                            <CardDescription>
                                Recent orders from your store.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Customer</TableHead>
                                        <TableHead>
                                            Product
                                        </TableHead>
                                        <TableHead>
                                            Status
                                        </TableHead>
                                        <TableHead>
                                            Date
                                        </TableHead>
                                        <TableHead>Amount</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        orders?.map((order: any) => (
                                            <TableRow key={order._id} className="bg-accent">
                                                <TableCell>
                                                    <div className="font-medium">{order.name}</div>
                                                    <div className="hidden text-sm text-muted-foreground md:inline">
                                                        {order.email}
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    {order.product}
                                                </TableCell>
                                                <TableCell>
                                                    <Badge className="text-xs" variant="outline">
                                                        {order.status}
                                                    </Badge>
                                                </TableCell>
                                                <TableCell>
                                                    {order.date}
                                                </TableCell>
                                                <TableCell>${order.price}</TableCell>
                                                <TableCell>
                                                    <Popover>
                                                        <PopoverTrigger asChild>
                                                            <Button variant="outline" className="text-primary" size="sm">Generate Invoice</Button>
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-full p-3">
                                                            <OrderPdf orderData={order} />
                                                        </PopoverContent>
                                                    </Popover>
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