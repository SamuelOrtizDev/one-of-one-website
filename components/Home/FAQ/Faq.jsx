'use client'
import { ChevronDown } from "@/components/common/Icons";
import SectionLayout from "@/components/common/SectionLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqPosters = [
    {
        title: "What if I don't have my perfect background image or I'm struggling with the aesthetics of quote placement?",
        desc: "We are committed to working with you to create your ideal design, so we have you covered! On the second step of our customization process, you can opt in to describe your perfect image instead of uploading it; we will then generate it for you. The more detail you provide in that section, the greater the odds of us reading your mind! Moreover, if you are unsure of where your inspirational text will look best, we also have the option of 'best fit' which leaves your quote placement up to our graphic designers. If you select either one of these features, we will send you a few digital versions of your poster design within 24 hours - completely free of charge. You will then choose your favorite version (or ask for another edit) and proceed to the checkout page from that email!"
    },
    {
        title: "What is the difference between matte and luster posters?",
        desc: "Matte posters feature our enhanced museum-quality Epson matte paper, delivering a soft, glare-free finish that's perfect for any lighting and resistant to fingerprints—ensuring your artwork looks professional and timeless. Luster posters, on our premium luster photo paper, offer a subtle semi-gloss sheen that brings out vibrant colors, sharp contrasts, and rich details, making them ideal for dynamic designs. Whether you choose matte for elegance or luster for boldness, both options provide amazing quality tailored to your vision."
    },
    {
        title: "What is the print and material quality like for these posters?",
        desc: "Our luster and matte posters are printed with advanced multicolor, water-based inkjet technology on thick paper—museum-grade for matte and ultra-premium for luster—resulting in fade-resistant prints that stand the test of time. Framed versions elevate this with eco-friendly alder semi-hardwood frames from renewable sources, adding a polished, gallery-ready touch."
    },
    {
        title: "How are luster and matte posters packaged to prevent damage?",
        desc: "We take great care in packaging your posters securely: unframed ones are rolled in sturdy tubes to arrive crease-free, while framed versions are nestled in protective boxes with ample padding for safe transit. In the rare event of an issue, we provide reprints or refunds to ensure you're satisfied with your delivery."
    },
    {
        title: "What are the shipping times and costs for these posters?",
        desc: "With our worldwide shipping and no order minimums, you can enjoy quick fulfillment (typically 2–5 business days) followed by reliable delivery (often 3–7 days in the US). We prioritize timely service, and while times may vary slightly by location, rest assured our team works diligently to get your posters to you promptly. For precise costs based on size and destination, see your purchase confirmation email."
    },
    {
        title: "Do Printful posters have any odors, and how long do they last?",
        desc: "Our water-based inks and high-quality papers ensure prints that are not only vibrant but also safe and eco-friendly. Any fresh-print scent is mild and dissipates quickly after unboxing—usually within a few days—leaving you with odor-free, long-lasting artwork. Both finishes are built to endure, with matte's texture and luster's protective coating guarding against fading, so your posters remain stunning for years to come."
    },
    {
        title: "How do I choose sizes and finishes for my posters?",
        desc: "We offer a versatile range of sizes, from compact 12×16 inches to expansive 24x36 inches, in horizontal or vertical orientations to perfectly fit your needs. Our resolution control software ensures good quality prints, so in the case that your provided image is too blurry for the larger prints, we will follow up with you for an alternative version. Additionally, our simple design preview tool lets you visualize the fit and orientation of your poster, even before our graphic designer makes the finishing touches."
    },
    {
        title: "What if my poster arrives damaged or with quality issues?",
        desc: "We're committed to perfection, so if anything isn't quite right upon arrival, simply reach out to oneofoneposters@gmail.com for a hassle-free reprint or refund. Our quality checks and tracked shipping options help prevent issues, making sure you always receive your product in the best state."
    }
];

export function Faq() {

    const [openDropdown, setOpenDropdown] = useState(null)

    return (
        <SectionLayout>
            <h2 className="text-blue-200 font-bold text-2xl md:text-4xl">FAQ's</h2>

            <ul className="mt-6 md:mt-12 flex flex-col gap-3 text-left md:gap-6">
                {
                    faqPosters.map(({ title, desc }, index) => (
                        <li className="bg-gray-100 rounded-xl p-6" key={index}>
                            <button className="flex items-center text-left justify-between w-full cursor-pointer font-bold" onClick={() => setOpenDropdown(openDropdown === index + 1 ? null : index + 1)}>
                                {title}
                                <motion.span animate={{ rotate: openDropdown === index + 1 ? 180 : 0 }}>
                                    <ChevronDown />
                                </motion.span>
                            </button>
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
        </SectionLayout>
    )
}