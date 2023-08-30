import { Box, Button, Textarea } from "@chakra-ui/react"
import { useState } from "react"

type CommentSenderProps = {
    send: (text: string) => void
}

const CommentSender = ({ send }: CommentSenderProps) => {
    const [text, setText] = useState('')
    
    return <>
        <Box marginTop={3}>
            <Textarea
                value={text}
                onChange={e => setText(e.target.value)}
                marginBottom={3}
            />
            <Button
                onClick={() => send(text)}
            >
                Send
            </Button>
        </Box>
    </>
}

export default CommentSender