'use client'
import { Loader } from "@/components/common/Icons";
import getRealStep from "@/lib/getRealStep";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AiImageStep({ setUserChoice, userChoice }) {
    const [images, setImages] = useState([]);
    const [lastGeneration, setLastGeneration] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { artStyle, colorPalette, feeling, exclusions } = userChoice
    const promptObject = {
        artStyle,
        colorPalette,
        feeling,
        exclusions
    }

    // useEffect(() => {
    //     if (userChoice.image === null|| !lastGeneration) {
    //         generateImages();
    //     }
    // }, []);

    const generateImages = async (userFeedback = null) => {
        setIsLoading(true);

        try {
            const res = await fetch('/api/generate-images', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userInput: promptObject,
                    lastGeneration,
                    userFeedback
                })
            });

            const data = await res.json();
            const newImages = data.images.split('\n').filter(quote => quote.trim() !== '');

            setImages(newImages);

            setLastGeneration({
                images: newImages,
                feedback: userFeedback
            });

        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRefine = (e) => {
        e.preventDefault()
        setUserChoice(prev => ({
            ...prev,
            image: null
        }))
        const feedback = e.target.refineImagesTextArea.value
        if (feedback.trim()) {
            generateImages(feedback);
            e.target.reset();
        }
    };

    const selectImage = (value) => {
        setUserChoice(prev => ({
            ...prev,
            image: value
        }))
    }


    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Let's give it <span className="text-blue-200">Shape</span></h3>
            <p><strong>Step {getRealStep(10, userChoice)}.</strong> Choose an image with the help of AI!</p>
            <p>take a look at this AI generated images based on your preferences. Whenever you are ready, choose one and continue</p>

            {
                isLoading ?
                    <div className="grid place-items-center">
                        <span className="animate-spin">
                            <Loader />
                        </span>
                    </div>
                    :
                    <ul className="flex items-end gap-3 md:gap-6 pt-4 pb-6 flex-wrap">
                        {
                            images.map(quote => (
                                <li key={quote}>
                                    <button onClick={() => selectImage(quote)} className={`px-4 md:px-6 py-3 rounded-md bg-[#F3F3F3] border transition-all text-blue-200 ${userChoice.posterQuote === quote ? "border-blue-200 font-bold" : "cursor-pointer border-transparent"}`}>
                                        {quote}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
            }

            <p>You can still iterate from you results!! use this chat to let the AI what you want</p>
            <form onSubmit={handleRefine} className={`pb-8 md:pb-0 gap-2 md:gap-4 md:mt-4 flex md:items-end flex-col md:flex-row transition-all ${isLoading ? "opacity-0" : "opacity-100"}`}>
                <textarea disabled={isLoading} name="refineImagesTextArea" placeholder="Make them shorter..." className="resize-none bg-[#F8F8F8] rounded-lg p-4 outline-none border border-[#F8F8F8] focus:border-[#C9C9C9] w-full max-w-xl" />
                <button disabled={isLoading} className="px-4 py-2 rounded-md bg-oOrange-200 text-white font-bold w-fit h-fit cursor-pointer">Refine images</button>
            </form>
        </motion.div>
    )
}