"use client"
import { useProfile } from "@/lib/useProfile"

const WelcomeText = () => {
    const { profile } = useProfile()
    console.log(profile);

    return (
        <div>
            <h1 className="font-semibold">Welcome, <span className="text-primary">{profile?.name}!</span></h1>
        </div>
    )
}

export default WelcomeText