import { HStack, Text } from "@chakra-ui/react"
import { TableControls } from "./types/TableControls"
import SortSelect from "./SortSelect"
import CategorySelect from "../CategorySelect/CategorySelect"

type ReviewsTableControlsProps = {
    controls: TableControls,
    setControls: (value: TableControls) => void
}

const ReviewsTableControls = ({ controls, setControls }: ReviewsTableControlsProps) => {
    return <>
        <HStack wrap='wrap'>
            <HStack>
                <Text>Category:</Text>
                <CategorySelect // TODO: дублирование
                    category={controls.category}
                    setCategory={value => setControls({...controls, category: value})}
                />
            </HStack>
            <HStack>
                <Text>Sort by:</Text>
                <SortSelect
                    sort={controls.sortBy}
                    setSort={value => setControls({...controls, sortBy: value})}
                />
            </HStack>
        </HStack>
    </>
}

export default ReviewsTableControls