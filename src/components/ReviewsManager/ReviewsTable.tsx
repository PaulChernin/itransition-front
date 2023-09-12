import { Table, TableContainer, Tbody } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { Review } from "./types/Review"
import ReviewsTableRow from "./ReviewsTableRow"

type ReviewsTableProps = {
    reviews: Array<Review>,
    remove: (id: number) => void
}

const ReviewsTable = ({ reviews, remove }: ReviewsTableProps) => {
    const navigate = useNavigate()
    
    const open = (id: number) => {
        navigate('/review/' + id)
    }

    const edit = (id: number) => {
        navigate('/review-edit/' + id)
    }

    return <>
        <TableContainer>
            <Table size='sm'>
                <Tbody>
                    {reviews.map(review =>
                        <ReviewsTableRow
                            key={review.id}
                            review={review}
                            open={() => open(review.id)}
                            edit={() => edit(review.id)}
                            remove={() => remove(review.id)}
                        />
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    </>
}

export default ReviewsTable