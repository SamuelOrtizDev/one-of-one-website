'use client'
import { motion } from "framer-motion";
import { fadeInUp } from "@/const/animation";
import backgroundTexture from "../InspirationForEveryDay/assets/backgroundTexture.webp"
import Image from "next/image"
import arrival from "./assets/arrival.webp"

export function SaveArrival() {
    return (
        <div>
            <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl">Save <span className="px-2 py-2 text-white font-bold bg-oBlue-100">Arrival</span></motion.h2>

            <article className="grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-[0.5fr_1fr] mt-12 md:mt-20 place-items-center">
                <picture>
                    <motion.div {...fadeInUp} className="relative">
                        <Image src={arrival} alt="matte image" className="h-full w-auto" />
                        <p className="px-6 py-3 bg-oBlue-100 text-white text-xl absolute bottom-0 left-6 font-semibold">Your Packaging</p>
                    </motion.div>
                </picture>

                <div className="bg-repeat bg-center p-6" style={{ backgroundImage: `url(${backgroundTexture.src})` }}>
                    <motion.div {...fadeInUp} className="bg-oCard px-4 py-8 text-xl md:text-2xl font-light text-wrap">
                        To prevent creasing and damage to unframed posters, OneOfOne pieces arrive safely rolled up, lined with protective layers of paper, and enclosed in sturdy boxes.
                    </motion.div>
                </div>
            </article>
        </div>
    )
}