import { Product } from "./types/Product"
import { useTranslation } from "react-i18next"
import CardContrast from "@/ui/CardContrast"
import { createRating, getAverageRating } from "./api/api"
import { useEffect, useState } from "react"
import { Flex, Text } from "@chakra-ui/react"
import Rating from "./StarRatings"
import { useProfileStore } from "@/hooks/profile/useProfileStore"

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    const {t} = useTranslation()
    const categoryName = t('categories.' + product.categoryName)
    const [averageRating, setAverageRating] = useState(0)
    const profile = useProfileStore(state => state.profile)

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
                <Text fontWeight='semibold' fontSize='lg'>
                    {categoryName}: {product.name}
                </Text>
                <Rating
                    value={averageRating}
                    setValue={changeRating}
                    active={!!profile}
                />
            </Flex>
        </CardContrast>
    </>
}

export default ProductCard