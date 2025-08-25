import SectionLayout from "@/components/common/SectionLayout";
import stepsBg from "./assets/stepsBg.webp"

export function StepsCTA() {
    return (
        <SectionLayout noPadding className={'py-24 md:py-44'} style={{backgroundImage: `url(${stepsBg.src})`}}>
            <h3 className="text-center text-white text-xl md:text-2xl">Turn fleeting inspiration and priceless memories into your timeless <br /> masterpiece... in just <strong>5 easy steps</strong></h3>
        </SectionLayout>
    )
}