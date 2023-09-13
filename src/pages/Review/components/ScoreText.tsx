import { Box } from "@chakra-ui/react"

type ScoreTextProps = {
    score: number
}

const ScoreText = ({ score }: ScoreTextProps) => {
    return <>
        <Box fontSize='2em'>
            {score} / 10
        </Box>
    </>
}

export default ScoreText