export type Review = {
    title: string,
    text: string,
    authorScore: number | null,
    imageUrl: string | null,
    tags: Array<string>
}