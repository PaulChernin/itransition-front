import { Input, Popover, PopoverBody, PopoverContent, PopoverTrigger, useDisclosure } from "@chakra-ui/react"
import type { Option } from './types/option.ts'
import SelectOptionsList from "./components/SelectOptionsList.tsx"

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
            {options.length > 0 &&
                <PopoverContent width={'200px'}>
                        <PopoverBody padding={0}>
                            <SelectOptionsList
                                options={options}
                                select={onSelect}
                            />
                        </PopoverBody>
                </PopoverContent>
            }
        </Popover>
    </>
}

export default SearchSelect