import { Button, Textarea } from "@chakra-ui/react"
import { useState } from "react"

type CommentSenderProps = {
    send: (text: string) => void
}

const CommentSender = ({ send }: CommentSenderProps) => {
    const [text, setText] = useState('')
    
    return <>
        <Textarea
            value={text}
            onChange={e => setText(e.target.value)}
        />
        <Button
            onClick={() => send(text)}
        >
            Send
        </Button>
    </>
}

export default CommentSender