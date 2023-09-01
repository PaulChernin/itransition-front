import { Button, Table, TableContainer, Tbody, Td, Tr } from "@chakra-ui/react"
import { Review } from "./types/Review"
import { useNavigate } from "react-router-dom"
import { useTranslation } from "react-i18next"

type ReviewsTableProps = {
    reviews: Array<Review>
}

const ReviewsTable = ({ reviews }: ReviewsTableProps) => {
    const navigate = useNavigate()
    const { t } = useTranslation()
    
    const open = (id: number) => {
        navigate('/review/' + id)
    }

    const edit = (id: number) => {
        navigate('/review-edit/' + id)
    }

    const remove = (id: number) => {
        
    }

    return <>
        <TableContainer>
            <Table size='sm'>
                <Tbody>
                    {reviews.map(review =>
                        <Tr key={review.id}>
                            <Td>{review.title}</Td>
                            <Td>
                                <Button onClick={() => open(review.id)}>
                                    {t('open')}
                                </Button>
                            </Td>
                            <Td>
                                <Button onClick={() => edit(review.id)}>
                                    {t('edit')}
                                </Button>
                            </Td>
                            <Td>
                                <Button onClick={() => remove(review.id)}>
                                    {t('delete')}
                                </Button>
                            </Td>
                        </Tr>
                    )}
                </Tbody>
            </Table>
        </TableContainer>
    </>
}

export default ReviewsTable