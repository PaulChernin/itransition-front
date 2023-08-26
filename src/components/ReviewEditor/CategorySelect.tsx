import { Select } from "@chakra-ui/react"


const CategorySelect = () => {
    return <>
        <Select>
            <option value='1'>Book</option>
            <option value='2'>Game</option>
            <option value='3'>Movie</option>
        </Select>
    </>
}

export default CategorySelect