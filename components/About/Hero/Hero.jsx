'use client'
import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";
import Image from "next/image";
import littleSquare from "./assets/littleSquare.svg"
import annaHero from "./assets/annaHero.webp"

export function Hero() {
    return (
        <SectionLayout
            noPadding containerClasses={"bg-obsidian-50"} className='grid grid-cols-1 md:grid-cols-2 gap-12 pb-16 pt-28 md:pt-52 md:pb-32 text-white'
        >
            <div className="flex flex-col justify-center gap-16">
                <motion.h1 initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} className="text-3xl md:text-6xl">
                    About
                    <span className="px-2 ml-2 py-2 text-obsidian-50 font-bold bg-gradient-to-b from-oBlue-100 to-oBlue-100/70 relative">
                        Us
                        <motion.span initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}>
                            <Image src={littleSquare} alt="" className="absolute -right-3 -bottom-3 w-[25px]" />
                        </motion.span>
                    </span>
                </motion.h1>

                <motion.article
                    className="font-light"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    <p>At <strong className="font-medium text-gold-50 text-xl">eighteen</strong>, I landed an internship with <strong className="font-medium text-gold-50 text-xl">David Gutman</strong>, a seasoned entrepreneur who's orchestrated eight and nine-figure exits. Three weeks later, as a result of perfect timing, David's sky-high risk tolerance, and his belief in raw potential, I received my dream offer: <strong className="font-medium text-gold-50 text-xl">an opportunity to start a business of my own.</strong></p>
                    <br />
                    <p>At the time, David was distilling 30 years of his entrepreneurship experience into a course teaching the true essentials of starting, scaling, and successfully exiting a business. To confirm its credibility, David also decided to actually build a business and string it into the learning as a real-life example.</p>
                    <br />
                    <p>On a whim of crazy genius, he chose someone <strong className="font-medium text-gold-50 text-xl">without an MBA, undergraduate college degree, or even prior business experience, to be the CEO — me.</strong> Out of my naivete, no less, I took the job! Now, you are looking at the product of years of entrepreneurial experience and the ambitious ideas of an 18-year-old.</p>
                </motion.article>
            </div>
            <motion.picture
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
                <Image src={annaHero} alt="anna's portrait" className="w-full h-auto" />
            </motion.picture>
        </SectionLayout>
    )
}