import { FileUploader } from "react-drag-drop-files"
import uploadImage from "./api/api"

type ImageUploaderProps = {
    setUrl: (value: string) => void
}

const ImageUploader = ({ setUrl }: ImageUploaderProps) => {
    const handleChange = async (file: File) => {
        const url = await uploadImage(file)
        setUrl(url)
    }

    return <>
        <FileUploader
            handleChange={handleChange}
            name="file"
            types={['jpg', 'jpeg']}
        />
    </>
}

export default ImageUploader