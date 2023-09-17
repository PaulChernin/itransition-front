import { Container } from "@chakra-ui/react"
import Header from "./components/Header"
import { Outlet } from "react-router-dom"

const Layout = () => {
    return <>
        <Header/>
        <Container
            maxWidth='container.md'
            marginBottom={10}
        >
            
            <Outlet/>
        </Container>
    </>
}

export default Layout