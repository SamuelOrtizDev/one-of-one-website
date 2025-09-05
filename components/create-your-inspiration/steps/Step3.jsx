export function Step3({ setUserChoice, userChoice }) {

    const orientationOptions = [
        {
            label: "Portrait",
            value: "portrait",
        },
        {
            label: "Landscape",
            value: "landscape",
        },
    ]

    const quotePositions = [
        {
            value: "top-left",
            position: "justify-start items-start"
        },
        {
            value: "top-center",
            position: "justify-center items-start"
        },
        {
            value: "top-right",
            position: "justify-end items-start"
        },
        {
            value: "middle-left",
            position: "justify-start items-center"
        },
        {
            value: "middle-center",
            position: "justify-center items-center"
        },
        {
            value: "middle-right",
            position: "justify-end items-center"
        },
        {
            value: "bottom-left",
            position: "justify-start items-end"
        },
        {
            value: "bottom-center",
            position: "justify-center items-end"
        },
        {
            value: "bottom-right",
            position: "justify-end items-end"
        }
    ]

    const selectOrientation = (value) => {
        setUserChoice(prev => ({
            ...prev,
            orientation: value
        }))
    }

    const selectQuotePosition = (value) => {
        setUserChoice(prev => ({
            ...prev,
            quotePosition: value
        }))
    }

    return (
        <div className="flex flex-col gap-4 text-[#072E3F] py-8">
            <h3 className="font-bold text-2xl md:text-4xl">Give It A <span className="text-blue-200">Twist</span></h3>
            <p><strong>Step 3.</strong> Choose your orientation</p>

            <ul className="flex items-end gap-3 md:gap-6 md:mb-4">
                {
                    orientationOptions.map(({ label, value }) => (
                        <li key={value}>
                            <button onClick={() => selectOrientation(value)} className={`${userChoice.orientation === value ? "border-blue-200 shadow-lg shadow-blue-100/60 font-bold text-blue-200" : "cursor-pointer transition-all shadow-md hover:shadow-lg hover:-translate-y-1 border-blue-200/20"} border-2 grid place-items-center rounded-xl ${value === "portrait" ? "aspect-[3/4] w-[70px] md:w-[130px]" : "aspect-[4/3] h-[70px] md:h-[130px]"}`}>
                                {label}
                            </button>
                        </li>
                    ))
                }
            </ul>

            <p>Place your <strong>quote.</strong></p>

            <ul className="flex items-end gap-3 md:gap-6 overflow-scroll pb-4">
                {
                    quotePositions.map(({value, position}) => (
                        <li key={value}>
                            <button onClick={() => selectQuotePosition(value)} className={`${userChoice.quotePosition === value ? "border-blue-200" : "border-[#F6F6F6] cursor-pointer hover:border-blue-200/10"} border-2 p-3 aspect-square w-[120px] md:w-[130px] bg-[#F6F6F6] rounded-md flex ${position}`}>
                                <small>Quote here</small>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}