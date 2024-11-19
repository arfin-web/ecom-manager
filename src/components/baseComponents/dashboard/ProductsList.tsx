import { Badge } from "@/components/ui/badge"
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
    TabsContent,
} from "@/components/ui/tabs"
import getProducts from "@/lib/getProducts"
import { Trash } from "lucide-react"
import DeleteProduct from "./DeleteProduct"

const ProductsList = async () => {
    const products = await getProducts()
    return (
        <TabsContent value="all" className="mt-5">
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle>Products</CardTitle>
                    <CardDescription>
                        Manage your products and view their sales performance.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>
                                    Rate
                                </TableHead>
                                <TableHead>
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {
                                products?.map((product: any) => (
                                    <TableRow key={product.id}>
                                        <TableCell className="font-medium">
                                            {product.name}
                                        </TableCell>
                                        <TableCell>
                                            ${product.price}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{product.rate}</Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <Trash className="h-4 w-4 text-primary cursor-pointer" />
                                                </PopoverTrigger>
                                                <PopoverContent className="w-80 p-3">
                                                    <DeleteProduct productData={product} />
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
    )
}

export default ProductsList