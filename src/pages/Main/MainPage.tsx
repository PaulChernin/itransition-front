import { useTranslation } from "react-i18next"
import { Button } from '@chakra-ui/react'
import redirectAuthHandler from "../../auth/vkAuth"

function MainPage() {
  const { t } = useTranslation()

  return (
    <>
        <div>{t('title')}</div>
        <Button onClick={redirectAuthHandler}>auth</Button>
    </>
  )
}

export default MainPage
