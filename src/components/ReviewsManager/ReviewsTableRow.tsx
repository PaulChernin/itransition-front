import { Review } from "@/types/Review"
import { Button, Td, Tr } from "@chakra-ui/react"
import { useTranslation } from "react-i18next"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

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
            <Td width='99%'>{review.title}</Td>
            <Td>
                <Button onClick={open}>{t('open')}</Button>
            </Td>
            <Td>
                <Button onClick={edit}><AiFillEdit/></Button>
            </Td>
            <Td>
                <Button onClick={remove}><AiFillDelete/></Button>
            </Td>
        </Tr>
    </>
}

export default ReviewsTableRow