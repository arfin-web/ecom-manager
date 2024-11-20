"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useProducts } from "@/lib/useProducts"

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    chrome: {
        label: "Chrome",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "Safari",
        color: "hsl(var(--chart-2))",
    },
    firefox: {
        label: "Firefox",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "Edge",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export default function Breakdown() {
    const { products = [] } = useProducts() // Ensure `products` is always defined

    // Group products by category and count the number of products in each category
    const chartData = React.useMemo(() => {
        if (!products || products.length === 0) return []

        const categoryCount = products.reduce((acc: any, product: any) => {
            acc[product.category] = (acc[product.category] || 0) + 1
            return acc
        }, {})

        // Assign colors to categories
        const getCategoryColor = (category: any) => {
            const colors = {
                clothes: "hsl(var(--chart-1))",
                shoes: "hsl(var(--chart-2))",
                watches: "hsl(var(--chart-3))",
                electronics: "hsl(var(--chart-4))",
                others: "hsl(var(--chart-5))",
            }
            return colors[category] || "hsl(var(--chart-other))"
        }

        // Map the counts to the chart data format
        return Object.entries(categoryCount).map(([category, count]) => ({
            category,
            visitors: count,
            fill: getCategoryColor(category),
        }))
    }, [products])

    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr: any) => acc + curr.visitors, 0)
    }, [chartData])

    // Show a loading message if chart data is empty
    if (chartData.length === 0) {
        return <div>Loading chart data...</div>
    }

    return (
        <Card className="flex flex-col border border-primary">
            <CardHeader className="items-center pb-0">
                <CardTitle>Products Category</CardTitle>
                <CardDescription>See products based o categories</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="category"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Visitors
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 1 Week
                </div>
            </CardFooter>
        </Card>
    )
}