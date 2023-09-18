import uploadImage from "./api/api"
import Dropzone from "react-dropzone"
import { Button } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

type ImageUploaderProps = {
    url: string | null,
    setUrl: (value: string) => void
}

const ImageUploader = ({ url, setUrl }: ImageUploaderProps) => {
    const { t } = useTranslation()
    
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
                        <p>{t('image-uploaded')}</p>
                        :
                        <p>{t('drag-drop-or-click')}</p>
                    }
                </Button>
            )}
        </Dropzone>
    </>
}

export default ImageUploader