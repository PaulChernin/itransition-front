import { useTranslation } from "react-i18next"
import Select from "../../ui/Select/Select"

type SortSelectProps = {
    sort: string,
    setSort: (value: string) => void
}

const categories = ['date', 'name'] // TODO: в отдельный файл

// TODO: переименовать в SortTypeSelect
const SortSelect = ({ sort, setSort }: SortSelectProps) => {
    const { t } = useTranslation()

    const options = categories.map(category => {
        return {
            label: t('reviews-manager.sort.' + category),
            value: category
        }
    })
    
    return <Select
        options={options}
        value={sort}
        setValue={setSort}
    />
}

export default SortSelect