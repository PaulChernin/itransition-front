import StarRatings from "react-star-ratings"

type RatingProps = {
    value: number,
    setValue: (value: number) => void,
    active: boolean
}

const Rating = ({ value, setValue, active }: RatingProps) => {
    return <>
        <StarRatings
            rating={value}
            starRatedColor="yellow"
            starHoverColor="yellow"
            changeRating={active ? setValue : undefined}
            numberOfStars={5}
            starDimension="24px"
            starSpacing="4px"
        />
    </>
}

export default Rating