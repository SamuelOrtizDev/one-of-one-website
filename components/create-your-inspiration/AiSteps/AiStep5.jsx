'use client'
import { motion, AnimatePresence } from "framer-motion";
import textTypes from "@/const/textTypes";
import { useState } from "react";

export function AiStep5({ setUserChoice, userChoice }) {
    const [isPersonalQuote, setIsPersonalQuote] = useState(false)

    const selectTextType = (value) => {
        setIsPersonalQuote(false)
        setUserChoice(prev => ({
            ...prev,
            textType: value
        }))
    }

    const handlePersonalQuote = (e) => {
        setUserChoice(prev => ({
            ...prev,
            posterQuote: e.target.value
        }))
    }

    const handlePersonalMessageClick = () => {
        setIsPersonalQuote(true)
        setUserChoice(prev => ({
            ...prev,
            textType: "Custom Quote"
        }))
    }

    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Let's give it <span className="text-blue-200">objective</span></h3>
            <p><strong>Step 5.</strong> Choose a text type</p>

            <ul className="flex items-end gap-3 md:gap-6 pt-4 pb-6 md:py-6">
                {
                    textTypes.map(({ label, value }) => (
                        <li key={value}>
                            <button onClick={() => selectTextType(label)} className={`px-4 md:px-6 py-3 rounded-md bg-[#F3F3F3] border transition-all text-blue-200 ${userChoice.textType === label ? "border-blue-200 font-bold" : "cursor-pointer border-transparent"}`}>
                                {label}
                            </button>
                        </li>
                    ))
                }
                <li>
                    <button onClick={handlePersonalMessageClick} className={`px-4 md:px-6 py-3 rounded-md bg-[#F3F3F3] border transition-all text-blue-200 ${isPersonalQuote ? "border-blue-200 font-bold" : "cursor-pointer border-transparent"}`}>
                        Personal Message
                    </button>
                </li>
            </ul>

            <AnimatePresence>
                {
                    isPersonalQuote &&
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="pb-8 md:pb-0 gap-6 md:gap-16 md:mt-4">
                        <textarea value={userChoice.posterQuote} onChange={handlePersonalQuote} name="personal_quote" placeholder="Type your quote..." id="personal_quote" className="resize-none bg-[#F8F8F8] rounded-lg p-4 outline-none border border-[#F8F8F8] focus:border-[#C9C9C9] w-full max-w-xl min-h-[100px]" />
                    </motion.div>
                }
            </AnimatePresence>
        </motion.div>
    )
}