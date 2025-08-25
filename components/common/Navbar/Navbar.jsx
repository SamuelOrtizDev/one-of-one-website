import Link from "next/link"
import logo from "./assets/logo.svg"
import Image from "next/image"

export function Navbar() {

    const linkStates = 'transition-colors hover:text-blue-200 cursor-pointer'

    return (
        <header className="w-full fixed top-0 px-7 md:px-[72px] py-4 md:py-6 bg-white shadow-sm">
            <div className="mx-auto max-w-[1800px] flex items-center justify-between gap-8">
                <Link href="/">
                    <Image src={logo} alt="OneOfOne Logo" className="max-w-[80px] hover:scale-105 transition-all"/>
                </Link>

                <nav className="flex items-center gap-8 text-blue-100">
                    <Link className={linkStates} href="/">Gift a Memory</Link>
                    <Link className={linkStates} href="/">About Us</Link>
                    <Link className={linkStates} href="/">Create Your inspiration</Link>
                </nav>
            </div>
        </header>
    )
}