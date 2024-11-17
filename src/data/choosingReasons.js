const { BoltIcon, ScaleIcon, Edit3 } = require("lucide-react");

const choosingReasons = [
    {
        id: 1,
        title: "Rapidly Store Setup",
        description: "Quickly setup your store to the cloud with our managed E-commerce System.",
        icon: <BoltIcon className="w-6 h-6 text-primary" />
    },
    {
        id: 2,
        title: "Customizable Features",
        description: "Tailor your application to meet your specific needs with our flexible features.",
        icon: <Edit3 className="w-6 h-6 text-primary" />
    },
    {
        id: 3,
        title: "Scalable Solution",
        description: "Easily scale your application to meet changing demands with our cloud-based infrastructure.",
        icon: <ScaleIcon className="w-6 h-6 text-primary" />
    }
]

export default choosingReasons