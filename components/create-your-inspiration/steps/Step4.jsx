'use client'
import { quotePositions } from "@/const/quotePositions"
import { fontOptions } from "@/const/fonts"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from "@/components/common/Icons"
import 'swiper/css';
import { CheckIcon } from "@/components/common/Icons"
import { fontColors } from "@/const/fontColors"
import { motion } from "framer-motion"

export function Step4({ setUserChoice, userChoice }) {

    const selectFont = (value) => {
        setUserChoice(prev => ({
            ...prev,
            font: value
        }))
    }

    const selectFontColor = (value) => {
        setUserChoice(prev => ({
            ...prev,
            fontColor: value
        }))
    }

    const selectedQuotePosition = userChoice.bestFit ? null : quotePositions.find(quote => quote.value === userChoice.quotePosition)
    const selectedFont = userChoice.font && fontOptions.find(font => font.name === userChoice.font)


    return (
        <motion.div initial={{ top: 100, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 100, opacity: 0 }}
            transition={{ duration: 0.4 }} className="flex flex-col lg:grid grid-cols-2 md:gap-6">
            <div className="flex flex-col gap-4 text-[#072E3F] py-8">
                <h3 className="font-bold text-2xl md:text-4xl">Make It <span className="text-blue-200">Feel Real</span></h3>
                <p><strong>Step 4.</strong> Choose a font</p>

                <div className="flex items-center justify-between gap-4 w-full my-4">
                    <button className="grid p-1 hover:bg-blue-100/10 transition-colors cursor-pointer rounded-full swiper-button-prev place-items-center text-dgblue-200">
                        <ChevronLeft />
                    </button>

                    <Swiper
                        modules={[Navigation]}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        spaceBetween={16}
                        centeredSlides={true}
                        breakpoints={{
                            760: {
                                slidesPerView: 1,
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
                        loop={true}
                    >
                        {
                            fontOptions.map(({ name, className }) => (
                                <SwiperSlide key={name}>
                                    <button onClick={() => selectFont(name)} className={`grid border place-items-center mx-auto rounded-md p-6 w-[160px] aspect-[4/3] ${userChoice.font === name ? "font-bold border-transparent" : " cursor-pointer border-blue-100/20 hover:shadow-xl transition-all"} relative ${className}`}>
                                        {name}

                                        {
                                            userChoice.font === name &&
                                            <div className="absolute bottom-0 w-full h-[4px] rounded-full bg-blue-200"></div>
                                        }
                                    </button>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <button className="grid p-1 hover:bg-blue-100/10 transition-colors cursor-pointer rounded-full swiper-button-next place-items-center text-dgblue-200">
                        <ChevronRight />
                    </button>
                </div>

                {
                    !userChoice.bestFit &&
                    <span
                        className=" flex flex-col gap-3"
                    >
                        Choose your font color:
                        <ul className="flex items-end gap-3 md:gap-3">
                            {
                                fontColors.map(({ color, value }) => (
                                    <li key={color}>
                                        <button onClick={() => selectFontColor(color)} style={{ backgroundColor: value }} className={`aspect-square grid place-items-center size-8 rounded-lg ${userChoice.fontColor === color ? "ring-2 ring-blue-200 ring-offset-2 " : "hover:shadow-md transition-all cursor-pointer"} ${color === "White" ? "border border-blue-200" : ""}`}>
                                            {
                                                userChoice.fontColor === color && <span className={color === "White" ? "text-blue-200" : "text-white"}><CheckIcon /></span>
                                            }
                                        </button>
                                    </li>
                                ))
                            }
                        </ul>
                    </span>
                }
            </div>

            <article className="flex flex-col items-center gap-4 mb-12 md:mb-0 lg:border-l border-blue-200/20 bg-transparent">
                <div style={{backgroundImage: userChoice.imageUrl ? `url(${URL.createObjectURL(userChoice.imageUrl)})` : null}} className={`border border-blue-100 m-auto rounded-xl shadow-sm shadow-blue-100/40 p-6 ${userChoice.orientation === "portrait" ? "aspect-[3/4] w-[200px] md:w-[230px]" : userChoice.orientation === "landscape" ? "aspect-[4/3] h-[200px] md:h-[230px]" : "aspect-square h-[230px] md:h-[270px]"} flex bg-cover bg-center ${selectedQuotePosition ? selectedQuotePosition.position : "justify-center items-center"}`}>
                    <strong className={`${userChoice.font ? selectedFont.className : ''} ${userChoice.fontColor === "Black" ? "text-black" : "text-white"}`}>
                        {
                            userChoice.quote
                        }
                    </strong>
                </div>
                <p>Font Preview</p>
            </article>
        </motion.div>
    )
}