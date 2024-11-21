"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import categories from "@/data/categories"

const UpdateProductForm = ({ productData }: any) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: productData.name,
            description: productData.description,
            category: productData.category,
            price: productData.price,
            rate: productData.rate,
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/products/${productData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (response.ok) {
                toast.success('Product updated successfully', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                router.refresh()
            } else {
                toast.error(result.message || "Failed to update Product", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error updating Product:", error); 7
            toast.error("An error occurred while updating the Product.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            <form className="grid gap-4 border-none" onSubmit={handleSubmit(onSubmit)}>

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
                    <Label htmlFor="category">Category</Label>
                    <select
                        {...register("category", { required: "Category is required" })}
                        id="category"
                        className="p-1.5 bg-inherit border border-muted rounded-md"
                    >
                        <option value="" className="dark:text-primary">Select Category</option>
                        {
                            categories.map((category, index) => (
                                <option key={index} value={category.title} className="dark:text-primary">{(category.title).toUpperCase()}</option>
                            ))
                        }
                    </select>
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
            <ToastContainer />
        </>
    );
};

export default UpdateProductForm;