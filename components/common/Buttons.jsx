import Link from "next/link"

export function PrimaryCTA({ label, href = "/create-your-inspiration", variant = "primary" }) {

    if (variant === "white") {
        return (
            <Link href={href} className="px-6 py-3 font-medium rounded-lg text-carbon w-fit text-nowrap bg-gradient-to-r from-[#F0F0F0C2] to-white transition-all hover:saturate-200 shadow-xl shadow-transparent hover:shadow-carbon/20">
                {label ? label : 'Create Your Inspiration'}
            </Link>
        )
    }

    return (
        <Link href={href} className="px-6 py-3 font-medium rounded-lg text-carbon w-fit text-nowrap bg-gradient-to-r from-gold-200 via-gold-100 to-gold-200 transition-all hover:brightness-110 hover:saturate-200 shadow-xl shadow-transparent hover:shadow-carbon/20">
            {label ? label : 'Create Your Inspiration'}
        </Link>
    )
}

export function SecondaryCTA({ label, href = "/create-your-inspiration" }) {
    return (
        <Link href={href} className="px-6 py-3 font-medium rounded-lg text-white w-fit text-nowrap bg-oBlue-100 transition-all hover:saturate-200">
            {label ? label : 'Create Your Inspiration'}
        </Link>
    )
}