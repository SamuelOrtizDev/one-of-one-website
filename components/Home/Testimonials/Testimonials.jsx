import SectionLayout from "@/components/common/SectionLayout";
import { Carousel } from "./Cards";

export function Testimonials() {
    return (
        <SectionLayout>
            <h2 className="text-center font-bold text-3xl text-blue-200">Moments Made to Last</h2>
            <Carousel/>
        </SectionLayout>
    )
}