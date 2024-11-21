import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import getOrders from "@/lib/getOrders"

const TransectionsList = async () => {
    const orders = await getOrders()
    return (
        <Table className="overflow-x-scroll">
            <TableHeader>
                <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    orders?.map((order: any) => {
                        if (order.status == "paid") {
                            return (
                                <TableRow key={order._id}>
                                    <TableCell>
                                        <div className="font-medium">{order.name}</div>
                                        <div className=" text-sm text-muted-foreground">
                                            {order.email}
                                        </div>
                                    </TableCell>
                                    <TableCell>${order.price}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline">{order.status}</Badge>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    })
                }
            </TableBody>
        </Table>
    )
}

export default TransectionsList