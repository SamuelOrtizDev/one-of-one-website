'use client'
import { motion } from "framer-motion";
import { fadeInUp } from "@/const/animation";
import { PrimaryCTA } from "@/components/common/Buttons";
import SectionLayout from "@/components/common/SectionLayout";
import Image from "next/image";
import aiIcon from "./assets/aiIcon.svg"
import editIcon from "./assets/editIcon.svg"
import giftIcon from "./assets/giftIcon.svg"
import messageIcon from "./assets/messageIcon.svg"

const features = [
    {
        icon: messageIcon,
        title: 'Find Your Words',
        desc: 'Answer five multiple-choice questions about your goals and interests to receive quote suggestions in seconds - no research needed!'
    },
    {
        icon: aiIcon,
        title: 'Pick the Style',
        desc: 'Tell us about your perfect look and feel for your poster, and we will create poster versions that feel true to you.'
    },
    {
        icon: editIcon,
        title: 'Make It Yours',
        desc: 'Edit as much as you want—tweak text, colors, or layout until it feels right.'
    },
    {
        icon: giftIcon,
        title: 'Share the Gift',
        desc: 'Once you choose your material type and frame option, we will ship it straight to your door. This is what makes the OneOfOne poster perfect for personal use, as well as a surprise present!'
    },
]

export function HowItWorks() {
    return (
        <SectionLayout className={"text-white flex flex-col items-center gap-12 md:gap-20 text-center"} containerClasses={"bg-[#032429]"}>
            <span className="flex flex-col items-center gap-4 md:gap-6">
                <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl">How It <strong>Works</strong> for You.</motion.h2>
                <motion.p {...fadeInUp} className="font-light">From Idea to Masterpiece</motion.p>
            </span>

            <ul className="flex justify-center md:justify-between flex-wrap gap-12 text-wrap">
                {
                    features.map(({ icon, title, desc }) => (
                        <li key={title} className="flex flex-col items-center gap-6 max-w-[260px]">
                            <motion.span {...fadeInUp} className="grid place-items-center aspect-square w-[100px] h-[100px] rounded-full bg-[#FBFBFF] inset-shadow-sm">
                                <Image src={icon} alt="icon" className="w-full max-w-[35px]" />
                            </motion.span>
                            <motion.strong {...fadeInUp} className="font-medium md:text-2xl">{title}</motion.strong>
                            {desc}
                        </li>
                    ))
                }
            </ul>

            <motion.span {...fadeInUp}>
                <PrimaryCTA label={"Get Started"} />
            </motion.span>
        </SectionLayout>
    )
}