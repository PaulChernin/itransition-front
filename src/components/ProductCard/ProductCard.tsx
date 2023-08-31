import { Box, useColorModeValue } from "@chakra-ui/react"
import { Product } from "./types/Product"
import { useTranslation } from "react-i18next"

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const {t} = useTranslation()
    const categoryName = t('categories.' + product.categoryName)

    return <>
        <Box
            padding={5}
            bgColor={useColorModeValue('gray.100', 'gray.900')}
        >
            <div>{categoryName}: {product.name} ()</div>
        </Box>
    </>
}

export default ProductCard