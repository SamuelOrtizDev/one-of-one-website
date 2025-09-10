import { cartCreateMutation } from "@/query";
import { storefront } from ".";

export async function checkout(variantId, userCustomization) {
    // Crear atributos base
    const attributes = [
        { key: "Image URL", value: userCustomization.imageUrl || "" },
        { key: "Customized Quote", value: userCustomization.quote || "" },
        { key: "Quote Position", value: userCustomization.quotePosition || "" },
        { key: "Orientation", value: userCustomization.orientation || "" },
        { key: "Font", value: userCustomization.font || "" }
    ];

    // Solo agregar frameColor si existe y no está vacío
    if (userCustomization.frameColor && userCustomization.frameColor.trim() !== "") {
        attributes.push({ key: "Frame Color", value: userCustomization.frameColor });
    }

    const variables = {
        variant: variantId,
        attributes: attributes
    };

    const { data } = await storefront(cartCreateMutation, variables);
    return data.cartCreate.cart.checkoutUrl;
}