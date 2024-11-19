import Link from "next/link"
import {
    ArrowUpRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import TransectionsList from "./TransectionsList"

const AllTransections = () => {
    return (
        <div>
            <Card
                className="xl:col-span-2 border-none shadow-md" x-chunk="dashboard-01-chunk-4"
            >
                <CardHeader className="flex flex-row items-center">
                    <div className="grid gap-2">
                        <CardTitle>Transactions</CardTitle>
                        <CardDescription>
                            Recent transactions from your store.
                        </CardDescription>
                    </div>
                    <Button asChild size="sm" className="ml-auto gap-1">
                        <Link href="/transactions">
                            View All
                            <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </Button>
                </CardHeader>
                <CardContent>
                    <TransectionsList />
                </CardContent>
            </Card>
        </div>
    )
}

export default AllTransections