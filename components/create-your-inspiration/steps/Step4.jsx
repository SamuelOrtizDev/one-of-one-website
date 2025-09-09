import { quotePositions } from "./Step3"

export function Step4({ setUserChoice, userChoice }) {

    const fontOptions = [
        { name: 'Montserrat', className: 'font-montserrat' },
        { name: 'Raleway', className: 'font-raleway' },
        { name: 'Poppins', className: 'font-poppins' },
        { name: 'Anton', className: 'font-anton' },
        { name: 'Luckiest Guy', className: 'font-luckiest-guy' },
        { name: 'Bangers', className: 'font-bangers' },
        { name: 'Lilita One', className: 'font-lilita-one' },
        { name: 'Alegreya Sans', className: 'font-alegreya-sans' },
        { name: 'Times New Roman', className: 'font-times' },
        { name: 'Aloja (Dancing Script)', className: 'font-dancing-script' },
        { name: 'Marykate (Kalam)', className: 'font-kalam' },
        { name: 'Selima (Great Vibes)', className: 'font-great-vibes' },
        { name: 'Brown Sugar (Satisfy)', className: 'font-satisfy' },
        { name: 'Brasika (Orbitron)', className: 'font-orbitron' },
        { name: 'Chewy', className: 'font-chewy' },
        { name: 'League Spartan', className: 'font-league-spartan' },
        { name: 'Giaza (Stencil)', className: 'font-stencil' },
        { name: 'Pierson (Playfair)', className: 'font-playfair' },
        { name: 'Quick (Quicksand)', className: 'font-quicksand' },
    ]

    const selectFont = (value) => {
        setUserChoice(prev => ({
            ...prev,
            font: value
        }))
    }

    const selectedQuotePosition = quotePositions.find(quote => quote.value === userChoice.quotePosition)

    return (
        <div className="flex flex-col lg:grid grid-cols-2 md:gap-6">
            <div className="flex flex-col gap-4 text-[#072E3F] py-8">
                <h3 className="font-bold text-2xl md:text-4xl">Make It <span className="text-blue-200">Feel Real</span></h3>
                <p><strong>Step 4.</strong> Choose a font</p>

                <ul className="flex items-center gap-3 md:gap-10 overflow-scroll pb-4">
                    {
                        fontOptions.map(({name, className}) => (
                            <li key={name}>
                                <button onClick={() => selectFont(name)} className={`grid border place-items-center rounded-md p-6 w-[120px] aspect-[4/3] ${userChoice.font === name ? "font-bold border-transparent" : " cursor-pointer border-blue-100/20 hover:shadow-xl transition-all"} relative ${className}`}>
                                    {name}

                                    {
                                        userChoice.font === name &&
                                        <div className="absolute bottom-0 w-full h-[4px] rounded-full bg-blue-200"></div>
                                    }
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <article className="flex flex-col items-center gap-4 mb-12 md:mb-0 lg:border-l border-blue-200/20 bg-transparent">
                <div className={`border border-blue-100 m-auto rounded-xl shadow-sm shadow-blue-100/40 p-6 ${userChoice.orientation === "portrait" ? "aspect-[3/4] w-[200px] md:w-[230px]" : "aspect-[4/3] h-[200px] md:h-[230px]"} flex ${selectedQuotePosition.position}`}>
                    <strong>
                        {
                            userChoice.font ? userChoice.font : "Choose Font"
                        }
                    </strong>
                </div>
                <p>Font Preview</p>
            </article>
        </div>
    )
}