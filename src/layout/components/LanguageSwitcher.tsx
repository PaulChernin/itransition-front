import { useTranslation } from "react-i18next"
import { Flex } from "@chakra-ui/react"
import languages from "../../i18n/languages"
import Select from "../../ui/Select/Select"
import { changeLanguage } from "@/i18n/i18n"

const LanguageSwitcher = () => {
    const { t, i18n } = useTranslation()
    const options = Object.keys(languages).map(code => {
        return {
            label: code,
            value: code
        }
    })

    return <>
        <Flex
            alignItems='center'
            justifyContent='space-between'
            direction='row'
        >
            <div>{t('menu.language')}:</div>
            <Select
                options={options}
                value={i18n.resolvedLanguage}
                setValue={value => value && changeLanguage(value)}
            />
        </Flex>
    </>
}

export default LanguageSwitcher