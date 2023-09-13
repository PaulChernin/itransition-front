import { Box, VStack, useColorModeValue } from "@chakra-ui/react"
import { Option } from "../types/option"

type SelectOptionsListProps<T> = {
    options: Array<Option<T>>,
    select: (option: Option<T>) => void
}

const SelectOptionsList = <T extends number | string>({ options, select }: SelectOptionsListProps<T>) => {
    const hoverBg = useColorModeValue('gray.100', 'gray.900')
    
    return <>
        <VStack>
            {options.map(option =>
                <Box
                    key={option.value}
                    onClick={() => select(option)}
                    width='100%'
                    _hover={{ bgColor: hoverBg }}
                    cursor='pointer'
                >
                    {option.label}
                </Box>
            )}
        </VStack>
    </>
}

export default SelectOptionsList