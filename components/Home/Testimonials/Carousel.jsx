'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'
import 'swiper/css';
import posterPlaceholder from "./assets/placeholder.webp"
import Image from 'next/image';

const quotes = [
    {
        quote: "Every morning I see my custom quote and it sets the perfect tone for my day. Worth every penny.",
        name: "Alex Park",
        label: "Worth every penny"
    },
    {
        quote: "It's not just a poster, it's a daily reminder of my goals.",
        name: "Marcus Rodriguezz",
        label: "Unmatched details"
    },
    {
        quote: "Every morning I see my custom quote and it sets the perfect tone for my day. Worth every penny.",
        name: "Alex Parkk",
        label: "label here"
    },
    {
        quote: "The attention to detail is unmatched. It's not just a poster, it's a daily reminder of my goals.",
        name: "Marcus Rodriguezzz",
        label: "label here"
    },
    {
        quote: "Every morning I see my custom quote and it sets the perfect tone for my day. Worth every penny.",
        name: "Alex Parkkk",
        label: "label here"
    },
    {
        quote: "The attention to detail is unmatched. It's not just a poster, it's a daily reminder of my goals.",
        name: "Marcus Rodriguezzzz",
        label: "label here"
    },
]

export function Carousel() {

    return (
        <div className='flex flex-col mt-8 max-w-[1728px] mx-auto'>
            <div className="swiperContainer">
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{
                        delay: 4000
                    }}
                    spaceBetween={16}
                    loop={true}
                    breakpoints={{
                        760: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1800: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {
                        quotes.map(({ name, quote, label }) => (
                            <SwiperSlide key={name}>
                                <Testimonial name={name} label={label} quote={quote} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

const Testimonial = ({ quote, name, label }) => (
    <article className='grid grid-cols-2 gap-4 md:gap-0 px-8 py-6 rounded-md bg-gradient-to-b from-white to-[#EDEDED] min-h-[300px] md:min-h-[200px] relative'>
        <picture>
            <Image src={posterPlaceholder} alt={`${name}'s customized poster`} className='w-full md:max-w-[150px]'/>
        </picture>

        <div className='flex flex-col gap-2'>
            <strong className='text-blue-200 font-bold text-2xl'>"{label}"</strong>
            <p>{quote}</p>
            <small className='text-blue-200 absolute right-4 bottom-4 font-bold text-sm'>— {name}</small>
        </div>
    </article>
)