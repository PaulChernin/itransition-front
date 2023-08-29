import { Container } from "@chakra-ui/react"
import Header from "../components/Header/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return <>
        <Container>
            <Header/>
            <Outlet/>
        </Container>
    </>
}

export default Layout