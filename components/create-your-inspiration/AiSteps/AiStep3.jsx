'use client'
import { motion } from "framer-motion";
import posterPurposes from "@/const/posterPurposes";

export function AiStep3({ setUserChoice, userChoice }) {

    const handlePosterPurpose = (value) => {
        setUserChoice(prev => ({
            ...prev,
            posterPurpose: value
        }));
    };

    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Let's <span className="text-oBlue-200">Concise</span></h3>
            <p><strong>Step 3.</strong> Tell us the purpose of your poster</p>

            <ul className="flex items-end gap-3 md:gap-6 pt-4 pb-6 md:py-6">
                {
                    posterPurposes.map(({ label, value }) => (
                        <li key={value}>
                            <button onClick={() => handlePosterPurpose(label)} className={`px-4 md:px-6 py-3 rounded-md bg-[#F3F3F3] border transition-all ${userChoice.posterPurpose === label ? "border-oBlue-200 font-bold" : "cursor-pointer border-transparent"}`}>
                                {label}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </motion.div>
    )
}