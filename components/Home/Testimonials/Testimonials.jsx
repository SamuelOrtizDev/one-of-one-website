import SectionLayout from "@/components/common/SectionLayout";
import { Carousel } from "./Carousel";

export function Testimonials() {
    return (
        <SectionLayout>
            <h2 className="text-center font-bold text-3xl text-blue-200">Moments Made to Last</h2>
            <div className='text-[#FFC37B] flex justify-center items-center gap-2 mt-2'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} />
                ))}
            </div>
            <Carousel />
        </SectionLayout>
    )
}

const StarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7022 0.404236L15.5301 9.10768H24.6815L17.2779 14.4867L20.1058 23.1902L12.7022 17.8111L5.2986 23.1902L8.12652 14.4867L0.722925 9.10768H9.87427L12.7022 0.404236Z" fill="#FFC37B" />
    </svg>
)