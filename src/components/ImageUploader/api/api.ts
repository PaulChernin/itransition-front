import fetch from "../../../api/fetch"

type UploadImageResponse = {
    url: string
}

const uploadImage = async (image: File) => {
    const formData = new FormData()
    formData.append('image', image)
    const response: UploadImageResponse = await fetch('/image/create', formData)
    return response.url
}

export default uploadImage