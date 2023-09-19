import { Heading } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
    const { t } = useTranslation()
    
    return <>
        <Heading as='h1' size='2xl' textAlign='center'>
            {t('error.error-occured')}
        </Heading>
    </>
}

export default NotFoundPage