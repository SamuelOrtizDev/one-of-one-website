import { cartCreateMutation } from "@/query";
import { storefront } from ".";

export async function checkout(variantId, userCustomization) {
    const variables = {
        variant: variantId,
        imageUrl: userCustomization.imageUrl || "",
        quote: userCustomization.quote || "",
        quotePosition: userCustomization.quotePosition || "",
        orientation: userCustomization.orientation || "",
        font: userCustomization.font || ""
    };

    const { data } = await storefront(cartCreateMutation, variables);
    return data.cartCreate.cart.checkoutUrl;
}