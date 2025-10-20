'use client'
import { motion, AnimatePresence } from "framer-motion"
import { CheckIcon } from "@/components/common/Icons"
import paperTypes from "@/const/paperTypes"
import getRealStep from "@/lib/getRealStep"
import frameColors from "@/const/frameColors"

export function AiPaperType({ setUserChoice, userChoice }) {

    const selectMaterial = (value) => {
        setUserChoice(prev => ({
            ...prev,
            material: value
        }))
    }

    const selectFrameColor = (value) => {
        setUserChoice(prev => ({
            ...prev,
            frameColor: value
        }))
    }

    const handleFrame = (e) => {
        setUserChoice(prev => ({
            ...prev,
            frame: e.target.checked
        }))
    }

    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">From The Screen <span className="text-blue-200">To Your Hands</span></h3>
            <p><strong>Step {getRealStep(11, userChoice)}</strong> Materialize your inspiration</p>

            <ul className="flex items-end gap-3 md:gap-6 pt-4 pb-6 md:py-6 border-b border-blue-100/40">
                {
                    paperTypes.map(({ label, value }) => (
                        <li key={value}>
                            <button onClick={() => selectMaterial(value)} className={`px-4 md:px-6 py-3 rounded-md bg-[#F3F3F3] border transition-all text-blue-200 ${userChoice.material === value ? "border-blue-200 font-bold" : "cursor-pointer border-transparent"}`}>
                                {label}
                            </button>
                        </li>
                    ))
                }
            </ul>

            <label className="flex items-center gap-2 py-4 md:py-6 w-fit">
                <input checked={userChoice.frame} onChange={handleFrame} type="checkbox" className="size-6 border-2 border-blue-200 rounded-xs focus:ring-blue-200 focus:ring-2 accent-blue-200" />
                <p>Add a Frame</p>
            </label>

            <AnimatePresence>
                {
                    userChoice.frame &&
                    <motion.span
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className=" flex flex-col gap-4 -mt-4 mb-4"
                    >
                        Choose your frame color:
                        <ul className="flex items-end gap-3 md:gap-6">
                            {
                                frameColors.map(({ color, value }) => (
                                    <li key={color}>
                                        <button onClick={() => selectFrameColor(color)} style={{ backgroundColor: value }} className={`aspect-square grid place-items-center size-8 rounded-lg ${userChoice.frameColor === color ? "ring-2 ring-blue-200 ring-offset-2 " : "hover:shadow-md transition-all cursor-pointer"} ${color === "White" ? "border border-blue-200" : ""}`}>
                                            {
                                                userChoice.frameColor === color && <span className={color === "White" ? "text-blue-200" : "text-white"}><CheckIcon /></span>
                                            }
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </motion.span>
                }
            </AnimatePresence>
        </motion.div>
    )
}