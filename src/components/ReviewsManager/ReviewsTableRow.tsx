import { Button, Td, Tr } from "@chakra-ui/react"
import { Review } from "./types/Review"
import { useTranslation } from "react-i18next"

type ReviewsTableRowProps = {
    review: Review,
    open: () => void,
    edit: () => void,
    remove: () => void
}

const ReviewsTableRow = ({ review, open, edit, remove }: ReviewsTableRowProps) => {
    const { t } = useTranslation()

    return <>
        <Tr>
            <Td>{review.title}</Td>
            <Td>
                <Button onClick={open}>{t('open')}</Button>
            </Td>
            <Td>
                <Button onClick={edit}>{t('edit')}</Button>
            </Td>
            <Td>
                <Button onClick={remove}>{t('delete')}</Button>
            </Td>
        </Tr>
    </>
}

export default ReviewsTableRow