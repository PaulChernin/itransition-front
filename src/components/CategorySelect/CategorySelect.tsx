import { Select } from "chakra-react-select"
import { useTranslation } from "react-i18next"

type CategorySelectProps = {
    category: string,
    setCategory: (value: string) => void
}

const categories = ['book', 'game', 'movie']

const CategorySelect = ({ category, setCategory }: CategorySelectProps) => {
    const { t } = useTranslation()

    const options = categories.map(category => {
        return {
            label: t('categories.' + category),
            value: category
        }
    })
    
    return <>
        <Select
            options={options}
            value={options.find(option => option.value === category)}
            onChange={option => option && setCategory(option.value)}
        />
    </>
}

export default CategorySelect