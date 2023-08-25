import { useTranslation } from "react-i18next"
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher"
import ThemeModeSwitcher from "../../components/ThemeModeSwitcher/ThemeModeSwitcher"

function MainPage() {
  const { t } = useTranslation()

  return (
    <>
        <LanguageSwitcher/>
        <div>{t('title')}</div>

        <ThemeModeSwitcher/>
    </>
  )
}

export default MainPage
