import { Product } from "./types/Product"
import { useTranslation } from "react-i18next"
import CardContrast from "@/ui/CardContrast"
import { createRating, getAverageRating } from "./api/api"
import { useEffect, useState } from "react"
import { Flex, Text } from "@chakra-ui/react"
import Rating from "./StarRatings"

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const {t} = useTranslation()
    const categoryName = t('categories.' + product.categoryName)
    const [averageRating, setAverageRating] = useState(0)

    const loadAverage = async () => {
        setAverageRating(await getAverageRating(product.id))
    }

    useEffect(() => {
        loadAverage()
    }, [product])

    const changeRating = async (rating: number) => {
        await createRating(product.id, rating)
        loadAverage()
    }

    return <>
        <CardContrast>
            <Flex
                direction='row'
                justify='space-between'
                alignItems='center'
                wrap='wrap'
            >
                <Text>{categoryName}: {product.name}</Text>
                <Rating
                    value={averageRating}
                    setValue={changeRating}
                />
            </Flex>
        </CardContrast>
    </>
}

export default ProductCard