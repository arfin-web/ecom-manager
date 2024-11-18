import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import Charts from "@/components/baseComponents/dashboard/Charts"
import DailyOverview from "@/components/baseComponents/dashboard/DailyOverview"
import MonthlyOverview from "@/components/baseComponents/dashboard/MonthlyOverview"
import Breakdown from "@/components/baseComponents/dashboard/Breakdown"

const Analytics = () => {
    return (
        <>
            <Tabs defaultValue="overview" className="p-2">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="daily">Daily</TabsTrigger>
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <Charts />
                </TabsContent>
                <TabsContent value="daily">
                    <DailyOverview />
                </TabsContent>
                <TabsContent value="monthly">
                    <MonthlyOverview />
                </TabsContent>
                <TabsContent value="breakdown">
                    <Breakdown />
                </TabsContent>
            </Tabs>
        </>
    )
}

export default Analytics