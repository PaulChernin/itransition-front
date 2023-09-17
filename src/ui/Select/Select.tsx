import { Select as ChakraSelect } from "chakra-react-select"

type Option<T> = {
    label: string,
    value: T,
}

type SelectProps<T> = {
    options: Array<Option<T>>,
    value: T,
    setValue: (value: T) => void
}

const Select = <T,>({ options, value, setValue }: SelectProps<T>) => {
    return <ChakraSelect
        options={options}
        value={options.find(option => option.value === value)}
        onChange={option => option && setValue(option.value)}
    />
}

export default Select