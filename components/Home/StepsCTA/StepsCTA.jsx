import SectionLayout from "@/components/common/SectionLayout";
import stepsBg from "./assets/stepsBg.webp"
import Image from "next/image";
import happyFace from "./assets/happyFace.svg"

export function StepsCTA() {
    return (
        <SectionLayout noPadding className={'py-24 md:py-44 flex flex-col items-center gap-6'} style={{backgroundImage: `url(${stepsBg.src})`}}>
            <Image src={happyFace} alt="happy face icon" className="w-full max-w-[100px]"/>
            <h3 className="text-center text-white text-2xl md:text-4xl font-light">Turn fleeting inspiration and priceless memories into your timeless <br /> masterpiece... in just <strong className="font-bold">5 easy steps</strong></h3>
        </SectionLayout>
    )
}