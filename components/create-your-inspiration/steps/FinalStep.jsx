'use client'
import { quotePositions } from "./Step3"
import { useState, useEffect } from "react";

export function FinalStep({ userChoice }) {

    const selectedQuotePosition = quotePositions.find(quote => quote.value === userChoice.quotePosition)

    const [textColor, setTextColor] = useState('text-white');
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        if (userChoice.imageUrl) {
            const url = URL.createObjectURL(userChoice.imageUrl);
            setImageUrl(url);
            analyzeImageBrightness(url);

            // Cleanup
            return () => URL.revokeObjectURL(url);
        }
    }, [userChoice.imageUrl]);

    const analyzeImageBrightness = (imageSrc) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            canvas.width = img.width;
            canvas.height = img.height;

            ctx.drawImage(img, 0, 0);

            try {
                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                const pixels = imageData.data;

                let totalBrightness = 0;
                const pixelCount = pixels.length / 4; // 4 values per pixel (RGBA)

                for (let i = 0; i < pixels.length; i += 4) {
                    const r = pixels[i];
                    const g = pixels[i + 1];
                    const b = pixels[i + 2];

                    // Fórmula para calcular brillo percibido
                    const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
                    totalBrightness += brightness;
                }

                const averageBrightness = totalBrightness / pixelCount;

                // Si el brillo promedio es mayor a 128 (escala 0-255), es imagen clara
                setTextColor(averageBrightness > 128 ? 'text-black' : 'text-white');

            } catch (error) {
                console.log('No se pudo analizar la imagen, usando texto blanco por defecto');
                setTextColor('text-white');
            }
        };

        img.onerror = () => {
            setTextColor('text-white'); // Fallback
        };

        img.src = imageSrc;
    };

    return (
        <div className="flex flex-col justify-center lg:flex-row gap-8 md:gap-12 text-[#072E3F] mx-auto max-w-6xl">
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
                className={`${userChoice.orientation === "landscape"
                    ? "aspect-[4/3] w-full md:h-[380px] md:w-auto"
                    : "aspect-[3/4] w-full md:w-[380px] h-auto"
                    } bg-cover bg-center rounded-xl p-6 ${userChoice.frame ? "border-4 border-amber-700" : ""
                    } flex ${selectedQuotePosition.position}`}
            >
                <p className={`font-bold text-3xl ${textColor}`}>{userChoice.quote}</p>
            </div>

            <article>
                <h3 className="font-bold text-2xl md:text-4xl">Your Inspiration is <span className="text-blue-200">Created!</span></h3>
                <p className="text-wrap">Here's a preview, if it looks amazing to you... go to checkout</p>

                <ul className="flex flex-col gap-2 my-6">
                    <li><strong className="font-bold text-blue-200">Quote:</strong> {userChoice.quote}</li>
                    <li><strong className="font-bold text-blue-200">Orientation:</strong> {userChoice.orientation}</li>
                    <li><strong className="font-bold text-blue-200">Quote Position:</strong> {userChoice.quotePosition}</li>
                    <li><strong className="font-bold text-blue-200">Font:</strong> {userChoice.font}</li>
                    <li><strong className="font-bold text-blue-200">Material:</strong> {userChoice.material}</li>
                    <li><strong className="font-bold text-blue-200">Size:</strong> {userChoice.size}</li>
                    <li><strong className="font-bold text-blue-200">Frame:</strong> {userChoice.frame ? "Yes" : "No"}</li>
                </ul>

                <button className="rounded-full font-bold transition-all ease-in-out duration-300 cursor-pointer hover:brightness-110 hover:saturate-200 md:px-8 px-4 py-2 bg-gradient-to-r from-oOrange-100 to-oOrange-200 group flex items-center gap-4 text-white h-fit mt-auto">Checkout Button</button>
            </article>
        </div>
    )
}