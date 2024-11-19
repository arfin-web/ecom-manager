"use client"

import { getBaseUrl } from "@/helpers/config/envConfig";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useProfile } from "@/lib/useProfile";
import { ToastContainer, toast } from 'react-toastify';

export default function DeleteUser({ userData }: any) {
    const router = useRouter()
    const { profile } = useProfile()

    const handleDelete = async (id: any) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${getBaseUrl()}/customers/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message || "User deleted successfully", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                });
                router.refresh()
            } else {
                toast.error(result.message || "Failed to delete User", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error deleting User:", error);
            toast.error("An error occurred while deleting the User.", {
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
                userData?.email === "admin@gmail.com" ? <>
                    <h2><span className="text-primary font-semibold">{userData?.name}&#x2C;</span> You can not remove Super Admin.</h2>
                </> : <>
                    {
                        profile?.role !== "admin" ? <h2>Only Admin Can Delete User</h2> : <div className="w-full">
                            <h2>Are You Sure you want to Remove <span className="text-primary font-semibold">{userData?.name}</span>?</h2>
                            <div className="grid place-items-end">
                                <Button className="mt-3" variant="destructive" size="sm" onClick={() => handleDelete(userData?._id)}>Remove</Button>
                            </div>
                        </div>
                    }
                </>
            }
            <ToastContainer />
        </>
    )
}