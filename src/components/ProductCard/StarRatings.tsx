import StarRatings from "react-star-ratings"

type RatingProps = {
    value: number,
    setValue: (value: number) => void
}

const Rating = ({ value, setValue }: RatingProps) => {
    return <>
        <StarRatings
            rating={value}
            starRatedColor="yellow"
            starHoverColor="yellow"
            changeRating={setValue}
            numberOfStars={5}
            starDimension="24px"
            starSpacing="4px"
        />
    </>
}

export default Rating