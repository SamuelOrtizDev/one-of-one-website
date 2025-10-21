'use client'
import { motion } from "framer-motion";
import interests from "@/const/interests";

export function AiStep1({ setUserChoice, userChoice }) {

    const selectInterests = (value) => {
        setUserChoice(prev => {
            const currentInterests = prev.interests || [];

            const isSelected = currentInterests.includes(value);

            return {
                ...prev,
                interests: isSelected
                    ? currentInterests.filter(item => item !== value)
                    : [...currentInterests, value]
            };
        });
    };

    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Let's Meet <span className="text-blue-200">Each Other</span></h3>
            <p><strong>Step 1.</strong> Tell us about your interests</p>
            <p>Choose as many as you wish!</p>

            <ul className="flex items-end gap-3 md:gap-6 pt-4 pb-6 md:py-6 flex-wrap">
                {
                    interests.map(({ label, value }) => {
                        const isSelected = userChoice.interests?.includes(label);
                        return (
                            <li key={value}>
                                <button onClick={() => selectInterests(label)} className={`px-4 md:px-6 py-3 rounded-md bg-[#F3F3F3] border transition-all text-blue-200 ${isSelected ? "border-blue-200 font-bold" : "cursor-pointer border-transparent"}`}>
                                    {label}
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </motion.div>
    )
}