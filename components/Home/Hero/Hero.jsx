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

    const colors = ['#FFFFFF', '#FFDD9A', '#39B8EB'];

    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setColorIndex((prev) => (prev + 1) % colors.length);
        }, 5200);

        return () => clearInterval(interval);
    }, []);

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
                                className='w-screen h-[400px] md:h-[616px] object-cover'
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="flex justify-center relative mx-auto -mt-6 scale-75 md:scale-100 md:-mt-8 z-20 pagination"></div>
            </div>

            <SectionLayout
                containerClasses={"z-10 relative"}
                noPadding className='flex flex-col items-center text-center gap-6 justify-center pb-16 pt-28 md:pt-52 md:pb-32 text-white'>
                <motion.h1
                    className="text-3xl md:text-6xl"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Craft Your OneOfOne <br />
                    <motion.span
                        animate={{ color: colors[colorIndex] }}
                        transition={{ duration: .7 }}
                        className="font-bold"
                    >
                        Poster.
                    </motion.span>
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