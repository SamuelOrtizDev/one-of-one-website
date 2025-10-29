'use client'
import Image from "next/image"
import Link from "next/link"
import logo from "./assets/logoBlack.svg"
import facebook from "./assets/Facebook-Icon.svg"
import linkedin from "./assets/LinkedIn-Icon.svg"
import twitter from "./assets/Twitter-Icon.svg"
import youtube from "./assets/Youtube-Icon.svg"
import { usePathname } from "next/navigation"

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
)

export default function Footer() {

    const path = usePathname()

    if (path != "/create-your-inspiration") return (
        <footer className="bg-white" >
            <div className="flex justify-evenly flex-wrap md:grid grid-cols-3 gap-12 mx-auto w-full max-w-[1400px] py-16 md:py-20 px-7 md:px-[72px] text-carbon items-center">
                <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2">
                    <Link href="/">
                        <Image src={logo} alt="OneOfOne Logo" className="max-w-[150px]" />
                    </Link>
                    <p>OneOfOne: Simple steps to materializing your motivation.</p>
                </div>

                <div className="flex items-center justify-center flex-wrap gap-6">
                    <NavLinks />
                </div>

                <div className="flex flex-col text-center md:text-right items-center md:items-end gap-4">
                    <p>Follow Us:</p>
                    <span className="flex items-center gap-6 saturate-0">
                        <Link href="/">
                            <Image src={facebook} alt="facebook Logo" className="max-w-[44px]" />
                        </Link>
                        {/* <Link href="/">
                            <Image src={twitter} alt="twitter Logo" className="max-w-[44px]" />
                        </Link>
                        <Link href="/">
                            <Image src={youtube} alt="youtube Logo" className="max-w-[44px]" />
                        </Link> */}
                        <Link href="https://www.instagram.com/oneofone._official/" target="_blank" className="aspect-square grid place-items-center size-11 rounded-full text-white bg-blue-200 hover:bg-blue-100 transition-colors"><InstagramIcon /></Link>
                        <Link href="/">
                            <Image src={linkedin} alt="linkedin Logo" className="max-w-[44px]" />
                        </Link>
                    </span>
                </div>
            </div>

            <section className="bg-carbon text-white">
                <div className="mx-auto max-w-[1400px] flex items-center flex-wrap justify-center md:justify-between px-7 md:px-[72px] py-6">
                    <p>©2025 One Of One LLC. All rights Reserved.</p>
                    <p>Terms & Condition & Privacy Policy</p>
                </div>
            </section>
        </footer>
    )
}

export function NavLinks() {

    const linkStates = 'hover:underline cursor-pointer'
    const activeStates = 'font-semibold'
    const path = usePathname()

    return (
        <>
            <Link className={path === "/" ? activeStates : linkStates} href="/">Home</Link>
            <Link className={path === "/about" ? activeStates : linkStates} href="/about">About Us</Link>
            <Link className={path === "/how-it-works" ? activeStates : linkStates} href="/how-it-works">How it Works</Link>
            <Link className={path === "/contact" ? activeStates : linkStates} href="/contact">Contact</Link>
        </>
    )
}