"use client"

import { Chart } from "react-google-charts";

export const data = [
    ["Country", "Users"],
    ["Bangladesh", 100],
    ["India", 200],
    ["Germany", 200],
    ["United States", 300],
    ["Brazil", 400],
    ["Canada", 500],
    ["France", 600],
    ["RU", 700],
];

export default function Geography() {
    return (
        <div className="container mx-auto p-2">
            <div className="flex w-full justify-center items-center">
                <Chart
                    chartEvents={[
                        {
                            eventName: "select",
                            callback: ({ chartWrapper }: any) => {
                                const chart = chartWrapper.getChart();
                                const selection = chart.getSelection();
                                if (selection.length === 0) return;
                                const region = data[selection[0].row + 1];
                                console.log("Selected : " + region);
                            },
                        },
                    ]}
                    chartType="GeoChart"
                    width="98%"
                    height="98%"
                    data={data}
                />
            </div>
        </div>
    );
}