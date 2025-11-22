"use client"

import { useEffect } from "react";

declare global {
    interface Window {
        $crisp: unknown[];
        CRISP_WEBSITE_ID: string;
    }
}

export default function CrispChat() {
    useEffect(() => {
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "16fddec9-fd28-46c5-9255-ef084fe1c4b0";

        const script = document.createElement("script");
        script.src = "https://client.crisp.chat/l.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            script.remove();
        };
    }, []);

    return null;
}