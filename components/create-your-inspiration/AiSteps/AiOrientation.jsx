'use client'
import SizeSelect from "@/components/common/SizeSelect"
import getRealStep from "@/lib/getRealStep"
import { AnimatePresence, motion } from "framer-motion"

export function AiOrientation({ setUserChoice, userChoice }) {

    const orientationOptions = [
        {
            label: "Portrait",
            value: "portrait",
        },
        {
            label: "Landscape",
            value: "landscape",
        },
    ]

    const selectOrientation = (value) => {
        setUserChoice(prev => ({
            ...prev,
            orientation: value
        }))
    }

    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Give It A <span className="text-blue-200">Twist</span></h3>
            <p><strong>Step {getRealStep(10, userChoice)}.</strong> Choose your orientation</p>

            <ul className="flex items-end gap-3 md:gap-6 md:mb-4">
                {
                    orientationOptions.map(({ label, value }) => (
                        <li className="relative group" key={value}>
                            <button onClick={() => selectOrientation(value)} className={`${userChoice.orientation === value ? "border-blue-200 shadow-lg shadow-blue-100/60 font-bold text-blue-200" : "cursor-pointer transition-all shadow-md hover:shadow-lg hover:-translate-y-1 border-blue-200/20"} border-2 grid place-items-center rounded-xl ${value === "portrait" ? "aspect-[3/4] w-[100px] md:w-[130px]" : value === 'landscape' ? "aspect-[4/3] h-[100px] md:h-[130px]" : 'rounded-full aspect-square w-[100px] md:w-[130px]'}`}>
                                {label}
                            </button>
                            {
                                value === 'best-fit' &&
                                <small className="hidden md:block opacity-0 w-[300px] left-0 group-hover:opacity-100 absolute -top-24 group-hover:-translate-y-2 px-4 py-2 rounded-md bg-blue-200/10">we will choose the optimal way to position your quote so that it aesthetically fits with your image. Don't worry, you will receive an image confirmation email before we print!</small>
                            }
                        </li>
                    ))
                }
            </ul>
            {
                userChoice.orientation &&
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="flex flex-row md:flex-row items-center gap-4">
                        <p>Pick your favorite size:</p>
                        <SizeSelect setUserChoice={setUserChoice} userChoice={userChoice} />
                    </motion.div>
                </AnimatePresence>
            }
        </motion.div>
    )
}