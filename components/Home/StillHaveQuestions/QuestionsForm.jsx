'use client'
import { useForm } from "@formspree/react"
import { motion } from "framer-motion"
import { fadeInUp, scaleIn } from "@/const/animation"
import { Input, TextArea } from "@/components/common/Inputs"
import { Loader } from "@/components/common/Icons"
import { track } from "@vercel/analytics"

export function QuestionsForm() {

    const [state, handleSubmit] = useForm("xzzkgyyy");

    if (state.submitting) {
        return (
                <motion.div {...scaleIn} className="md:w-[50%] h-full grid place-items-center">
                    <span className="scale-200 animate-spin">
                        <Loader/>
                    </span>
                </motion.div>
            )
    }

    if (state.succeeded) {
        return (
            <motion.div {...fadeInUp} className="md:max-w-[50%] h-full flex flex-col items-start gap-1">
                <strong className="font-bold text-xl">Thank You For Reaching Out!!</strong>
                We'll contact you soon
            </motion.div>
        )
    }

    return (
        <motion.form {...fadeInUp} onSubmit={handleSubmit} className="flex flex-col gap-8 md:max-w-[50%]">
            <Input required name={"name"} label={"Name"} />
            <Input required name={"email"} label={"Email"} type="email" />
            <TextArea required name={"message"} label={"Message"} />
            <button onClick={() => track('Contact Form Submission')} className="px-6 py-3 font-medium rounded-lg text-carbon text-center text-nowrap bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 transition-all hover:brightness-110 hover:saturate-200 shadow-xl shadow-transparent hover:shadow-carbon/20 cursor-pointer mt-4">
                Send Message
            </button>
        </motion.form>
    )
}