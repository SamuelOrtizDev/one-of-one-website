import { PrimaryCTA } from "@/components/common/Buttons";
import SectionLayout from "@/components/common/SectionLayout";
import readyToCreateBg from "./assets/readyToCreateBg.webp"

export function ReadyToCreate() {
    return (
        <SectionLayout className={"flex flex-col gap-6 text-white"} containerClasses={"md:py-20"} style={{backgroundImage: `url(${readyToCreateBg.src})`}}>
            <h2 className="text-3xl md:text-5xl">Ready to <br /> <strong className="text-oBlue-100 font-bold">Create Yours?</strong></h2>
            <p>Materialize your inspiration</p>
            <PrimaryCTA label={"Try It For Yourself"}/>
        </SectionLayout>
    )
}