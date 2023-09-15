import { Product } from "./Product"
import { User } from "./User"

export type Review = {
    id: number,
    title: string,
    text: string,
    author: User,
    product: Product,
    authorsScore: number,
    tags: Array<string>,
    imageUrl: string
    likesCount: number,
    commentsCount: number
}