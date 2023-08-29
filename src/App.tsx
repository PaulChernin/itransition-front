import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme/theme"
import { RouterProvider } from "react-router-dom"
import router from "./router/router"

const App = () => {

    return (
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    )
}

export default App
