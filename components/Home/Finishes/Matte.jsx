'use client'
import { motion } from "framer-motion";
import { fadeInUp } from "@/const/animation";
import backgroundTexture from "../InspirationForEveryDay/assets/backgroundTexture.webp"
import Image from "next/image"
import matte from "./assets/matte.webp"

export function Matte() {
    return (
        <article className="grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-[0.5fr_1fr] place-items-center">
            <picture>
                <motion.div {...fadeInUp} className="relative">
                    <Image src={matte} alt="matte image" className="h-full w-auto" />
                    <p className="px-6 py-3 bg-oBlue-100 text-white text-xl absolute bottom-0 left-6 font-semibold">This is Matte</p>
                </motion.div>
            </picture>

            <div className="bg-repeat bg-center p-6" style={{ backgroundImage: `url(${backgroundTexture.src})` }}>
                <motion.div {...fadeInUp} className="bg-oCard px-4 py-8 text-xl md:text-2xl font-light text-wrap">
                    Matte gives a soft, even look without glare—great for close viewing.
                </motion.div>
            </div>
        </article>
    )
}