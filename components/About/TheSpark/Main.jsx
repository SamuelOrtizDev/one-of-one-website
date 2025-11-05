'use client'
import { motion } from "framer-motion";
import { fadeInUp } from "@/const/animation";
import SectionLayout from "@/components/common/SectionLayout";
import backgroundTexture from "../../Home/InspirationForEveryDay/assets/backgroundTexture.webp"
import jordanImage from "./assets/jordanImage.webp"
import Image from "next/image";

export function TheSpark() {
    return (
        <SectionLayout>
            <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl">The <span className="px-2 py-2 text-white font-bold bg-oBlue-100">Spark</span></motion.h2>

            <article className="grid gap-6 grid-cols-1 md:grid-cols-2 place-items-center mt-12 md:mt-16 text-center md:text-left">
                <div className="bg-repeat bg-center p-6" style={{ backgroundImage: `url(${backgroundTexture.src})` }}>
                    <div className="bg-oCard px-4 py-8">
                        <motion.p {...fadeInUp}>It began with a single idea that couldn't be found. <strong className="font-medium text-xl text-gold-300">David</strong> searched the entire Internet for a poster featuring his favorite Michael Jordan quote, but it didn’t exist, not for any price. So, he crafted it himself, pouring weeks into designing a piece that spoke to his soul. Noticing the thought that went into materializing his inspiration, <strong className="font-medium text-xl text-gold-300">David</strong> then gifted similar one-of-a-kind posters to his friends and family. He quickly saw that, because these posters were so individual, they weren’t just admired, they were cherished. <strong className="font-medium text-xl text-gold-300">That spark ignited OneOfOne.</strong></motion.p>
                        <br />
                        <motion.p {...fadeInUp}><strong className="font-medium text-xl text-gold-300">From that moment</strong>, we set out to create more than posters. We built a process to craft deeply personal, inspiring art. Our five-step system – select a quote, upload an image, choose a font, design the layout, and pick premium paper or a sleek frame – makes customization effortless. What started as one man’s vision became a company, led by an 18-year-old intern turned <strong className="font-medium text-xl text-gold-300">CEO</strong> under <strong className="font-medium text-xl text-gold-300">David’s mentorship</strong>. From the beginning, <strong className="font-medium text-xl text-gold-300">OneOfOne</strong> was never simply a business; it is a live case study of turning passion into permanence, born from the <strong className="font-medium text-xl text-gold-300">Anti-MBA</strong> philosophy of building something real. </motion.p>
                    </div>
                </div>
                <motion.picture {...fadeInUp}>
                        <Image src={jordanImage} alt="matte image" className="h-full w-auto" />
                </motion.picture>
            </article>
        </SectionLayout>
    )
}