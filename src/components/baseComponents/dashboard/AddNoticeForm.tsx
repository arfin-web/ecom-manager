"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { format } from "date-fns"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { getBaseUrl } from "@/helpers/config/envConfig"
import { ToastContainer, toast } from 'react-toastify';
import { CalendarHeart } from "lucide-react"

type FormData = {
    title: string;
    description: string;
    note: string;
};

const AddNew = () => {
    const [date, setDate] = useState<Date | any>("")
    const [open, setOpen] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const router = useRouter();

    const onSubmit = async (data: FormData) => {
        const noticeData = {
            ...data,
            date: format(date, "yyyy-MM-dd"),
        };

        try {
            const response = await fetch(`${getBaseUrl()}/notices`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust if you’re handling auth
                },
                body: JSON.stringify(noticeData),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Notice added successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                reset();
                setDate(new Date());
                router.refresh()
            } else {
                toast.error(result.message || "Failed to add notice.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error adding notice:", error);
            toast.error("An error occurred while adding the notice.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-2">

                    <DropdownMenu open={open} onOpenChange={setOpen}>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">
                                <CalendarHeart className="h-4 w-4 mr-2" />
                                Select Date
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-full">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={(selectedDate) => {
                                    setDate(selectedDate); // Update the date
                                    setOpen(false); // Close the dropdown
                                }}
                                className="rounded-md"
                            />
                        </DropdownMenuContent>
                    </DropdownMenu>


                    <Input value={date ? format(date, "PPP") : "Please select a date"} readOnly />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                        id="title"
                        type="text"
                        placeholder="e.g., Happy Eid Ul Fitr"
                        {...register("title", { required: "Title is required" })}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                        id="description"
                        placeholder="Type your Notice Description here."
                        {...register("description", { required: "Description is required" })}
                    />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="note">Note</Label>
                    <Input
                        id="note"
                        type="text"
                        placeholder="e.g. See Exiting Offers"
                        {...register("note")}
                    />
                </div>

                <Button type="submit" className="w-full">
                    Confirm
                </Button>
            </form>
            <ToastContainer />
        </>
    );
}

export default AddNew