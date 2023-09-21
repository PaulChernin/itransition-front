import { User } from "@/types/User"

export type Comment = {
    id: number,
    user: User,
    text: string
}