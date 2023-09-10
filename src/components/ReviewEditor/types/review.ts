export type Review = {
    productName: string,
    productCategory: string,
    title: string,
    text: string,
    authorScore: number | null,
    imageUrl: string | null,
    tags: Array<string>
}