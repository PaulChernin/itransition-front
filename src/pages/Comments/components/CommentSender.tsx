import { Button, Text, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useTranslation } from "react-i18next"

type CommentSenderProps = {
    send: (text: string) => void
}

const CommentSender = ({ send }: CommentSenderProps) => {
    const [text, setText] = useState('')
    const { t } = useTranslation()

    return <>
        <VStack
            spacing={3}
            marginTop={6}
            alignItems='flex-start'
        >
            <Text>Your comment:</Text>
            <Textarea
                value={text}
                onChange={e => setText(e.target.value)}
            />
            <Button
                onClick={() => send(text)}
            >
                {t('send')}
            </Button>
        </VStack>
    </>
}

export default CommentSender