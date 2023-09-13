import { useTranslation } from "react-i18next"
import Select from "../../ui/Select/Select"

type CategorySelectProps = {
    category: string,
    setCategory: (value: string) => void
}

const categories = ['book', 'game', 'movie'] // TODO: вынести в отдельный файл

const CategorySelect = ({ category, setCategory }: CategorySelectProps) => {
    const { t } = useTranslation()

    const options = categories.map(category => { // TODO: добавить перевод в сам select
        return {
            label: t('categories.' + category),
            value: category
        }
    })
    
    return <>
        <Select
            options={options}
            value={category}
            setValue={value => value && setCategory(value)}
        />
    </>
}

export default CategorySelect