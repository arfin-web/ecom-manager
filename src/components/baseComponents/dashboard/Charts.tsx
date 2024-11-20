"use client"
import * as React from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useOrders } from "@/lib/useOrders"

const chartConfig = {
    views: {
        label: "Total Sale",
    },
    sale: {
        label: "Paid",
        color: "hsl(var(--primary))",
    },
    return: {
        label: "Due",
        color: "hsl(var(--primary-foreground))",
    },
} satisfies ChartConfig

export default function Charts() {
    const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>("sale")
    const { orders } = useOrders()

    // Calculate totals for paid and due orders
    const total = React.useMemo(() => {
        const saleTotal = orders?.filter((order: any) => order.status === "paid")
            .reduce((acc: any, curr: any) => acc + parseFloat(curr.price), 0)

        const returnTotal = orders?.filter((order: any) => order.status === "due")
            .reduce((acc: any, curr: any) => acc + parseFloat(curr.price), 0)

        return {
            sale: saleTotal,
            return: returnTotal,
        }
    }, [orders])

    // Data to be displayed on the chart
    const chartData = React.useMemo(() => {
        const groupedData: { date: string; sale: number; return: number }[] = []

        // Group orders by date and calculate the totals
        orders?.forEach((order: any) => {
            const date = new Date(order.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
            })
            const existing = groupedData.find((item) => item.date === date)

            if (existing) {
                if (order.status === "paid") {
                    existing.sale += parseFloat(order.price)
                } else {
                    existing.return += parseFloat(order.price)
                }
            } else {
                groupedData.push({
                    date,
                    sale: order.status === "paid" ? parseFloat(order.price) : 0,
                    return: order.status === "due" ? parseFloat(order.price) : 0,
                })
            }
        })

        return groupedData
    }, [orders])

    return (
        <>
            <Card className="m-5">
                <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
                    <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
                        <CardTitle>Business Report</CardTitle>
                        <CardDescription>
                            Showing total paid & dues for the last 1 week
                        </CardDescription>
                    </div>
                    <div className="flex">
                        {["paid", "due"].map((key) => {
                            const chart = key as keyof typeof chartConfig
                            return (
                                <button
                                    key={chart}
                                    data-active={activeChart === chart}
                                    className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                                    onClick={() => setActiveChart(chart)}
                                >
                                    <span className="text-xs text-muted-foreground">
                                        {chartConfig[chart]?.label}
                                    </span>
                                    <span className="text-lg font-bold leading-none sm:text-3xl">
                                        {total[key as keyof typeof total]?.toLocaleString()}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </CardHeader>
                <CardContent className="px-2 sm:p-6">
                    <ChartContainer
                        config={chartConfig}
                        className="aspect-auto h-[250px] w-full"
                    >
                        <BarChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: 12,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                minTickGap={32}
                                tickFormatter={(value) => {
                                    const date = new Date(value)
                                    return date.toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                    })
                                }}
                            />
                            <ChartTooltip
                                content={
                                    <ChartTooltipContent
                                        className="w-[150px]"
                                        nameKey="views"
                                        labelFormatter={(value) => {
                                            return new Date(value).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                year: "numeric",
                                            })
                                        }}
                                    />
                                }
                            />
                            <Bar
                                dataKey={activeChart}
                                fill={`var(--color-${activeChart})`}
                            />
                        </BarChart>
                    </ChartContainer>
                </CardContent>
            </Card>
        </>
    )
}