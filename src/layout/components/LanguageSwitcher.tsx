import { useTranslation } from "react-i18next"
import { Flex } from "@chakra-ui/react"
import languages from "../../i18n/languages"
import Select from "../../ui/Select"

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
            <div>{t('language')}:</div>
            <Select
                options={options}
                value={i18n.resolvedLanguage}
                setValue={value => value && i18n.changeLanguage(value)}
            />
        </Flex>
    </>
}

export default LanguageSwitcher