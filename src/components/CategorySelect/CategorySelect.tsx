import { Select } from "chakra-react-select"
import { useTranslation } from "react-i18next"

type CategorySelectProps = {
    category: number,
    setCategory: (value: number) => void
}

const CategorySelect = ({ category, setCategory }: CategorySelectProps) => {
    const { i18n } = useTranslation()
    const options = Object.keys()
    
    return <>
        <Select
            options={}
        />
    </>
}

export default CategorySelect