import { useTranslation } from "react-i18next"
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher"

function MainPage() {
  const { t } = useTranslation()

  return (
    <>
        <LanguageSwitcher/>
        <div>{t('title')}</div>
    </>
  )
}

export default MainPage
