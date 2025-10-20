import { cartCreateMutation } from "@/query";
import { storefront } from ".";

export async function checkout(variantId, userCustomization) {
    const attributes = [
        { key: "Image URL", value: userCustomization.imageUrl || "" },
        { key: "Customized Quote", value: userCustomization.quote || "" },
        { key: "Orientation", value: userCustomization.orientation || "" },
    ];

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