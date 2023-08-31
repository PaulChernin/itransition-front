import { Product } from "../../ProductCard/types/Product"

export type Preview = {
    id: number,
    title: string,
    product: Product,
    tags: Array<string>
}