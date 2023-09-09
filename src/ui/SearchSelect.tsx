import {  Box, Input, Popover, PopoverBody, PopoverContent, PopoverTrigger, VStack, useDisclosure } from "@chakra-ui/react"

type Option<T> = {
    label: string,
    value: T
}

type SearchSelectProps<T> = {
    input: string,
    onInput: (value: string) => void,
    options: Array<Option<T>>,
    onSelect: (value: Option<T>) => void
}

const SearchSelect = <T extends number | string>({ input, onInput, options, onSelect }: SearchSelectProps<T>) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return <>     
        <Popover
            isOpen={isOpen}
            autoFocus={false}
            closeOnBlur={false}
            returnFocusOnClose={false}
        >
            <PopoverTrigger>
                <Input
                    value={input}
                    onChange={e => onInput(e.target.value)}
                    width={'200px'}
                    onFocus={onOpen}
                    onBlur={onClose}
                />
            </PopoverTrigger>
            <PopoverContent
                width={'200px'}
            >
                <PopoverBody>
                    <VStack>
                        {options.map(option =>
                            <Box
                                key={option.value}
                                onClick={() => onSelect(option)}
                                width='100%'
                                _hover={{ bgColor: 'gray.100' }} // TODO: add dark mode
                                cursor='pointer'
                            >
                                {option.label}
                            </Box>
                        )}
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>

    </>
}

export default SearchSelect