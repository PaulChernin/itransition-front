import { User } from "@/types/User"

export type Comment = { // перенести файл
    id: number,
    user: User,
    text: string
}