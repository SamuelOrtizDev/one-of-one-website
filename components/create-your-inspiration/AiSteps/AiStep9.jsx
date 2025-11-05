'use client'
import { motion } from "framer-motion";
import getRealStep from "@/lib/getRealStep";
import exclusions from "@/const/exclusions";

export function AiStep9({ setUserChoice, userChoice }) {
    const selectExclusions = (value) => {
        setUserChoice(prev => {
            const currentExclusions = prev.exclusions || [];

            // Si ya existe, lo removemos; si no, lo añadimos
            const isSelected = currentExclusions.includes(value);

            return {
                ...prev,
                exclusions: isSelected
                    ? currentExclusions.filter(item => item !== value)
                    : [...currentExclusions, value]
            };
        });
    };

    return (
        <motion.div
            initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col gap-4 text-[#072E3F] py-8"
        >
            <h3 className="font-bold text-2xl md:text-4xl">
                Let's make <span className="text-oBlue-200">Sure</span>
            </h3>
            <p>
                <strong>Step {getRealStep(9, userChoice)}.</strong> What should the background image AVOID? (Select all that apply)
            </p>
            <ul className="flex items-end gap-3 md:gap-6 pt-4 pb-6 md:py-6">
                {exclusions.map(({ label, value }) => {
                    const isSelected = userChoice.exclusions?.includes(label);

                    return (
                        <li key={value}>
                            <button
                                onClick={() => selectExclusions(label)}
                                className={`px-4 md:px-6 py-3 rounded-md bg-[#F3F3F3] border transition-all ${isSelected
                                        ? "border-oBlue-200 font-bold"
                                        : "cursor-pointer border-transparent"
                                    }`}
                            >
                                {label}
                            </button>
                        </li>
                    );
                })}
            </ul>
        </motion.div>
    );
}