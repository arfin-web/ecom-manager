"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const SetAdminForm = ({ customerData }: any) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: customerData.name,
            email: customerData.email,
            role: "admin",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/customers/${customerData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (response.ok) {
                toast.success(`${customerData?.name} Become Admin Successfully!`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                router.refresh()
            } else {
                toast.error(result.message || "Failed to Set Admin", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error updating Role:", error); 7
            toast.error("An error occurred while updating the Role.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            <form className="border-none" onSubmit={handleSubmit(onSubmit)}>
                <h1 className="font-bold mt-2">Are You Sure to Set <span className="text-primary">{customerData?.name}</span> As Admin?</h1>

                <div className="grid gap-2 mt-2 hidden">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" {...register("name", { required: "Name is required" })} />
                </div>

                <div className="grid gap-2 mt-2 hidden">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" {...register("email", { required: "Email is required" })} />
                </div>

                <Button type="submit" className="mt-3">
                    Confirm
                </Button>
            </form>
            <ToastContainer />
        </>
    );
};

export default SetAdminForm;