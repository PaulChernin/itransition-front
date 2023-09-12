import { Product } from "./types/Product"
import { useTranslation } from "react-i18next"
import CardContrast from "@/ui/CardContrast"

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const {t} = useTranslation()
    const categoryName = t('categories.' + product.categoryName)

    return <>
        <CardContrast>
            <div>{categoryName}: {product.name}</div>
        </CardContrast>
    </>
}

export default ProductCard