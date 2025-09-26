import SectionLayout from "@/components/common/SectionLayout";
import heroBg from "./assets/heroBg.webp"
import { ArrowRight } from "@/components/common/Icons";
import Link from "next/link";

export function Hero() {
    return (
        <SectionLayout
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 50%, rgba(255,255,255,1)), url(${heroBg.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
            noPadding className='flex flex-col items-center text-center gap-6 justify-center py-32 mt-16 md:mt-20 text-white'>
            <h1 className="font-bold text-3xl md:text-6xl">Craft Your Inspiration</h1>
            <p className="font-semibold text-xl md:text-2xl -mt-4 mb-4">one-of-a-kind custom posters</p>
            <Link href="/create-your-inspiration" className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 w-full max-w-[350px] py-2 bg-gradient-to-r from-oOrange-100 to-oOrange-200 group flex items-center justify-center gap-4">
                Begin Your Journey
                <span className="group-hover:translate-x-1 transition-transform">
                    <ArrowRight />
                </span>
            </Link>
        </SectionLayout>
    )
}