'use client'
import { motion } from "framer-motion";

export function AiStep1({ setUserChoice, userChoice }) {

    const handleInterests = (e) => {
        setUserChoice(prev => ({
            ...prev,
            interests: e.target.value
        }));
    };

    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Let's Meet <span className="text-blue-200">Each Other</span></h3>
            <p><strong>Step 1.</strong> Tell us about your interests</p>

            <div className="pb-8 md:pb-0 gap-6 md:gap-16 md:mt-4">
                <textarea value={userChoice.interests} onChange={handleInterests} name="interests" placeholder="What you like the most..." id="interests" className="resize-none bg-[#F8F8F8] rounded-lg p-4 outline-none border border-[#F8F8F8] focus:border-[#C9C9C9] w-full max-w-xl min-h-[100px]" />
            </div>
        </motion.div>
    )
}