import { RouterProvider } from "react-router-dom"
import router from "./router/router"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "./theme/theme"

function App() {

    return (
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    )
}

export default App
