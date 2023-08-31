import { Product } from "../../../../components/ProductCard/types/Product"

export type Review = {
    id: number,
    title: string,
    text: string,
    author: {
        id: number,
        nick: string
    },
    product: Product,
    authorsScore: number,
    tags: Array<string>,
    likesCount: number
}