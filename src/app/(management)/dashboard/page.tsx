import AllTransections from "@/components/baseComponents/dashboard/AllTransections"
import Breakdown from "@/components/baseComponents/dashboard/Breakdown"
import SummuryCard from "@/components/baseComponents/dashboard/SummuryCard"

export default function Dashboard() {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <SummuryCard />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="lg:col-span-2">
                        <AllTransections />
                    </div>
                    <div>
                        <Breakdown />
                    </div>
                </div>
            </main>
        </div>
    )
}