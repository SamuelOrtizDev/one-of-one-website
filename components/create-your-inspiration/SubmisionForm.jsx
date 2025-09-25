'use client'
import { createPermanentImageURL } from "@/lib/createPermanentImageURL"
import { ArrowRight, Loader } from "../common/Icons"
import { Input } from "../common/Inputs"
import { useForm } from "@formspree/react"
import Link from "next/link"

export function SubmissionForm({ userChoice, setIsFinalStep, setStep }) {

    const [state, handleSubmit] = useForm("xwprpvvo");

    const handleCustomSubmit = async (e) => {
        if (userChoice) {

            const formData = {...userChoice}
            if (userChoice.imageUrl) {
                const savedImage = await createPermanentImageURL(userChoice.imageUrl)
                formData.imageUrl = savedImage
                formData.imageDescription = ""
            }
            if (userChoice.imageDescription.trim() !== "") formData.imageUrl = null

            const userChoiceInput = document.createElement('input');
            userChoiceInput.type = 'hidden';
            userChoiceInput.name = 'userChoice';
            userChoiceInput.value = JSON.stringify(formData)
            e.target.appendChild(userChoiceInput);
        }

        return handleSubmit(e);
    };

    const previousStep = () => {
        setStep(5)
        setIsFinalStep(false)
    }


    return (
        <div className="flex flex-col justify-center gap-8 text-[#072E3F] -mt-12 md:mt-0 mx-auto max-w-2xl">
            {
                state.submitting &&
                <div className="grid place-items-center w-full h-full">
                    <span className="scale-200 animate-spin">
                        <Loader />
                    </span>
                </div>
            }
            {
                state.succeeded &&
                <div className="text-center flex flex-col items-center gap-4">
                    <h3 className="font-bold text-2xl md:text-4xl mb-4">
                        Your inspiration is <span className="text-blue-200">on its way!</span>
                    </h3>
                    <p className="text-lg">
                        Perfect! Check your inbox within 24 hours for your personalized poster designs and checkout link.
                    </p>

                    <Link href={"/"} className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 px-4 py-2 bg-gradient-to-r from-oOrange-100 to-oOrange-200 group flex items-center justify-center gap-4 text-white mt-4">
                        Go Back
                    </Link>
                </div>
            }
            {
                (!state.submitting && !state.succeeded) &&
                <>
                    <span className="flex flex-col gap-2">
                        <h3 className="font-bold text-2xl md:text-4xl text-wrap">Your inspiration is <span className="text-blue-200">being crafted!</span></h3>
                        <p className="text-wrap">We will send you an email where you can select your preferred poster design within 24 hours! Please provide your name and email to receive our confirmation and checkout email.</p>
                    </span>
                    <form onSubmit={handleCustomSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <Input required label={'Name:'} placeholder={"John"} name={"name"} />
                        <Input required label={'Last:'} placeholder={"Doe"} name={"last"} />
                        <Input required label={'Email:'} type="email" className={'col-span-full'} placeholder={"johndoe@gmail.com"} name={"email"} />
                        <div className="flex items-center gap-3 col-span-full flex-wrap mt-12">
                            <button onClick={previousStep} className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 md:px-8 px-4 py-2 bg-gradient-to-r from-blue-200 to-blue-100 group flex flex-row-reverse items-center gap-4 text-white h-fit">
                                Back
                                <span className="group-hover:-translate-x-1 transition-transform rotate-180">
                                    <ArrowRight />
                                </span>
                            </button>

                            <button className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 px-4 py-2 bg-gradient-to-r from-oOrange-100 to-oOrange-200 group flex items-center justify-center gap-4 text-white">
                                Send
                                <span className="group-hover:translate-x-1 transition-transform">
                                    <ArrowRight />
                                </span>
                            </button>
                        </div>
                    </form>
                </>
            }
        </div>
    )
}