"use client"

import { getBaseUrl } from "@/helpers/config/envConfig";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useProfile } from "@/lib/useProfile";
import { ToastContainer, toast } from 'react-toastify';

export default function DeleteProduct({ productData }: any) {
    const router = useRouter()
    const { profile } = useProfile()

    const handleDelete = async (id: any) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${getBaseUrl()}/products/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message || "Product deleted successfully", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                router.refresh()
            } else {
                toast.error(result.message || "Failed to delete Product", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error deleting Product:", error);
            toast.error("An error occurred while deleting the Product.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            {
                profile?.role !== "admin" ? <h2>Only Admin Can Delete Product</h2> : <div className="w-full">
                    <h2>Are You Sure you want to Remove <span className="text-primary font-semibold">{productData?.name}</span>?</h2>
                    <div className="grid place-items-end">
                        <Button className="mt-3" variant="destructive" size="sm" onClick={() => handleDelete(productData?._id)}>Remove</Button>
                    </div>
                </div>
            }
            <ToastContainer />
        </>
    )
}