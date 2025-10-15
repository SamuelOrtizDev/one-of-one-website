    export default function getRealStep(step, userChoice) {
        const isOneMoreStep = userChoice.textType === "Custom Quote" ? false : true
        return isOneMoreStep ? step + 1 : step
    } 