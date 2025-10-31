'use client'
import { motion } from "framer-motion";
import { fadeInUp } from "@/const/animation";
import SectionLayout from "@/components/common/SectionLayout";
import Image from "next/image";
import ladyImage from "./assets/lady.webp"

export function YouAreOneOfOne() {
    return (
        <SectionLayout containerClasses={"bg-obsidian-50"} className="grid gap-6 grid-cols-1 md:grid-cols-2 md:gap-16 text-white place-items-center">
            <article className="flex flex-col gap-8 md:gap-16">
                <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl">
                    You are <strong className="font-bold">One of One</strong> so is your inspiration.
                </motion.h2>

                <motion.p {...fadeInUp}>
                    <strong className="font-medium text-xl text-gold-50">In a world</strong> In a world of mass-produced decor and last gifts, <strong className="font-medium text-xl text-gold-50">OneOfOne</strong> fills a gap: the need for meaningful, lasting expressions. Our posters aren't off-the-shelf prints; they're <strong className="font-medium text-xl text-gold-50">Luxury</strong> keepsakes, designed to mark life's milestones and lead through the toughest moments. Each piece is tailored to the individual, blending archival-quality materials with <strong className="font-medium text-xl text-gold-50">Intentional Design</strong>.
                </motion.p>

                <motion.h3 {...fadeInUp} className="text-3xl md:text-5xl">
                    The Thought that <strong className="font-bold">Counts</strong>
                </motion.h3>

                <motion.p {...fadeInUp}>
                    People crave gifts that say, <strong className="font-medium text-xl text-gold-50">“I see you”</strong>. A <strong className="font-medium text-xl text-gold-50">OneOfOne</strong> poster does just that. It’s the quote that got them through a tough year, the image that reminds them of home, the frame that elevates their space. It’s for the executive who wants inspiration on their office wall, the parent celebrating their child’s first big win, or the friend who needs a reminder of their strength. Our process strips away overwhelm, delivering custom art that feels <strong className="font-medium text-xl text-gold-50">personal and timeless</strong>.
                </motion.p>
            </article>

            <motion.picture {...fadeInUp} className="flex md:justify-end items-center">
                <Image src={ladyImage} alt="lady holding poster" className="h-[50%] w-auto" />
            </motion.picture>
        </SectionLayout>
    )
}