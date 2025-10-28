import SectionLayout from "@/components/common/SectionLayout";
import heroBg from "./assets/heroBg.webp"
import { PrimaryCTA } from "@/components/common/Buttons";

export function Hero() {
    return (
        <SectionLayout
        style={{backgroundImage: `url(${heroBg.src})`}}
            noPadding className='flex flex-col items-center text-center gap-6 justify-center pb-16 pt-28 md:pt-52 md:pb-32 text-white'>
            <h1 className="text-3xl md:text-6xl">Craft Your OneOfOne <br /><span className="font-bold">Poster.</span></h1>
            <p className="max-w-xl font-light md:text-lg">You know who you are. Answer a few questions about your goals and interests, and we will create a poster that feels like home</p>
            <span className="mt-4 md:mt-8">
                <PrimaryCTA label={"Start Creating Your Poster Now"}/>
            </span>
        </SectionLayout>
    )
}