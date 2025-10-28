'use client'
import { motion } from "framer-motion";
import { fadeInUp } from "@/const/animation";
import SectionLayout from "@/components/common/SectionLayout";
import grayQuotes from './assets/grayQuotes.svg'
import bg from "./assets/testimonialBg.webp"
import Image from "next/image";
import { Carousel } from "./Carousel";

export function UniqueStories() {
    return (
        <SectionLayout style={{backgroundImage: `url(${bg.src})`}}>
            <span className="flex flex-col w-fit mx-auto items-center text-center gap-4 md:gap-6 relative">
                <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl">Unique Stories, <span className="px-2 py-2 text-white font-bold bg-oBlue-200">Turned into Art.</span></motion.h2>
                <motion.p {...fadeInUp}>What our customers had to say.</motion.p>
                
                <Image src={grayQuotes} alt="" className="absolute -top-6 -right-24 w-full max-w-[80px]"/>
                <Image src={grayQuotes} alt="" className="absolute -top-6 -left-24 rotate-180 w-full max-w-[80px]"/>
            </span>

            <Carousel/>
        </SectionLayout>
    )
}