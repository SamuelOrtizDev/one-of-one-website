'use client'
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { X } from "../Icons"
import { PrimaryCTA } from "../Buttons"
import popUpImage from "./assets/PopUpImage.webp"
import girl from "./assets/girl.webp"
import Image from "next/image"

export function PopUp() {

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const popupShown = localStorage.getItem('OneOfOne-popupShown');

        if (!popupShown) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        localStorage.setItem('OneOfOne-popupShown', 'true');
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0 bg-[#002231]/40 z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 p-7"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl w-full gap-6 mx-auto relative flex flex-col md:flex-row items-center justify-betweem">
                            <button
                                onClick={handleClose}
                                className="text-oBlue-200 hover:text-red-500 transition-colors cursor-pointer absolute right-2 top-2"
                            >
                                <X />
                            </button>

                            <picture className="relative">
                                <Image src={popUpImage} alt="popUpBackgroundImage" className="w-full md:max-w-[600px] rounded-xl" />
                                <Image src={girl} alt="girl image" className="w-full max-w-[150px] md:max-w-[180px] absolute bottom-0 left-[25%]" />
                            </picture>

                            <span className="flex flex-col items-center text-center gap-6">
                                <h4 className="text-xl md:text-2xl">If you're <strong>struggling</strong> to find a gift as unique as their story...</h4>
                                <PrimaryCTA label={'Gift a Memory'} />
                            </span>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}