"use client"

import Breakdown from "@/components/baseComponents/dashboard/Breakdown"
import CustomersChart from "@/components/baseComponents/dashboard/CustomersChart"
import SummuryCard from "@/components/baseComponents/dashboard/SummuryCard"
import { useProfile } from "@/lib/useProfile"

export default function Dashboard() {
    const { profile } = useProfile()
    return (
        <>
            {
                profile?.email ? <div className="flex min-h-screen w-full flex-col">
                    <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                        <SummuryCard />
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div>
                                <CustomersChart />
                            </div>
                            <div>
                                <Breakdown />
                            </div>
                        </div>
                    </main>
                </div> : null
            }
        </>
    )
}