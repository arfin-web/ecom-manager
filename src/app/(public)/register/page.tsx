"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getBaseUrl } from "@/helpers/config/envConfig";
import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const router = useRouter();

    const onSubmit = async (data: any) => {
        try {
            const response = await fetch(`${getBaseUrl()}/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            const result = await response.json();

            if (response.ok) {
                toast.success(`User ${data.name} registered successfully!`, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                reset();
                router.push('/login');
            } else {
                toast.error(result.message || "Error registering user", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Failed to register user", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };

    return (
        <>
            <div className="container mx-auto px-2 lg:px-20">
                <div className="flex h-screen justify-center items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3 p-4 w-full mx-auto border-none rounded-xl shadow-md">
                        <h1 className="text-2xl text-center font-bold mb-2">Register Now in <span className="text-primary">Ecom Manager</span></h1>
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                {...register("name", { required: "Name is required" })}
                                id="name"
                                type="text"
                                placeholder="eg. John Doe"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+\.\S+$/,
                                        message: "Invalid email address",
                                    },
                                })}
                                id="email"
                                type="email"
                                placeholder="eg. johndoe@example.com"
                            />
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                {...register("password", { required: "Password is required", minLength: 6 })}
                                id="password"
                                type="password"
                                placeholder="eg. ******"
                            />
                        </div>

                        <Button type="submit" className="mt-3">
                            Confirm
                        </Button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Register;