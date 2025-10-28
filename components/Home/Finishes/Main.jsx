import SectionLayout from "@/components/common/SectionLayout";
import { Matte } from "./Matte";
import { Luster } from "./Luster";
import { PosterLook } from "./PosterLook";
import { SaveArrival } from "./SaveArrival";

export function Finishes() {
    return (
        <SectionLayout className={"flex flex-col gap-12 md:gap-28"}>
            <h2 className="text-3xl md:text-5xl">Your <span className="px-2 py-2 text-white font-bold bg-oBlue-100">Finishes</span></h2>

            <Matte/>
            <Luster/>
            <PosterLook/>
            <SaveArrival/>
        </SectionLayout>
    )
}