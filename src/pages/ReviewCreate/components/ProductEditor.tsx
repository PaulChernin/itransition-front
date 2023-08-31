import { FormControl, FormLabel, Input } from "@chakra-ui/react"
import CategorySelect from "../../../components/CategorySelect/CategorySelect"
import { useTranslation } from "react-i18next"

export type Product = {
    name: string,
    category: string
}

type ReviewEditorProps = {
    product: Product,
    setProduct: (value: Product) => void
}

const ProductEditor = ({ product, setProduct }: ReviewEditorProps) => {
    const { t } = useTranslation()
    
    return <>
        <FormControl>
            <FormLabel>{t('publish')}</FormLabel>
            <CategorySelect
                category={product.category}
                setCategory={value => setProduct({...product, category: value})}
            />
        </FormControl>
        <FormControl>
            <FormLabel>{t('name')}</FormLabel>
            <Input
                value={product.name}
                onChange={e => setProduct({...product, name: e.target.value})}
            />
        </FormControl>
    </>
}

export default ProductEditor