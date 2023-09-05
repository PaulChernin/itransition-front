import { useEffect, useState } from "react"
import { getUsers } from "./api/api"
import { Link } from "react-router-dom"
import { Heading, VStack } from "@chakra-ui/react"
import { User } from "./types/User"

const AdminPanelPage = () => {
    const [users, setUsers] = useState<Array<User>>([])

    useEffect(() => {
        getUsers()
            .then(users => {
                setUsers(users)
            })
    }, [])

    return <>
        <Heading as='h1' size='lg' mb={3}>
            Users:
        </Heading>
        <VStack align='left'>
            {users.map(user =>
                <Link
                    key={user.id}
                    to={'/user-reviews/' + user.id}
                >
                    {user.nick}
                </Link>    
            )}
        </VStack>
    </>
}

export default AdminPanelPage