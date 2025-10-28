import SectionLayout from "@/components/common/SectionLayout";
import inspoImage from "./assets/inspoImage.webp"
import backgroundTexture from "./assets/backgroundTexture.webp"
import quotesIcon from "./assets/quotesIcon.svg"
import Image from "next/image";

export function InspirationForEveryDay() {
    return (
        <SectionLayout>
            <span className="flex flex-col gap-4 md:gap-6">
                <h2 className="text-3xl md:text-5xl">Inpiration for <span className="px-2 py-2 text-white font-bold bg-oBlue-200">Every Day</span></h2>
                <p>Because blank walls can’t remind you who you are — but your story can.</p>
            </span>

            <article className="grid gap-6 grid-cols-1 md:grid-cols-2 mt-12 md:mt-20">
                <div className="bg-repeat bg-center p-6" style={{ backgroundImage: `url(${backgroundTexture.src})` }}>
                    <div className="bg-oCard p-4 flex flex-col gap-6 h-full text-xl font-light text-wrap">
                        <p>You have big, long-term goals, but what about the motivation to get you through another day of 'getting there'?</p>
                        <p>Willpower fades throughout the day. You just need a little push — a reminder of what you're striving for… and blank walls don't help.</p>
                        <p>We start with what you know about yourself, so you don't waste hours looking through generic posters online.</p>
                        <span className="mt-12 mb-4 relative mx-auto max-w-md">
                            <Image src={quotesIcon} alt="" className="absolute w-full max-w-[40px] -left-10 -top-6"/>
                            <p className="text-center italic">Let us create your OneOfOne poster. True to you — without the headache.</p>
                            <Image src={quotesIcon} alt="" className="absolute w-full max-w-[40px] -right-4 -bottom-2 rotate-180"/>
                        </span>
                    </div>
                </div>

                <picture className="grid place-items-center">
                    <Image src={inspoImage} alt="example poster image" className="w-full m-auto max-w-md h-auto" />
                </picture>
            </article>
        </SectionLayout>
    )
}