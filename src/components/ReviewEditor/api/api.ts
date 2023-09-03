import api from "../../../api/api"

const getTagsByPrefix = async (prefix: string) => {
    const response = await api.post('/tag/get/byPrefix', {
        prefix: prefix
    })
    return response.data
}

export {
    getTagsByPrefix
}