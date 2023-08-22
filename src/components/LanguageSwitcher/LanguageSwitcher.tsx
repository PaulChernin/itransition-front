import { useTranslation } from "react-i18next"
import languages from "../../i18n/languages"


const LanguageSwitcher = () => {
    const { i18n } = useTranslation()
    const codes = Object.keys(languages)

    return <>
        <div>
            {codes.map((code) => (
                <button
                    key={code}
                    style={{ fontWeight: i18n.resolvedLanguage === code ? 'bold' : 'normal' }}
                    onClick={() => i18n.changeLanguage(code)}
                >
                    {code}
                </button>
            ))}
        </div>
    </>
}

export default LanguageSwitcher