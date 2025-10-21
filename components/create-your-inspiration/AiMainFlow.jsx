'use client'
import { useState, useMemo, useCallback, useEffect } from "react";
import { ArrowRight, X } from "../common/Icons";
import { AnimatePresence, motion } from "framer-motion";
import sign from "./assets/sign.svg"
import Image from "next/image";
import Link from "next/link";
import { AiStep1 } from "./AiSteps/AiStep1";
import { AiStep2 } from "./AiSteps/AiStep2";
import { AiStep3 } from "./AiSteps/AiStep3";
import { AiStep4 } from "./AiSteps/AiStep4";
import { AiStep5 } from "./AiSteps/AiStep5";
import { AiQuoteStep6 } from "./AiSteps/AiQuoteStep6";
import { AiStep6 } from "./AiSteps/AiStep6";
import { AiStep7 } from "./AiSteps/AiStep7";
import { AiStep8 } from "./AiSteps/AiStep8";
import { AiStep9 } from "./AiSteps/AiStep9";
import { AiImageStep } from "./AiSteps/AiImageStep";
import { AiOrientation } from "./AiSteps/AiOrientation";
import { AiPaperType } from "./AiSteps/AiPaperType";
import { FinalStep } from "./AiSteps/FinalStep";

export function AiMainFlow() {

    const PHASES = {
        INTERESTS: 'interests',
        HURDLES: 'hurdles',
        PURPOSE: 'purpose',
        FEEL: 'feel',
        TEXT_TYPE: 'textType',
        QUOTE: 'quote',
        ART_STYLE: 'artStyle',
        COLOR_PALETTE: "colorPalette",
        FEELING: 'feeling',
        EXCLUSIONS: 'exclusions',
        DIMENSIONS: 'dimensions',
        IMAGES: "images",
        PAPER_TYPE: "paper_type",
        FINAL: "final"
    }

    const [currentPhase, setCurrentPhase] = useState(PHASES.INTERESTS)
    const [userChoice, setUserChoice] = useState({
        interests: [],
        hurdles: null,
        posterPurpose: null,
        quoteFeel: null,
        textType: null,
        posterQuote: "",
        artStyle: null,
        colorPalette: null,
        feeling: null,
        exclusions: [],
        orientation: null,
        size: null,
        image: null,
        material: null,
        frame: false,
        frameColor: null
    })
    const isFinalStep = currentPhase === PHASES.FINAL

    const getPhaseFlow = useCallback(() => {
        const baseFlow = [
            PHASES.INTERESTS,
            PHASES.HURDLES,
            PHASES.PURPOSE,
            PHASES.FEEL,
            PHASES.TEXT_TYPE
        ]

        if (userChoice.textType !== "Custom Quote") {
            baseFlow.push(PHASES.QUOTE)
        }

        baseFlow.push(
            PHASES.ART_STYLE,
            PHASES.COLOR_PALETTE,
            PHASES.FEELING,
            PHASES.EXCLUSIONS,
            PHASES.DIMENSIONS,
            PHASES.IMAGES,
            PHASES.PAPER_TYPE,
            PHASES.FINAL
        )

        return baseFlow
    }, [userChoice.textType])

    const phaseFlow = useMemo(() => getPhaseFlow(), [getPhaseFlow])
    const currentStepNumber = phaseFlow.indexOf(currentPhase) + 1
    const totalSteps = phaseFlow.length

    const isStepValid = useMemo(() => {
        switch (currentPhase) {
            case PHASES.INTERESTS:
                return userChoice.interests.length !== 0
            case PHASES.HURDLES:
                return userChoice.hurdles !== null
            case PHASES.PURPOSE:
                return userChoice.posterPurpose !== null
            case PHASES.FEEL:
                return userChoice.quoteFeel !== null
            case PHASES.TEXT_TYPE: {
                if (userChoice.textType === "Custom Quote") {
                    return userChoice.posterQuote.trim().length > 10
                }
                return userChoice.textType !== null
            }
            case PHASES.QUOTE:
                return userChoice.posterQuote.trim() !== ""
            case PHASES.ART_STYLE:
                return userChoice.artStyle !== null
            case PHASES.COLOR_PALETTE:
                return userChoice.colorPalette !== null
            case PHASES.FEELING:
                return userChoice.feeling !== null
            case PHASES.EXCLUSIONS:
                return userChoice.exclusions.length !== 0
            case PHASES.DIMENSIONS:
                return userChoice.orientation !== null && userChoice.size !== null
            case PHASES.IMAGES:
                return userChoice.image !== null
            case PHASES.PAPER_TYPE:
                return (
                    userChoice.material !== null &&
                    (!userChoice.frame || userChoice.frameColor !== null)
                );
            default:
                return false
        }
    }, [currentPhase, userChoice])

    const nextStep = () => {
        if (!isStepValid) return

        const currentIndex = phaseFlow.indexOf(currentPhase)
        if (currentIndex < phaseFlow.length - 1) {
            setCurrentPhase(phaseFlow[currentIndex + 1])
        } else {
            setIsFinalStep(true)
        }
    }

    const previousStep = () => {
        const currentIndex = phaseFlow.indexOf(currentPhase)
        if (currentIndex > 0) {
            setCurrentPhase(phaseFlow[currentIndex - 1])
        }
    }

    useEffect(() => {
        console.log(userChoice);
    }, [userChoice])

    return (
        <div className={`transition-all md:bg-gradient-to-b ${isFinalStep ? "from-[#FFE9CA] to-[#FFA943]" : "from-white to-[#76B8D6]"} bg-cover bg-center`}>
            <section className='min-h-screen text-blue-200 mx-auto max-w-[1600px] px-7 md:px-[72px] py-12 md:py-20'>
                <div className={`rounded-2xl bg-white transition-all relative mt-12 ${isFinalStep ? "w-fit mx-auto md:px-12 py-2 md:py-8" : "w-full md:p-8"}`}>
                    {
                        !isFinalStep &&
                        <Link href="/" className="absolute left-0 md:left-4 -top-16 md:-top-10 flex items-center gap-1 transition-all hover:underline hover:text-red-500">
                            <X />
                            Cancel Creation
                        </Link>
                    }

                    <AnimatePresence>
                        <div>
                            {currentPhase === PHASES.INTERESTS && (
                                <AiStep1 userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}

                            {currentPhase === PHASES.HURDLES && (
                                <AiStep2 userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}

                            {currentPhase === PHASES.PURPOSE && (
                                <AiStep3 userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}

                            {currentPhase === PHASES.FEEL && (
                                <AiStep4 userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}

                            {currentPhase === PHASES.TEXT_TYPE && (
                                <AiStep5 userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}

                            {currentPhase === PHASES.QUOTE && (
                                <AiQuoteStep6 userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}

                            {currentPhase === PHASES.ART_STYLE && (
                                <AiStep6 userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}

                            {currentPhase === PHASES.COLOR_PALETTE && (
                                <AiStep7 userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}
                            {currentPhase === PHASES.FEELING && (
                                <AiStep8 userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}
                            {currentPhase === PHASES.EXCLUSIONS && (
                                <AiStep9 userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}
                            {currentPhase === PHASES.DIMENSIONS && (
                                <AiOrientation userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}
                            {currentPhase === PHASES.IMAGES && (
                                <AiImageStep userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}
                            {currentPhase === PHASES.PAPER_TYPE && (
                                <AiPaperType userChoice={userChoice} setUserChoice={setUserChoice} />
                            )}
                            {currentPhase === PHASES.FINAL && (
                                <FinalStep userChoice={userChoice} previousStep={previousStep} />
                            )}
                        </div>
                    </AnimatePresence>

                    {/* Control Buttons */}
                    {
                        !isFinalStep &&
                        <span className="flex items-center justify-between md:justify-start gap-2">
                            {
                                (currentStepNumber !== 1) &&
                                <button onClick={previousStep} className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 md:px-8 px-4 py-2 bg-gradient-to-r from-blue-200 to-blue-100 group flex flex-row-reverse items-center gap-4 text-white h-fit">
                                    Back
                                    <span className="group-hover:-translate-x-1 transition-transform rotate-180">
                                        <ArrowRight />
                                    </span>
                                </button>
                            }
                            {
                                (currentStepNumber !== totalSteps) &&
                                <button disabled={!isStepValid} onClick={nextStep} className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 md:px-8 px-4 py-2 bg-gradient-to-r from-oOrange-100 to-oOrange-200 group flex items-center gap-4 text-white h-fit disabled:saturate-0 disabled:cursor-not-allowed">
                                    Continue
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        <ArrowRight />
                                    </span>
                                </button>
                            }
                            {
                                (currentStepNumber === totalSteps) &&
                                <button disabled={!isStepValid} onClick={() => setIsFinalStep(true)} className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 md:px-8 px-4 py-2 bg-gradient-to-r from-oOrange-100 to-oOrange-200 group flex items-center gap-4 text-white h-fit disabled:saturate-0 disabled:cursor-not-allowed">
                                    Continue to final
                                    <span className="group-hover:translate-x-1 transition-transform">
                                        <ArrowRight />
                                    </span>
                                </button>
                            }
                        </span>
                    }

                    {
                        !isFinalStep &&
                        <Image src={sign} alt="" className="w-full max-w-[50px] absolute right-2 top-2" />
                    }
                </div>
            </section >
        </div >
    )
}