import DeleteNoticeConfirmation from "@/components/baseComponents/dashboard/DeleteNoticeConfirmation"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { BellElectric, Trash } from "lucide-react"
import getNotices from "@/lib/getNotices"
import AddNoticeForm from "@/components/baseComponents/dashboard/AddNoticeForm"

const Notices = async () => {
    const notices = await getNotices()
    return (
        <div className="flex flex-1 flex-col gap-4 p-2">
            <div className="w-full flex justify-between items-center">
                <h2 className="text-lg font-bold">All <span className="text-primary">Notices</span></h2>

                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="shadow-md">Add New</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add New <span className="text-primary">Notice</span></DialogTitle>
                            <DialogDescription>
                                Give Proper Information
                            </DialogDescription>
                        </DialogHeader>
                        <AddNoticeForm />
                    </DialogContent>
                </Dialog>
            </div>
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                {
                    notices?.reverse().map((item: any) => (
                        <div key={item._id} className="rounded-xl bg-muted/50 p-3 lg:p-5">
                            <div className="flex w-full justify-between items-center">
                                <h2 className="font-semibold text-sm text-primary">{format(item.date, "PPP")}</h2>
                                <BellElectric className="w-12 h-12 text-muted" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-primary">{item.title}</h3>
                                <h1>{item.description}</h1>
                                <p className="text-sm mt-2"><span className="text-primary font-bold">N.B: </span>{item.note}</p>
                            </div>
                            <div className="mt-3">
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="destructive" size="icon">
                                            <Trash className="h-4 w-4" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80 p-3">
                                        <DeleteNoticeConfirmation noticeData={item} />
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Notices