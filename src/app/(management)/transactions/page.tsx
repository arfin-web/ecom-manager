import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import TransectionsList from "@/components/baseComponents/dashboard/TransectionsList"

const AllTransections = () => {
    return (
        <div>
            <Card
                className="xl:col-span-2 border-none shadow-md" x-chunk="dashboard-01-chunk-4"
            >
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle className="text-lg font-bold">All <span className="text-primary">Transactions</span></CardTitle>
                        <CardDescription>
                            All transactions from your store.
                        </CardDescription>
                    </div>
                </CardHeader>
                <CardContent>
                    <TransectionsList />
                </CardContent>
            </Card>
        </div>
    )
}

export default AllTransections