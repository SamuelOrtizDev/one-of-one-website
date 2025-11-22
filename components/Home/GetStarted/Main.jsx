'use client'
import { motion } from "framer-motion"
import { fadeInUp } from "@/const/animation"
import SectionLayout from "@/components/common/SectionLayout"
import { PrimaryCTA } from "@/components/common/Buttons"
import getStartedBg from "./assets/getStartedBg.webp"

export function GetStarted() {
    return (
        <SectionLayout style={{backgroundImage: `url(${getStartedBg.src})`}} className={"flex flex-col items-center text-center gap-8 text-white"}>
            <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl">Get Started <span className="px-2 py-2 text-white font-bold bg-oBlue-200">Today.</span></motion.h2>
            <motion.p {...fadeInUp}>Your dream poster, just five minutes away</motion.p>
            <motion.span {...fadeInUp} className="mt-4">
                <PrimaryCTA variant="white" label={"Begin Your Creative Journey"} trackEvent="Get Started CTA Section"/>
            </motion.span>
        </SectionLayout>
    )
}