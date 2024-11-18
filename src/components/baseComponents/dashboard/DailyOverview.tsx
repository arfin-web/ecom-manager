"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, LabelList, Line, LineChart } from "recharts"

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
const chartData = [
    { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
    { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
    { browser: "firefox", visitors: 187, fill: "var(--color-firefox)" },
    { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
    { browser: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
    visitors: {
        label: "9AM - 11AM",
        color: "hsl(var(--primary))",
    },
    chrome: {
        label: "9AM - 11AM",
        color: "hsl(var(--chart-1))",
    },
    safari: {
        label: "12PM - 2PM",
        color: "hsl(var(--primary))",
    },
    firefox: {
        label: "5PM - 6PM",
        color: "hsl(var(--chart-3))",
    },
    edge: {
        label: "7PM - 8AM",
        color: "hsl(var(--chart-4))",
    },
    other: {
        label: "9PM - 11PM",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

export default function DailyOverview() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Todays Overview</CardTitle>
                <CardDescription>See Todays Overview</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            top: 24,
                            left: 24,
                            right: 24,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <ChartTooltip
                            cursor={false}
                            content={
                                <ChartTooltipContent
                                    indicator="line"
                                    nameKey="visitors"
                                    hideLabel
                                />
                            }
                        />
                        <Line
                            dataKey="visitors"
                            type="natural"
                            stroke="var(--color-visitors)"
                            strokeWidth={2}
                            dot={{
                                fill: "var(--color-visitors)",
                            }}
                            activeDot={{
                                r: 6,
                            }}
                        >
                            <LabelList
                                position="top"
                                offset={12}
                                className="fill-foreground"
                                fontSize={12}
                                dataKey="browser"
                                formatter={(value: keyof typeof chartConfig) =>
                                    chartConfig[value]?.label
                                }
                            />
                        </Line>
                    </LineChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>
                <div className="leading-none text-muted-foreground">
                    Showing total visitors for the last 6 months
                </div>
            </CardFooter>
        </Card>
    )
}