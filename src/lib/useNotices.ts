import { useState, useEffect } from "react";
import { getBaseUrl } from "@/helpers/config/envConfig";

export function useNotices() {
    const [notices, setNotices] = useState<any>(null);
    const [error, setError] = useState("");

    const fetchNotices = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const response = await fetch(`${getBaseUrl()}/notices`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setNotices(result.data);
            } else {
                setError(result.message || "Failed to fetch notices data.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while fetching notices data.");
        }
    };

    useEffect(() => {
        fetchNotices();
    }, []);

    return { notices, error };
}