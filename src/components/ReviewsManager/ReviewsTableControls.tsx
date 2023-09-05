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
        <HStack>
            <Text>Category:</Text>
            <CategorySelect
                category={controls.category}
                setCategory={value => setControls({...controls, category: value})}
            />
            <Text>Sort by:</Text>
            <SortSelect
                sort={controls.sortBy}
                setSort={value => setControls({...controls, sortBy: value})}
            />
        </HStack>
    </>
}

export default ReviewsTableControls