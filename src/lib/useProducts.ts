import { useState, useEffect } from "react";
import { getBaseUrl } from "@/helpers/config/envConfig";

export function useProducts() {
    const [products, setProducts] = useState<any>(null);
    const [error, setError] = useState("");

    const fetchProducts = async () => {
        const token = localStorage.getItem("token");

        if (!token) {
            setError("No token found, please log in.");
            return;
        }

        try {
            const response = await fetch(`${getBaseUrl()}/products`, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            const result = await response.json();

            if (response.ok) {
                setProducts(result.data);
            } else {
                setError(result.message || "Failed to fetch products data.");
            }
        } catch (err) {
            console.error("Error:", err);
            setError("An error occurred while fetching products data.");
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return { products, error };
}