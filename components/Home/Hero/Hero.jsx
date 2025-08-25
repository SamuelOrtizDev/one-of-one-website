import SectionLayout from "@/components/common/SectionLayout";
import heroBg from "./assets/heroBg.webp"
import { ArrowRight } from "@/components/common/Icons";

export function Hero() {
    return (
        <SectionLayout style={{backgroundImage: `url(${heroBg.src})`}} noPadding className='flex flex-col items-center text-center gap-6 justify-center py-32 mt-20 text-white'>
            <h1 className="font-bold text-3xl md:text-6xl">Craft Your Inspiration</h1>
            <p className="font-semibold text-xl md:text-2xl">Where Words Meet Timeless Imagery</p>
            <button className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-105 hover:saturate-200 px-12 py-4 bg-transparent bg-gradient-to-r from-[#348EAD] to-[#FFC37B] group flex items-center justify-center gap-2">
                Begin Your Journey
                <span className="group-hover:translate-x-1 transition-transform">
                    <ArrowRight/>
                </span>
            </button>
        </SectionLayout>
    )
}