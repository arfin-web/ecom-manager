"use client"

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useRouter } from "next/navigation";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { ToastContainer, toast } from 'react-toastify';
import Link from "next/link";

const adminLoginCredentials = {
    email: "admin@gmail.com",
    password: "1234567",
}

export function LoginForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    // Define the onSubmit function to handle form submission
    const onSubmit = async (data: any) => {
        console.log(getBaseUrl());

        try {
            const response = await fetch(`${getBaseUrl()}/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                localStorage.setItem("token", result.token)
                toast.success("Login successful!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
                router.push("/dashboard")
            } else {
                toast.error(result.message || "Failed to login", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                })
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("An error occurred. Please try again.", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
            })
        }
    };
    // b1ty4nofq
    return (
        <div className="container mx-auto px-2 py-2 lg:px-20">
            <div className="grid h-screen grid-cols-1 lg:grid-cols-2 place-items-center">
                <form className="p-2 lg:p-5 order-2 lg:order-1" onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="text-2xl font-bold text-primary">Login</h3>
                    <h4>
                        Enter your email below to login to your account
                    </h4>
                    <div className="space-y-3 mt-5">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                {...register("email", { required: "Email is required" })}
                            />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                {...register("password", { required: "Password is required" })}
                            />
                        </div>
                        <Button type="submit" className="w-full">
                            Login
                        </Button>

                        <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <Link href="/register" className="underline text-primary">
                                Sign up
                            </Link>
                        </div>

                    </div>

                </form>

                <Card className="w-full border border-primary order-1 lg:order-2">
                    <CardHeader>
                        <CardTitle>Super Admin Credentials</CardTitle>
                        <CardDescription>
                            Copy Values for Login
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" defaultValue={adminLoginCredentials.email} readOnly />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" defaultValue={adminLoginCredentials.password} readOnly />
                        </div>
                    </CardContent>
                </Card>

            </div>
            <ToastContainer />
        </div>
    );
}