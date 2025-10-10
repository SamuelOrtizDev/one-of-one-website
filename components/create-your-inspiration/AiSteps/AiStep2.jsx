'use client'
import { motion } from "framer-motion";

export function AiStep2({ setUserChoice, userChoice }) {

    const handleHurdles = (e) => {
        setUserChoice(prev => ({
            ...prev,
            hurdles: e.target.value
        }));
    };

    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Let's <span className="text-blue-200">Empathize</span></h3>
            <p><strong>Step 2.</strong> Tell us about your hurdles</p>

            <div className="pb-8 md:pb-0 gap-6 md:gap-16 md:mt-4">
                <textarea value={userChoice.hurdles} onChange={handleHurdles} name="hurdles" placeholder="What it's tough for you..." id="hurdles" className="resize-none bg-[#F8F8F8] rounded-lg p-4 outline-none border border-[#F8F8F8] focus:border-[#C9C9C9] w-full max-w-xl min-h-[100px]" />
            </div>
        </motion.div>
    )
}