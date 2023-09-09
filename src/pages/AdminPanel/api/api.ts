import fetch from "../../../api/fetch"
import { User } from "../types/User"

export const getUsers = async () => {
    const response = await fetch('/user/get/all')
    return response as Array<User>
}