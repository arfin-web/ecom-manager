"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { getBaseUrl } from "@/helpers/config/envConfig"
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation"

type FormData = {
    name: string;
    description: string;
    price: number;
    rate: string;
};

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const router = useRouter();

    const onSubmit = async (data: FormData) => {
        try {
            const response = await fetch(`${getBaseUrl()}/products`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`, // Adjust if you’re handling auth
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success("Product added successfully!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                reset();
                router.push("/products")
            } else {
                toast.error(result.message || "Failed to add Product.", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error adding Product:", error);
            toast.error("An error occurred while adding the Product.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            <Card className="border-none shadow-md">
                <CardHeader>
                    <CardTitle className="text-2xl">Add New Product</CardTitle>
                    <CardDescription>Provide Accurate Information</CardDescription>
                </CardHeader>
                <CardContent>
                    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>

                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                type="text"
                                placeholder="e.g., Apple Watch"
                                {...register("name", { required: "Name is required" })}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                placeholder="Type your Product Description here."
                                {...register("description", { required: "Description is required" })}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="price">Price</Label>
                            <Input
                                id="price"
                                type="number"
                                placeholder="e.g. $200"
                                {...register("price", { required: "Price is required" })}
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="rate">Rate</Label>
                            <Input
                                id="rate"
                                type="text"
                                placeholder="e.g. 4.5"
                                {...register("rate", { required: "Rate is required" })}
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Confirm
                        </Button>
                    </form>
                </CardContent>
            </Card>
            <ToastContainer />
        </>
    );
}

export default AddProduct