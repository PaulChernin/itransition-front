export type Comment = {
    id: number,
    user: {
        id: number,
        nick: string
    },
    text: string
}