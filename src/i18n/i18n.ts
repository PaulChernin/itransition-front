import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import languages from "./languages"

const getInitLanguage = () => localStorage.getItem('language') || 'en'

i18n.use(initReactI18next)
    .init({ resources: languages })

i18n.changeLanguage(getInitLanguage())

export const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    localStorage.setItem('language', language)
}

export default i18n