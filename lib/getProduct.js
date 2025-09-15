import { storefront } from "@/lib";
import { productQuery } from "@/query";

export async function getProducts() {
    try {
        const { data } = await storefront(productQuery);
        const productsGroup1 = data.products.edges[0].node.variants.edges.map(variant => ({
            id: variant.node.id,
            title:variant.node.title,
            price: variant.node.price.amount
        }))

        const productsGroup2 = data.products.edges[1].node.variants.edges.map(variant => ({
            id: variant.node.id,
            title:variant.node.title,
            price: variant.node.price.amount
        }))

        return {
            group1: productsGroup1,
            group2: productsGroup2
        }

    } catch (error) {
        console.error('Error fetching products:', error);
        return []
    }
}