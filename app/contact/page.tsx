"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactUs() {
    const [visible, setVisible] = useState(true);
    const router = useRouter();

    if (!visible) {
        router.push("/"); // Redirect to the home page
        return null;
    }

    return (
        <div className="contact-container" style={{ position: "relative" }}>
            <button
                onClick={() => setVisible(false)}
                style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "transparent",
                    border: "none",
                    fontSize: "1.5rem",
                    cursor: "pointer",
                }}
                aria-label="Close"
            >
                ×
            </button>
            <h1>Contact Us</h1>
            <p>If you have any questions or need assistance, feel free to reach out to us!</p>
            <p>
                Email: <a href="mailto:yuvrajjsoni17@gmail.com">yuvrajjsoni17@gmail.com</a>
            </p>
            <p>
                Phone: <a href="tel:+919242309812">9242309812</a>
            </p>
            <p>
                <strong>Note:</strong> Only text messages will be allowed.
            </p>
            <p>Thank you for using our website!</p>
        </div>
    );
}