import Link from "next/link"
import logo from "./assets/logo.svg"
import Image from "next/image"

export default function Navbar() {

    const linkStates = 'transition-colors hover:text-blue-200 cursor-pointer'

    return (
        <header className="w-full fixed top-0 px-7 md:px-[72px] py-4 md:py-6 bg-white shadow-sm z-50">
            <div className="mx-auto max-w-[1800px] flex items-center justify-between gap-8">
                <Link href="/">
                    <Image src={logo} alt="OneOfOne Logo" className="max-w-[80px] hover:scale-105 transition-all"/>
                </Link>

                <nav className="flex items-center gap-8 text-blue-100">
                    <Link className={linkStates} href="/">Gift a Memory</Link>
                    <Link className={linkStates} href="/">About Us</Link>
                    <Link className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 py-2 px-6 bg-gradient-to-r from-oOrange-100 to-oOrange-200 text-white" href="/">Create Your inspiration</Link>
                </nav>
            </div>
        </header>
    )
}