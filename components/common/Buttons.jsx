import { ArrowRight } from "./Icons"

export function PrimaryCTA() {
    return (
        <button className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 px-8 py-2 bg-gradient-to-r from-oOrange-100 to-oOrange-200 group flex items-center gap-4 text-white h-fit">
            Begin Your Journey
            <span className="group-hover:translate-x-1 transition-transform">
                <ArrowRight />
            </span>
        </button>
    )
}