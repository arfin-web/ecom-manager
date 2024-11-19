import { Badge } from "@/components/ui/badge"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import allOrders from "@/data/allOrders"

const TransectionsList = () => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Customer</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {
                    allOrders.map((order) => (
                        <TableRow key={order.id}>
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
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default TransectionsList