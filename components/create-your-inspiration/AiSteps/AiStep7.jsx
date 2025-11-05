'use client'
import { motion } from "framer-motion";
import colorPalettes from "@/const/colorPalettes";
import getRealStep from "@/lib/getRealStep";

export function AiStep7({ setUserChoice, userChoice }) {

    const selectColorPalette = (value) => {
        setUserChoice(prev => ({
            ...prev,
            colorPalette: value
        }))
    }

    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Let's give it <span className="text-oBlue-200">Color</span></h3>
            <p><strong>Step {getRealStep(7, userChoice)}.</strong> Choose your color palette:</p>

            <ul className="flex items-end gap-3 md:gap-6 pt-4 pb-6 md:py-6 flex-wrap">
                {
                    colorPalettes.map(({ label, value }) => (
                        <li key={value}>
                            <button onClick={() => selectColorPalette(value)} className={`px-4 md:px-6 py-3 rounded-md bg-[#F3F3F3] border transition-all ${userChoice.colorPalette === value ? "border-oBlue-200 font-bold" : "cursor-pointer border-transparent"}`}>
                                {label}
                            </button>
                        </li>
                    ))
                }
            </ul>
        </motion.div>
    )
}