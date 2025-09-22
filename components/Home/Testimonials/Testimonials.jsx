'use client'
import SectionLayout from "@/components/common/SectionLayout";
import { motion } from "framer-motion";
import Image from 'next/image';
import image1 from "./assets/1.png"
import image2 from "./assets/2.png"
import image3 from "./assets/3.png"
import image4 from "./assets/h1.png"
import image5 from "./assets/h2.png"
import image6 from "./assets/6.png"

export function Testimonials() {
    return (
        <SectionLayout>
            <h2 className="text-center font-bold text-3xl text-blue-200">Moments Made to Last</h2>
            <div className='text-[#FFC37B] flex justify-center items-center gap-2 mt-2'>
                {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} />
                ))}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 mt-8 md:mt-14 mx-auto gap-2 max-w-7xl">
                <div className="flex items-end md:-translate-y-[3.625rem]">
                    <Image alt="poster example" src={image1} className="aspect-[3/4] rounded-xl" />
                </div>
                <div className="flex items-end md:-translate-y-[3.625rem]">
                    <Image alt="poster example" src={image2} className="aspect-[3/4] rounded-xl" />
                </div>
                <Image alt="poster example" src={image4} className="aspect-[4/3] col-span-2 rounded-xl" />
                <Image alt="poster example" src={image5} className="aspect-[4/3] col-span-2 md:-translate-y-[3.625rem] rounded-xl" />
                <Image alt="poster example" src={image3} className="aspect-[3/4] rounded-xl" />
                <Image alt="poster example" src={image6} className="aspect-[3/4] rounded-xl" />
            </div>
        </SectionLayout>
    )
}

const StarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.7022 0.404236L15.5301 9.10768H24.6815L17.2779 14.4867L20.1058 23.1902L12.7022 17.8111L5.2986 23.1902L8.12652 14.4867L0.722925 9.10768H9.87427L12.7022 0.404236Z" fill="#FFC37B" />
    </svg>
)