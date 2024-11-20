"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Activity,
    CreditCard,
    DollarSign,
    Users,
} from "lucide-react"
import { useCustomers } from "@/lib/useCustomers"
import { useProducts } from "@/lib/useProducts"
import { useOrders } from "@/lib/useOrders"
import React from "react"

const SummuryCard = () => {
    const { customers } = useCustomers()
    const { products } = useProducts()
    const { orders } = useOrders()

    // Reducer function to calculate total revenue (only for 'paid' orders)
    const calculateTotalRevenue = (orders: { status: string; price: string }[]) => {
        return orders?.reduce((total, order) => {
            if (order.status === "paid") {
                return total + parseFloat(order.price); // Add the price if status is 'paid'
            }
            return total;
        }, 0); // Start the total at 0
    }

    // Reducer function to calculate total due (only for 'due' orders)
    const calculateTotalDue = (orders: { status: string; price: string }[]) => {
        return orders?.reduce((total, order) => {
            if (order.status === "due") {
                return total + parseFloat(order.price); // Add the price if status is 'paid'
            }
            return total;
        }, 0); // Start the total at 0
    }

    const totalRevenue = React.useMemo(() => calculateTotalRevenue(orders), [orders]);
    const totalDue = React.useMemo(() => calculateTotalDue(orders), [orders]);

    const dashboardSummury = [
        {
            id: 1,
            title: "Total Revenue",
            value: `${totalRevenue || 0}`,
            subDetails: "+20.1% from last month",
            sign: "$",
            icon: <DollarSign className="h-4 w-4 text-muted-foreground" />
        },
        {
            id: 2,
            title: "Total Due",
            value: `${totalDue || 0}`,
            subDetails: "+18.1% from last month",
            sign: "$",
            icon: <DollarSign className="h-4 w-4 text-muted-foreground" />
        },
        {
            id: 3,
            title: "Total Customers",
            value: `${customers?.length || 0}`,
            subDetails: "+180.1% from last month",
            sign: "+",
            icon: <Users className="h-4 w-4 text-muted-foreground" />
        },
        {
            id: 4,
            title: "Total Sales",
            value: `${orders?.length || 0}`,
            subDetails: "+19% from last month",
            sign: "+",
            icon: <CreditCard className="h-4 w-4 text-muted-foreground" />
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