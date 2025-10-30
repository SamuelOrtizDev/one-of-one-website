'use client'
import { motion } from "framer-motion"
import { fadeInUp } from "@/const/animation"
import { PrimaryCTA } from "@/components/common/Buttons"
import SectionLayout from "@/components/common/SectionLayout";
import Image from "next/image";
import dave from "./assets/dave.webp"

export function CuriousAboutCourse() {
    return (
        <SectionLayout noPadding containerClasses={"bg-gradient-to-t md:bg-gradient-to-r from-[#001548] via-black to-black"} className={"flex flex-col-reverse md:flex-row items-center justify-between gap-12"}>
            <div className="flex flex-col items-center text-center md:text-left md:items-start gap-4 text-white md:w-[50%] py-12 -mt-32 md:mt-0">
                <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl">Curious About the <span className="px-2 py-2 text-white font-bold bg-oBlue-200">Course?</span></motion.h2>
                <motion.p {...fadeInUp}>Enterperneurial Masterclas</motion.p>
                <motion.span {...fadeInUp} className="mt-4">
                    <PrimaryCTA label={"See it for youself"} />
                </motion.span>
            </div>

            <motion.picture {...fadeInUp}>
                <Image src={dave} alt="dave's photo" className=" max-w-[500px] [mask-image:_linear-gradient(black_30%,_transparent)] md:[mask-image:_linear-gradient(black_80%,_transparent)]"/>
            </motion.picture>
        </SectionLayout>
    )
}