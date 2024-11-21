import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
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
import { Edit, Trash } from "lucide-react"
import DeleteProduct from "./DeleteProduct"
import UpdateProductForm from "./UpdateProductForm"

const ProductsList = async () => {
    const products = await getProducts()
    return (
        <TabsContent value="all" className="mt-5">
            <Card x-chunk="dashboard-06-chunk-0">
                <CardHeader>
                    <CardTitle className="text-lg font-bold">All <span className="text-primary">Products</span></CardTitle>
                    <CardDescription>
                        Manage your products and view their sales performance.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Category</TableHead>
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
                                        <TableCell>{product.category}</TableCell>
                                        <TableCell>
                                            ${product.price}
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline">{product.rate}</Badge>
                                        </TableCell>
                                        <TableCell className="flex justify-start items-center gap-2">

                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Edit className="h-4 w-4 cursor-pointer" />
                                                </DialogTrigger>
                                                <DialogContent className="sm:max-w-[425px]">
                                                    <DialogHeader>
                                                        <DialogTitle>Update This <span className="text-primary">Product</span></DialogTitle>
                                                        <DialogDescription>
                                                            Give Proper Information
                                                        </DialogDescription>
                                                    </DialogHeader>
                                                    <UpdateProductForm productData={product} />
                                                </DialogContent>
                                            </Dialog>

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