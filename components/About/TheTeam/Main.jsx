'use client'
import { motion } from "framer-motion";
import { fadeInUp } from "@/const/animation";
import SectionLayout from "@/components/common/SectionLayout";
import Image from "next/image";
import dave from "./assets/dave.webp"
import anna from "./assets/anna.webp"
import viviana from "./assets/viviana.webp"
import citybg from "./assets/cityBg.webp"

const teamMembers = [
    {
        picture: dave,
        first: 'David',
        last: 'Guttman',
        role: 'Chairman of the Board'
    },
    {
        picture: anna,
        first: 'Anna',
        last: 'Prudchenko',
        role: 'CEO'
    },
    {
        picture: viviana,
        first: 'Viviana',
        last: 'Velasquez',
        role: 'Paid Ads Specialist'
    },
    {
        picture: viviana,
        first: 'Samuel',
        last: 'Ortiz',
        role: 'Web Developer'
    },
]

export function TheTeam() {
    return (
        <SectionLayout style={{backgroundImage: `url(${citybg.src})`}}>
            <span className="flex flex-col items-center text-center gap-4 md:gap-6">
                <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl">Meet <span className="px-2 py-2 text-white font-bold bg-oBlue-200">Our Team</span></motion.h2>
                <motion.p {...fadeInUp}>The people who make everything possible, turning every challenge into achievement.</motion.p>
            </span>

            <ul className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto mt-12 md:mt-16 gap-12">
                {
                    teamMembers.map(({role, picture, first, last}) => (
                        <MemberCard key={first} first={first} last={last} role={role} picture={picture}/>
                    ))
                }
            </ul>
        </SectionLayout>
    )
}

function MemberCard({role, picture, first, last}) {
    return (
        <li className="rounded-2xl border border-carbon/20 overflow-hidden shadow-xl bg-white">
            <motion.picture {...fadeInUp}>
                <Image src={picture} alt={`${first}'s portrait`} className="w-full"/>
            </motion.picture>
            <div className="p-4">
                <motion.h4 {...fadeInUp} className="text-xl md:text-2xl">{first} <strong>{last}</strong></motion.h4>
                <motion.p {...fadeInUp} className="text-carbon/60">{role}</motion.p>
            </div>
        </li>
    )
}