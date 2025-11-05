'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css';
import SectionLayout from "@/components/common/SectionLayout";
import heroBg1 from "./assets/heroBg.webp"
import heroBg2 from "./assets/heroBg2.webp"
import heroBg3 from "./assets/heroBg3.webp"
import { PrimaryCTA } from "@/components/common/Buttons";
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const backgroundVariants = [
    heroBg1,
    heroBg2,
    heroBg3
]

export function Hero() {

    const words = [
        {
            label: "Poster.",
            color: "#FFFFFF"
        },
        {
            label: "Story.",
            color: "#FFDD9A"
        },
        {
            label: "Inspiration.",
            color: "#39B8EB"
        },
    ];

    return (
        <>
            <div className='absolute inset-0'>
                <Swiper
                    modules={[Autoplay, Pagination]}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        el: '.pagination',
                        clickable: true
                    }}
                    loop={true}
                    slidesPerView={1}
                    spaceBetween={0}
                    centeredSlides={true}
                >
                    {backgroundVariants.map((background, index) => (
                        <SwiperSlide key={index}>
                            <Image
                                src={background}
                                alt={`Background ${index + 1}`}
                                className='w-screen h-screen object-cover'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center relative mx-auto -mt-6 scale-75 md:scale-100 md:-mt-8 z-20 pagination"></div>
            </div>

            <SectionLayout
                containerClasses={"z-10 relative"}
                noPadding className='flex flex-col items-center text-center h-screen gap-6 justify-center pb-16 pt-28 md:pt-52 md:pb-32 text-white'>
                <motion.h1
                    className="text-5xl md:text-6xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Craft Your OneOfOne <br />
                    <span
                        className="font-bold inline-block overflow-hidden h-[48px] md:h-[76px] align-bottom"
                    >
                        <Swiper
                            direction="vertical"
                            spaceBetween={12}
                            loop={true}
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false
                            }}
                            speed={1000}
                            slidesPerView={1}
                            allowTouchMove={false}
                            modules={[Autoplay]}
                            className="h-full [&_.swiper-wrapper]:!transition-timing-[cubic-bezier(0.7,0,1,1)]"
                        >
                            {
                                words.map((word, index) => (
                                    <SwiperSlide key={index} className='flex items-center justify-center h-full text-center'>
                                        <span style={{color: word.color}}>{word.label}</span>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </span>
                </motion.h1>

                <motion.p
                    className="max-w-xl font-light md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    You know who you are. Answer a few questions about your goals and interests, and we will create a poster that feels like home
                </motion.p>

                <motion.span
                    className="mt-4 md:mt-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <PrimaryCTA label={"Start Creating Your Poster Now"} />
                </motion.span>
            </SectionLayout>
        </>
    )
}