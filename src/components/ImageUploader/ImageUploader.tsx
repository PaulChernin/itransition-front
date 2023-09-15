import uploadImage from "./api/api"
import Dropzone from "react-dropzone"
import { Button } from "@chakra-ui/react"

type ImageUploaderProps = {
    url: string | null,
    setUrl: (value: string) => void
}

const ImageUploader = ({ url, setUrl }: ImageUploaderProps) => {
    const handleChange = async (file: File) => {
        const url = await uploadImage(file)
        setUrl(url)
    }

    const onDrop = (acceptedFiles: Array<File>) => {
        handleChange(acceptedFiles[0])
    }

    return <>
        <Dropzone onDrop={onDrop}>
            {({getRootProps, getInputProps}) => (
                <Button {...getRootProps()}>
                    <input {...getInputProps()} />
                    {url
                        ?
                        <p>Image uploaded</p>
                        :
                        <p>Drag 'n' drop some files here, or click to select files</p>
                    }
                </Button>
            )}
        </Dropzone>
    </>
}

export default ImageUploader