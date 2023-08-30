import api from "../../../api/api"

export const getUsers = async () => {
    const response = await api.post('/user/get/all')
    return response.data
}