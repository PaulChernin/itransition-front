import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import CategorySelect from "./CategorySelect"

export type Product = {
    name: string,
    category: number
}

type ReviewEditorProps = {
    product: Product,
    setProduct: (value: Product) => void
}

const ProductEditor = ({ product, setProduct }: ReviewEditorProps) => {
    return <>
        <FormControl>
            <FormLabel>Category</FormLabel>
            <CategorySelect

            />
        </FormControl>
        <FormControl>
            <FormLabel>Product Name</FormLabel>
            <Input
                value={product.name}
                onChange={e => setProduct({...product, name: e.target.value})}
            />
        </FormControl>
    </>
}

export default ProductEditor