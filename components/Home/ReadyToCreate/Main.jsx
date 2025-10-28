'use client'
import { motion } from "framer-motion";
import { fadeInUp } from "@/const/animation";
import { PrimaryCTA } from "@/components/common/Buttons";
import SectionLayout from "@/components/common/SectionLayout";
import readyToCreateBg from "./assets/readyToCreateBg.webp"

export function ReadyToCreate() {
    return (
        <SectionLayout className={"flex flex-col gap-6 text-white"} containerClasses={"md:py-20"} style={{ backgroundImage: `url(${readyToCreateBg.src})` }}>
            <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl">Ready to <br /> <strong className="text-oBlue-100 font-bold">Create Yours?</strong></motion.h2>
            <motion.p {...fadeInUp}>Materialize your inspiration</motion.p>
            <motion.span {...fadeInUp}>
                <PrimaryCTA label={"Try It For Yourself"} />
            </motion.span>
        </SectionLayout>
    )
}