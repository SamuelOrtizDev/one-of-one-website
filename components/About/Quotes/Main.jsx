'use client'
import { motion } from "framer-motion";
import { fadeInUp } from "@/const/animation";
import SectionLayout from "@/components/common/SectionLayout";
import Image from "next/image";
import quotes from "./assets/quotes.svg"

export function Quotes() {
    return (
        <SectionLayout containerClasses={"bg-[#28211E]"} className={"text-center text-wrap text-xl md:text-2xl text-gold-100 relative"}>
            <motion.h2 {...fadeInUp}>OneOfOne exists because your best moments deserve to shine. You deserve art that lasts, is crafted with care, and built to inspire forever.</motion.h2>
            <Image src={quotes} alt="" className="absolute top-6 md:top-16 left-4 w-[30px] md:w-[60px]"/>
            <Image src={quotes} alt="" className="absolute bottom-6 md:bottom-16 right-4 w-[30px] md:w-[60px] rotate-180"/>
        </SectionLayout>
    )
}