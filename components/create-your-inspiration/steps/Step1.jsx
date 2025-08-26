'use client'
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

export function Step1({ setUserChoice, userChoice }) {

    const handleQuoteChange = (e) => {
        setUserChoice(prev => ({
            ...prev,
            quote: e.target.value
        }));
    };

    return (
        <div className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Let's Create Something <span className="text-blue-200">Unique</span></h3>
            <p><strong>Step 1.</strong> Choose your quote</p>

            <div className="flex flex-col md:flex-row justify-between pb-8 md:pb-0 gap-6 md:gap-16 md:mt-4">
                <textarea value={userChoice.quote} onChange={handleQuoteChange} name="quote" placeholder="Make it stand" id="quote" className="resize-none bg-[#F8F8F8] rounded-lg p-4 outline-none border border-[#F8F8F8] focus:border-[#C9C9C9] w-full max-w-xl min-h-[100px]" />

                <span className="flex flex-col gap-4 w-fit">
                    <p className="text-sm md:text-base"><strong className="text-blue-200">Not sure how?</strong> here you got some prompts to make you think:</p>

                    <AnimatedQuotes />
                </span>
            </div>
        </div>
    )
}

function AnimatedQuotes() {

    const questions = [
        "What would you tell yourself during your darkest moment to give you strength and keep you moving forward?",
        "What's that quality about yourself that you admire most, and how would you express it in a phrase that inspires you daily?",
        "What dream or goal excites you so much that you'd do anything to achieve it, and how would you capture that in powerful words?",
        "What's the best advice you've ever received in your life, and how would you rephrase it in your own words?",
        "What version of yourself do you want to become in a year, and what phrase would help you remember that goal every single day?"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [questions.length]);
    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut"
                }}
                className="flex justify-center"
            >
                <strong className="font-bold italic md:text-lg">
                    "{questions[currentIndex]}"
                </strong>
            </motion.div>
        </AnimatePresence>
    )
}