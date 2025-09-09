import { storefront } from "@/lib";
import { productQuery } from "@/query";

export async function getProducts() {
    try {
        const { data } = await storefront(productQuery);
        return data.products.edges[0].node.variants.edges.map(variant => ({
            id: variant.node.id,
            title:variant.node.title,
            price: variant.node.price.amount
        }))

    } catch (error) {
        console.error('Error fetching products:', error);
        return []
    }
}