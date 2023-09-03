import { Container } from "@chakra-ui/react"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return <>
        <Container
            marginBottom={10}
        >
            <Header/>
            <Outlet/>
        </Container>
    </>
}

export default Layout