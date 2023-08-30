import { useTranslation } from "react-i18next"
import { Select } from "chakra-react-select"
import { Flex } from "@chakra-ui/react"
import languages from "../../i18n/languages"

const LanguageSwitcher = () => {
    const { i18n } = useTranslation()
    const options = Object.keys(languages).map(code => {
        return {
            label: code,
            value: code
        }
    })

    return <>
        <div>
            {/* {codes.map((code) => (
                <button
                    key={code}
                    style={{ fontWeight: i18n.resolvedLanguage === code ? 'bold' : 'normal' }}
                    onClick={() => i18n.changeLanguage(code)}
                >
                    {code}
                </button>
            ))} */}
            <Flex
                alignItems='center'
                justifyContent='space-between'
                direction='row'
            >
                <div>Language:</div>
                <Select
                    options={options}
                    value={options.find(option => option.value === i18n.resolvedLanguage)}
                    onChange={option => option && i18n.changeLanguage(option.value)}
                />
            </Flex>

            
        </div>
    </>
}

export default LanguageSwitcher