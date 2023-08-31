import { useTranslation } from "react-i18next"
import { Select } from "chakra-react-select"
import { Flex } from "@chakra-ui/react"
import languages from "../../i18n/languages"

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
                value={options.find(option => option.value === i18n.resolvedLanguage)}
                onChange={option => option && i18n.changeLanguage(option.value)}
            />
        </Flex>
    </>
}

export default LanguageSwitcher