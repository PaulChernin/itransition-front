import { Heading } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
    const { t } = useTranslation()
    
    return <>
        <Heading as='h1' size='2xl' textAlign='center'>
            404 {t('page-not-found')}
        </Heading>
    </>
}

export default NotFoundPage