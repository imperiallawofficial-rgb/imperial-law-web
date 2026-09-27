"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // បង្ហាញប៊ូតុងនៅពេលអូសចុះក្រោមលើសពី 400px (ប្រហែលពាក់កណ្ដាលអេក្រង់)
            if (window.scrollY > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#D4AF37] text-slate-950 hover:bg-[#AA7C11] shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center border border-[#AA7C11]/40"
        >
            <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
    );
};