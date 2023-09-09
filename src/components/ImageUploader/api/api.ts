import fetch from "../../../api/fetch"

const uploadImage = async (image: File) => {
    const formData = new FormData()
    formData.append('image', image)
    const response = await fetch('/image/create', formData)
    return response.url as string
}

export default uploadImage