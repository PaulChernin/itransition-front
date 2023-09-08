import { NumberInput, NumberInputField } from "@chakra-ui/react"

type InputNumber = {
    value: number | null,
    setValue: (value: number | null) => void
}

const InputNumber = ({ value, setValue }: InputNumber) => {
    const onChange = (value: string) => {
        setValue(value ? parseInt(value) : null)
    }
    
    return (
        <NumberInput
            value={value || ''}
            onChange={onChange}
        >
            <NumberInputField />
        </NumberInput>
    )
}

export default InputNumber