import { Product } from "./types/Product"

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    return <>
        <div>{product.categoryId}: {product.name} ()</div>
    </>
}

export default ProductCard