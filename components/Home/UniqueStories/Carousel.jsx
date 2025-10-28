'use client'
import { motion } from "framer-motion";
import { fadeInUp } from "@/const/animation";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import Image from 'next/image';
import poster1 from "./assets/poster1.webp"

const quotes = [
    {
        name: "Sofia R.",
        image: poster1,
        desc: "I was raised in a magical Little Italy neighborhood of the Bronx, New York, where my grandmother taught me the art of Italian cooking"
    },
    {
        name: "Kayla W.",
        image: poster1,
        desc: "As a teenager, I helped my family at our modest restaurant on Stockton Boulevard, but our business was affected by a local pollution crisis"
    },
    {
        name: "Jamal W.",
        image: poster1,
        desc: "I was raised in a magical Little Italy neighborhood of the Bronx, New York, where my grandmother taught me the art of Italian cooking"
    },
    {
        name: "Esther Howard",
        image: poster1,
        desc: "I was raised in a magical Little Italy neighborhood of the Bronx, New York, where my grandmother taught me the art of Italian cooking"
    },
    {
        name: "Esther Howard 2",
        image: poster1,
        desc: "I was raised in a magical Little Italy neighborhood of the Bronx, New York, where my grandmother taught me the art of Italian cooking"
    },
]

export function Carousel() {
    return (
        <motion.div {...fadeInUp} className="mt-12 md:mt-16 mx-auto">
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 5000
                }}
                spaceBetween={16}
                loop={true}
                autoHeight={true}
                centeredSlides={true}
                breakpoints={{
                    760: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1800: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                }}
            >
                {
                    quotes.map(({ image, name, desc }) => (
                        <SwiperSlide key={name}>
                            <Testimonial image={image} name={name} quote={desc} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </motion.div>
    )
}

function Testimonial({image, name, quote}) {
    return (
        <article className='rounded-2xl bg-white p-8 border border-[#E0D9D9] flex flex-col mx-auto gap-4 max-w-md'>
            <picture>
                <Image src={image} alt={`${name}'s customized poster`} className='w-full rounded-lg'/>
            </picture>
            <span>
                <p className='text-[#514D4D]'>{quote}</p> <br />
                <strong className='font-medium text-[#19232B]'>{name}</strong>
            </span>
        </article>
    )
}