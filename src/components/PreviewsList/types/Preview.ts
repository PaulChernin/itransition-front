import { Product } from "../../ProductCard/types/Product"

export type Preview = { // TODO: использовать тип review
    id: number,
    title: string,
    product: Product,
    tags: Array<string>
}