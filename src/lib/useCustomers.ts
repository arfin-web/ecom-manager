import { useState, useEffect } from "react";
import { getBaseUrl } from "@/helpers/config/envConfig";

export function useCustomers() {
    const [customers, setCustomers] = useState<any>(null);
    const [error, setError] = useState("");

    const fetchCustomers = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const response = await fetch(`${getBaseUrl()}/customers`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setCustomers(result.data);
            } else {
                setError(result.message || "Failed to fetch customers data.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while fetching customers data.");
        }
    };

    useEffect(() => {
        fetchCustomers();
    }, []);

    return { customers, error };
}