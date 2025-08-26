'use client'
import Image from "next/image"
import Link from "next/link"
import logo from "../Navbar/assets/logo.svg"
import facebook from "./assets/Facebook-Icon.svg"
import linkedin from "./assets/LinkedIn-Icon.svg"
import twitter from "./assets/Twitter-Icon.svg"
import youtube from "./assets/Youtube-Icon.svg"
import { usePathname } from "next/navigation"

export default function Footer() {

    const path = usePathname()

    if (path != "/create-your-inspiration") return (
        <footer className="bg-gradient-to-r from-[#F9FCFD] via-[#E6F3F8] to-[#F9FCFD] border-t border-blue-200/20" >
            <div className="flex justify-evenly flex-wrap md:grid grid-cols-3 gap-12 mx-auto w-full max-w-[1800px] py-10 px-7 md:px-[72px] text-blue-200 items-center">
                <Link href="/">
                    <Image src={logo} alt="OneOfOne Logo" className="max-w-[300px]" />
                </Link>

                <div className="flex flex-col items-center gap-3">
                    <span className="flex items-center justify-center gap-6 font-bold">
                        <Link className="hover:underline" href="/">Gift a Memory</Link>
                        <Link className="hover:underline" href="/">About Us</Link>
                    </span>
                    <p className="text-oOrange-100 text-center font-medium">“Your memories and Inspirations deserve to Shine.”</p>
                </div>

                <div className="flex flex-col text-center md:text-right items-center md:items-end gap-4">
                    <span className="flex items-center gap-6">
                        <Link href="/">
                            <Image src={facebook} alt="facebook Logo" className="max-w-[44px]" />
                        </Link>
                        <Link href="/">
                            <Image src={twitter} alt="twitter Logo" className="max-w-[44px]" />
                        </Link>
                        <Link href="/">
                            <Image src={youtube} alt="youtube Logo" className="max-w-[44px]" />
                        </Link>
                        <Link href="/">
                            <Image src={linkedin} alt="linkedin Logo" className="max-w-[44px]" />
                        </Link>
                    </span>
                    <small>©2025 One Of One LLC. All rights Reserved.</small>
                </div>
            </div>
        </footer>
    )
}