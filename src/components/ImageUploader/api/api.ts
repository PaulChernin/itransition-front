import api from "../../../api/api"

const uploadImage = async (image: File) => {
    const formData = new FormData()
    formData.append('image', image)
    const response = await api.post('/image/create', formData)
    return response.data.url
}

export default uploadImage