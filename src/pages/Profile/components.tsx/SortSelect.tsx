import { useTranslation } from "react-i18next"
import Select from "../../../ui/Select"

type SortSelectProps = {
    sort: string,
    setSort: (value: string) => void
}

const categories = ['date', 'name']

const SortSelect = ({ sort, setSort }: SortSelectProps) => {
    const { t } = useTranslation()

    const options = categories.map(category => {
        return {
            label: t('categories.' + category),
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