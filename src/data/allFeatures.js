import { Bolt, Cog, Cpu, Layers, LockKeyholeIcon, Users } from "lucide-react"

const allFeatures = [
    {
        id: 1,
        title: "Scalable Infrastructure",
        description: "Our platform is designed to scale seamlessly as your business grows, ensuring your applications are always available and responsive.",
        icon: <Cpu className="w-6 h-6 text-primary-foreground" />
    },
    {
        id: 2,
        title: "Secure by Design",
        description: "Security is at the core of our platform. We use the latest encryption and authentication technologies to protect your data.",
        icon: <LockKeyholeIcon className="w-6 h-6 text-primary-foreground" />
    },
    {
        id: 3,
        title: "Blazing Fast Performance",
        description: "Our platform is optimized for lightning-fast performance, ensuring your users have a seamless experience no matter where they are in the world.",
        icon: <Bolt className="w-6 h-6 text-primary-foreground" />
    },
    {
        id: 4,
        title: "Effortless Integration",
        description: "Our platform seamlessly integrates with your existing tools and workflows, allowing you to focus on building your business instead of managing infrastructure.",
        icon: <Cog className="w-6 h-6 text-primary-foreground" />
    },
    {
        id: 5,
        title: "Customizable Solutions",
        description: "Our platform is highly customizable, allowing you to tailor it to your specific business needs and create a unique experience for your customers.",
        icon: <Layers className="w-6 h-6 text-primary-foreground" />
    },
    {
        id: 6,
        title: "Collaborative Workspace",
        description: " Our platform provides a collaborative workspace where your team can work together seamlessly, share ideas and stay synchronized.",
        icon: <Users className="w-6 h-6 text-primary-foreground" />
    },
]

export default allFeatures