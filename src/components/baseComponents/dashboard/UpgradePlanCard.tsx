import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket } from "lucide-react"
import Link from "next/link"

const UpgradePlanCard = () => {
    return (
        <Card className="border-none w-56 lg:w-60 bg-muted lg:bg-background">
            <CardHeader>
                <CardTitle>Upgrade Your Plan</CardTitle>
                <CardDescription>
                    Unlock all features and get unlimited access to our
                    support team.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Link href="/coming-soon">
                    <Button size="sm" className="w-full">
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                            Upgrade
                        </span>
                        <Rocket className="h-3.5 w-3.5 ml-2" />
                    </Button>
                </Link>
            </CardContent>
        </Card >
    )
}

export default UpgradePlanCard