'use client'
import Link from "next/link"
import logo from "./assets/logo.svg"
import Image from "next/image"
import { useState } from "react"
import { MenuIcon, X } from "../Icons"
import { usePathname } from "next/navigation"
import { SecondaryCTA } from "../Buttons"
import { motion } from "framer-motion"
import navLinks from "@/const/navLinks"

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false)
    const path = usePathname()

    if (path === '/create-your-inspiration') return

    return (
        <motion.header
            initial={{
                y: -200
            }}
            animate={{
                y: 0,
                height: isOpen ? '100dvh' : 'fit-content',
            }}
            transition={{
                duration: .2,
                ease: "easeInOut"
            }}
            className={`w-full fixed top-0 transition-transform bg-black/60 backdrop-blur-sm z-40 text-white border-b border-gold-100`}>
            <div className="mx-auto max-w-[1400px] flex items-center justify-between flex-wrap px-7 md:px-[72px] py-3 md:py-6">
                <span className="md:w-full max-w-xs">
                    <Link href="/">
                        <Image src={logo} alt="OneOfOne Logo" className="max-w-[60px] md:max-w-[90px] hover:scale-105 transition-transform" />
                    </Link>
                </span>

                <nav className="hidden nav:flex items-center gap-8">
                    <NavLinks />
                </nav>

                <nav className="hidden nav:flex gap-8 w-full justify-end max-w-xs">
                    <SecondaryCTA trackEvent="Navbar CTA - Custom Poster" />
                </nav>

                <nav className="nav:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                        {
                            isOpen ? <X /> : <MenuIcon />
                        }
                    </button>
                </nav>

                {
                    isOpen &&
                    <div className="flex flex-col items-center gap-8 basis-full my-8">
                        <NavLinks />
                        <SecondaryCTA trackEvent="Navbar CTA - Custom Poster" />
                    </div>
                }
            </div>
        </motion.header>
    )
}

export function NavLinks() {

    const linkStates = 'hover-navlink transition-colors hover:text-oBlue-100 cursor-pointer'
    const activeStates = 'active-navlink font-semibold'
    const path = usePathname()

    return (
        <>
            {
                navLinks.map(({ label, href }) => (
                    <Link key={label} href={href} className={path === href ? activeStates : linkStates}>{label}</Link>
                ))
            }
        </>
    )
}