import { HStack, Text } from "@chakra-ui/react"
import { TableControls } from "./types/TableControls"
import SortSelect from "./SortSelect"
import CategorySelect from "../CategorySelect/CategorySelect"
import { useTranslation } from "react-i18next"

type ReviewsTableControlsProps = {
    controls: TableControls,
    setControls: (value: TableControls) => void
}

const ReviewsTableControls = ({ controls, setControls }: ReviewsTableControlsProps) => {
    const { t } = useTranslation()
    
    return <>
        <HStack wrap='wrap'>
            <HStack>
                <Text>{t('reviews-manager.category')}:</Text>
                <CategorySelect
                    category={controls.category}
                    setCategory={value => setControls({...controls, category: value})}
                />
            </HStack>
            <HStack>
                <Text>{t('reviews-manager.sort-by')}:</Text>
                <SortSelect
                    sort={controls.sortBy}
                    setSort={value => setControls({...controls, sortBy: value})}
                />
            </HStack>
        </HStack>
    </>
}

export default ReviewsTableControls