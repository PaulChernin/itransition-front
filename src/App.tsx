import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme/theme"
import Layout from "./layout/Layout"

const App = () => {

    return (
        <ChakraProvider theme={theme}>
            <Layout/>
        </ChakraProvider>
    )
}

export default App
