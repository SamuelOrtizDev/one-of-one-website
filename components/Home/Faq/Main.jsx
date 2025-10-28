'use client'
import { fadeInUp } from "@/const/animation";
import SectionLayout from "@/components/common/SectionLayout";
import Image from "next/image";
import faqImage from "./assets/faqImage.webp"
import texture from "./assets/texture.webp"
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PlusIcon, MinusIcon } from "@/components/common/Icons";

const faqs = [
    {
        title: "How does the question process work?",
        desc: "Your answers to the first five multiple choice questions provide the information that we need to present your first quote suggestions. Then, four more questions about style and feel allow us to create three complete poster options."
    },
    {
        title: "What if I don't like the first suggestions?",
        desc: "You can restart the questions or edit right away. Our goal is posters that feel truly yours."
    },
    {
        title: "How do I choose sizes and finishes?",
        desc: "During your discovery, you'll pick from sizes like 12×16 to 24×36 inches, in portrait or landscape. The process suggests finishes (matte or luster) that fit your style. Preview everything before finalizing."
    },
    {
        title: "What is the print and material quality like?",
        desc: "Our posters use thick, fade-resistant paper with water-based inks for sharp, lasting results. Matte offers a soft, even finish; luster adds a gentle shine for more vibrancy. Framed options come in sustainable alder wood for a clean, gallery look."
    },
    {
        title: "What are the shipping times and costs?",
        desc: "Orders process in 2–5 business days, with US delivery in 3–7 business days. Worldwide shipping is available—no minimums. Costs depend on size and location; check your confirmation for details."
    },
    {
        title: "How are posters packaged to prevent damage?",
        desc: "Unframed posters ship in sturdy tubes to stay flat. Framed ones arrive in padded boxes for protection. If anything arrives off, we'll reprint or refund right away."
    },
    {
        title: "What if my poster arrives damaged or with quality issues?",
        desc: "Contact us at oneofoneposters@gmail.com—we'll handle reprints or refunds quickly. Our checks and tracking keep most deliveries perfect."
    },
    {
        title: "Is there a returns policy?",
        desc: "Try it for 14 days—if it's not right, return for a full refund. Shipping costs may apply on returns."
    }
];

export function Faq() {

    const [openDropdown, setOpenDropdown] = useState(null)

    return (
        <SectionLayout style={{backgroundImage: `url(${texture.src})`}} containerClasses={"border-t-3 border-gold-100"}>
            <motion.h2 {...fadeInUp} className="text-3xl md:text-5xl">Frequently Asked <span className="px-2 py-2 text-white font-bold bg-oBlue-100">Questions</span></motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 md:mt-20">
                <ul className="divide-y">
                    {
                        faqs.map(({ title, desc }, index) => (
                            <li key={title} className="py-10">
                                <motion.button {...fadeInUp} className="flex gap-6 items-center text-left cursor-pointer" onClick={() => setOpenDropdown(openDropdown === index + 1 ? null : index + 1)}>
                                    <span className="text-oBlue-100">
                                        { openDropdown === index + 1 ? <MinusIcon/> : <PlusIcon/>}
                                    </span>
                                    {title}
                                </motion.button>
                                <AnimatePresence>
                                    {
                                        openDropdown === index + 1 &&
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{
                                                duration: 0.3,
                                                ease: "easeInOut"
                                            }}
                                            className="overflow-hidden"
                                        >
                                            <motion.p
                                                initial={{ y: -10 }}
                                                animate={{ y: 0 }}
                                                transition={{ delay: 0.1, duration: 0.2 }}
                                                className="pt-4"
                                            >
                                                {desc}
                                            </motion.p>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </li>
                        ))
                    }
                </ul>
                <picture>
                    <Image src={faqImage} alt="faq layout image" className="w-full h-auto" />
                </picture>
            </div>
        </SectionLayout>
    )
}