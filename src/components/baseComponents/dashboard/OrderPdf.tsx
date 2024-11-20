"use client";
import { useEffect } from "react";
import { jsPDF } from "jspdf";

const OrderPdf = ({ orderData }: any) => {
    useEffect(() => {
        if (orderData) {
            const doc = new jsPDF();

            // Set title
            doc.setFontSize(18);
            doc.text("Invoice", 105, 20, { align: "center" });

            // Set customer details
            doc.setFontSize(12);
            doc.text(`Name: ${orderData.name}`, 20, 40);
            doc.text(`Email: ${orderData.email}`, 20, 50);
            doc.text(`Product: ${orderData.product}`, 20, 60);
            doc.text(`Date: ${orderData.date}`, 20, 70);
            doc.text(`Price: $${orderData.price}`, 20, 80);
            doc.text(`Status: ${orderData.status}`, 20, 90);

            // Add any other details here

            // Generate PDF
            doc.save(`${orderData.name}_invoice.pdf`);
        }
    }, [orderData]);

    return (
        <div>
            Generating PDF...
        </div>
    );
};

export default OrderPdf;