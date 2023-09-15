export type Comment = { // перенести файл
    id: number,
    user: { // использовать тип Profile
        id: number,
        nick: string
    },
    text: string
}