'use client'
import SectionLayout from "../common/SectionLayout";
import { useState, useMemo, useEffect } from "react";
import { ArrowRight } from "../common/Icons";
import { AnimatePresence, motion } from "framer-motion";
import { Step1 } from "./steps/Step1";
import sign from "./assets/sign.svg"
import Image from "next/image";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { Step4 } from "./steps/Step4";

export function MainFlow() {

    const totalSteps = 5
    const initialStep = 1
    const [step, setStep] = useState(initialStep)
    const [userChoice, setUserChoice] = useState({
        quote: "",
        imageUrl: null,
        orientation: "",
        quotePosition: "",
        font: "",
        material: "",
        size: "",
        frame: false
    })

    const isStepValid = useMemo(() => {
        switch (step) {
            case 1: return userChoice.quote.trim() !== "";
            case 2: return userChoice.imageUrl !== null;
            case 3: return userChoice.orientation.trim() !== "" && userChoice.quotePosition.trim() !== "";
            case 4: return userChoice.font.trim() !== "";
            case 5: return userChoice.material.trim() !== "" && userChoice.size.trim() !== "";
            default: return false;
        }
    }, [step, userChoice]);

    const nextStep = () => {
        if (isStepValid) setStep(step + 1)
    }

    const previuosStep = () => {
        setStep(step - 1)
    }

    // useEffect(() => {
    //     console.log(userChoice);
    // }, [userChoice])

    return (
        <div className="bg-white md:bg-gradient-to-b from-white to-[#76B8D6] bg-cover bg-center">
            <section className='min-h-screen text-blue-200 mx-auto max-w-[1600px] px-7 md:px-[72px] py-12 md:py-20'>
                <div className="rounded-2xl bg-white md:p-8 relative mt-12">

                    {/* Simple Steps Slider */}
                    <div className="relative flex flex-col gap-2 max-w-[200px]">
                        <div className="h-2 bg-gray-200 rounded-full relative">
                            <motion.div
                                className="h-full bg-blue-200 rounded-full"
                                animate={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                            />
                        </div>

                        <div className="flex justify-between absolute -top-1 w-full">
                            {Array.from({ length: totalSteps }, (_, index) => (
                                <motion.div
                                    key={index + 1}
                                    className={`w-4 h-4 rounded-full ${(index + 1) <= step ? 'bg-orange-500' : 'bg-gray-300'
                                        }`}
                                    animate={{ backgroundColor: (index + 1) <= step ? '#F97316' : '#D1D5DB' }}
                                    transition={{ duration: 0.3 }}
                                />
                            ))}
                        </div>

                        <span>
                            <p><strong>{step}</strong> of {totalSteps}</p>
                        </span>
                    </div>

                    <AnimatePresence>
                        <motion.div
                            initial={{ top: 100, opacity: 0 }}
                            animate={{ top: 0, opacity: 1 }}
                            exit={{ top: 100, opacity: 0 }}
                            transition={{ duration: 0.4 }}>

                            {step === 1 && <Step1 userChoice={userChoice} setUserChoice={setUserChoice} />}
                            {step === 2 && <Step2 userChoice={userChoice} setUserChoice={setUserChoice} />}
                            {step === 3 && <Step3 userChoice={userChoice} setUserChoice={setUserChoice} />}
                            {step === 4 && <Step4 userChoice={userChoice} setUserChoice={setUserChoice} />}

                        </motion.div>
                    </AnimatePresence>

                    {/* Control Buttons */}
                    <span className="flex items-center justify-between md:justify-start gap-2">
                        {
                            step != initialStep &&
                            <button onClick={previuosStep} className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 md:px-8 px-4 py-2 bg-gradient-to-r from-blue-200 to-blue-100 group flex flex-row-reverse items-center gap-4 text-white h-fit">
                                Back
                                <span className="group-hover:-translate-x-1 transition-transform rotate-180">
                                    <ArrowRight />
                                </span>
                            </button>
                        }

                        {
                            step != totalSteps &&
                            <button disabled={!isStepValid} onClick={nextStep} className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 md:px-8 px-4 py-2 bg-gradient-to-r from-oOrange-100 to-oOrange-200 group flex items-center gap-4 text-white h-fit disabled:saturate-0 disabled:cursor-not-allowed">
                                Continue
                                <span className="group-hover:translate-x-1 transition-transform">
                                    <ArrowRight />
                                </span>
                            </button>
                        }
                    </span>

                    <Image src={sign} alt="" className="w-full max-w-[50px] absolute right-2 top-2" />
                </div>
            </section>
        </div>
    )
}