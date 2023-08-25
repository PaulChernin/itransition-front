import { Container } from "@chakra-ui/react"
import Header from "../components/Header/Header"
import { RouterProvider } from "react-router-dom"
import router from "../router/router"

const Layout = () => {
    return <>
        <Container>
            <Header/>
            <RouterProvider router={router} />
        </Container>
    </>
}

export default Layout