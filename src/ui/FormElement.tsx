import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react"
import { ReactNode } from "react"

type FormElementProps = {
    label: string,
    children: ReactNode,
    isInvalid?: boolean,
    errorMessage?: string
}

const FormElement = ({ label, children, isInvalid, errorMessage }: FormElementProps) => {
    return <>
        <FormControl isInvalid={isInvalid}>
            <FormLabel>{label}</FormLabel>
            {children}
            <FormErrorMessage>{errorMessage}</FormErrorMessage>
        </FormControl>
    </>
}

export default FormElement