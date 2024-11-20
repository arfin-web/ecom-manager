import { useState, useEffect } from "react";
import { getBaseUrl } from "@/helpers/config/envConfig";

export function useOrders() {
    const [orders, setOrders] = useState<any>(null);
    const [error, setError] = useState("");

    const fetchOrders = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const response = await fetch(`${getBaseUrl()}/orders`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setOrders(result.data);
            } else {
                setError(result.message || "Failed to fetch orders data.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while fetching orders data.");
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return { orders, error };
}