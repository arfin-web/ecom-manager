import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Activity,
    CreditCard,
    DollarSign,
    Users,
} from "lucide-react"
import getCustomers from "@/lib/getCustomers"

const SummuryCard = async () => {
    const customers = await getCustomers()

    const dashboardSummury = [
        {
            id: 1,
            title: "Total Revenue",
            value: 45231.89,
            subDetails: "+20.1% from last month",
            sign: "$",
            icon: <DollarSign className="h-4 w-4 text-muted-foreground" />
        },
        {
            id: 2,
            title: "Total Customers",
            value: `${customers.length || 0}`,
            subDetails: "+180.1% from last month",
            sign: "+",
            icon: <Users className="h-4 w-4 text-muted-foreground" />
        },
        {
            id: 3,
            title: "Sales",
            value: 12234,
            subDetails: "+19% from last month",
            sign: "+",
            icon: <CreditCard className="h-4 w-4 text-muted-foreground" />
        },
        {
            id: 4,
            title: "Active Now",
            value: 573,
            subDetails: "+201 since last hour",
            sign: "+",
            icon: <Activity className="h-4 w-4 text-muted-foreground" />
        },
    ]

    return (
        <div className="grid gap-2 grid-cols-2 md:gap-8 lg:grid-cols-4">
            {
                dashboardSummury.map((summury, index) => {
                    const firstCard = index === 0
                    return (
                        <Card key={summury.id} x-chunk={`dashboard-01-chunk-${index}`} className={`${firstCard ? 'border border-primary' : 'border-none shadow-xl'}`}>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    {summury.title}
                                </CardTitle>
                                {summury.icon}
                            </CardHeader>
                            <CardContent>
                                <div className="text-lg lg:text-2xl font-bold">{summury.sign} {summury.value}</div>
                                <p className="text-xs text-muted-foreground">
                                    {summury.subDetails}
                                </p>
                            </CardContent>
                        </Card>
                    )
                })}
        </div>
    )
}

export default SummuryCard