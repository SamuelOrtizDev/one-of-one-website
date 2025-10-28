import backgroundTexture from "../InspirationForEveryDay/assets/backgroundTexture.webp"
import Image from "next/image"
import posterLook from "./assets/posterLook.webp"

export function PosterLook() {
    return (
        <article className="grid gap-6 md:gap-12 grid-cols-1 md:grid-cols-[1fr_0.5fr] place-items-center">
            <div className="bg-repeat bg-center p-6" style={{ backgroundImage: `url(${backgroundTexture.src})` }}>
                <div className="bg-oCard px-4 py-8 text-xl md:text-2xl font-light text-wrap">
                    Want to add a luxury touch and save the hustle of finding a frame that fits your poster's size? We provide a variety of frame sizes and colors to suit your tastes.
                </div>
            </div>

            <picture>
                <div className="relative">
                    <Image src={posterLook} alt="matte image" className="h-full w-auto" />
                    <p className="px-6 py-3 bg-oBlue-100 text-white text-xl absolute bottom-0 left-6 font-semibold">Poster Look</p>
                </div>
            </picture>
        </article>
    )
}