import { User } from "@/types/User"
import fetch from "../../../api/fetch"

export const getUsers = async () => {
    const response: Array<User> = await fetch('/user/get/all')
    return response
}