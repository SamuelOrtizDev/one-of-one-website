'use client'
import { motion } from "framer-motion";
import { fadeInUp } from "@/const/animation";
import SectionLayout from "@/components/common/SectionLayout";
import { QuestionsForm } from "./QuestionsForm";
import Image from "next/image";
import formBg from "./assets/formBg.webp"

export function StillHaveQuestions({isContactPage = false}) {

    return (
        <SectionLayout noPadding containerClasses={"bg-gradient-to-b from-obsidian-100 to-obsidian-200"} className={`text-white flex flex-col gap-8 relative overflow-hidden ${isContactPage ? "pb-12 md:pb-20 pt-20 md:pt-56" : "py-12 md:py-20"}`}>
            <span className="flex flex-col gap-4 md:gap-6">
                <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl">{!isContactPage && "Still "}Have <span className="px-2 py-2 text-white font-bold bg-oBlue-100">Questions?</span></motion.h2>
                <motion.p {...fadeInUp}>We're here to help you create something meaningful.</motion.p>
            </span>

            <QuestionsForm/>

            <Image src={formBg} alt="" className={`hidden md:block absolute ${isContactPage ? "h-[80%] bottom-0" : "h-full top-0"} w-auto right-12 pointer-events-none`}/>
        </SectionLayout>
    )
}