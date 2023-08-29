// import { useTranslation } from "react-i18next"
// import { Button } from '@chakra-ui/react'
// import redirectAuthHandler from "../../auth/vkAuth"

import { Outlet } from "react-router-dom"
import Tabs from "./components/Tabs"


function FeedPage() {
  // const { t } = useTranslation()

  return (
    <>
      <Tabs/>
      <Outlet/>
        {/* <div>{t('title')}</div> */}
        {/* <Button onClick={redirectAuthHandler}>auth</Button> */}
    </>
  )
}

export default FeedPage
