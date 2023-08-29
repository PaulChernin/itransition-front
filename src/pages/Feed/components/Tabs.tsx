import { Button, Stack } from "@chakra-ui/react"
import { Link } from "react-router-dom"


const Tabs = () => {
    return <Stack direction='row' spacing={2}>
        <Link to='/feed/best'><Button>Best</Button></Link>
        <Link to='/feed/latest'><Button>Latest</Button></Link>
    </Stack>
}

export default Tabs