import backgroundTexture from "../InspirationForEveryDay/assets/backgroundTexture.webp"
import Image from "next/image"
import luster from "./assets/luster.webp"

export function Luster() {
    return (
        <article className="grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-[1fr_0.5fr] place-items-center">
            <div className="bg-repeat bg-center p-6" style={{ backgroundImage: `url(${backgroundTexture.src})` }}>
                <div className="bg-oCard px-4 py-8 text-xl md:text-2xl font-light text-wrap">
                    Luster adds a gentle shine that highlights details in light. Both use thick, lasting paper. Framed posters come in sturdy boxes with foam protection. Unframed ones arrive rolled in strong tubes to stay flat and safe.
                </div>
            </div>

            <picture>
                <div className="relative">
                    <Image src={luster} alt="matte image" className="h-full w-auto" />
                    <p className="px-6 py-3 bg-oBlue-100 text-white text-xl absolute bottom-0 left-6 font-semibold">This is Luster</p>
                </div>
            </picture>
        </article>
    )
}