'use client'
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AiStep6({ setUserChoice, userChoice }) {
    const [quotes, setQuotes] = useState([]);
    const [lastGeneration, setLastGeneration] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const { interests, hurdles, posterPurpose, quoteFeel, textType } = userChoice
    const promptObject = {
        interests,
        hurdles,
        posterPurpose,
        quoteFeel,
        textType
    }

    useEffect(() => {
        generateQuotes();
    }, []);

    const generateQuotes = async (userFeedback = null) => {
        setIsLoading(true);

        try {
            const res = await fetch('/api/generate-quotes', {
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
            const newQuotes = data.quotes.split('\n').filter(quote => quote.trim() !== '');

            setQuotes(newQuotes);

            setLastGeneration({
                quotes: newQuotes,
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
        const feedback = e.target.refineQuotesTextArea.value
        if (feedback.trim()) {
            generateQuotes(feedback);
            e.target.reset();
        }
    };

    const selectPosterQuote = (value) => {
        setUserChoice(prev => ({
            ...prev,
            posterQuote: value
        }))
    }


    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Let's give it <span className="text-blue-200">objective</span></h3>
            <p><strong>Step 6.</strong> Choose a quote</p>
            <p>take a look at this AI generated quotes based on your preferences. Whenever you are ready, choose one and continue</p>

            <ul className="flex items-end gap-3 md:gap-6 justify-around pt-4 pb-6 md:py-6">
                {
                    quotes.map(quote => (
                        <li key={quote}>
                            <button onClick={() => selectPosterQuote(quote)} className={`px-4 md:px-6 py-3 rounded-md bg-[#F3F3F3] border transition-all text-blue-200 ${userChoice.posterQuote === quote ? "border-blue-200 font-bold" : "cursor-pointer border-transparent"}`}>
                                {quote}
                            </button>
                        </li>
                    ))
                }
            </ul>

            <form onSubmit={handleRefine} className="pb-8 md:pb-0 gap-6 md:gap-16 md:mt-4">
                <textarea disabled={isLoading} name="refineQuotesTextArea" placeholder="What are your expectations" className="resize-none bg-[#F8F8F8] rounded-lg p-4 outline-none border border-[#F8F8F8] focus:border-[#C9C9C9] w-full max-w-xl min-h-[100px]" />
                <button>Refine quotes</button>
            </form>
        </motion.div>
    )
}