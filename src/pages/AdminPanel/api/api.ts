import fetch from "../../../api/fetch"
import { User } from "../types/User"

export const getUsers = async () => {
    const response: Array<User> = await fetch('/user/get/all') // использовать тип Profile
    return response
}