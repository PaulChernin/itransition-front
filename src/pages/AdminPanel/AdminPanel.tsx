import { useEffect, useState } from "react"
import { getUsers } from "./api/api"
import { User } from "./types/user"
import { Link } from "react-router-dom"
import { VStack } from "@chakra-ui/react"

const AdminPanelPage = () => {
    const [users, setUsers] = useState<Array<User>>([])

    useEffect(() => {
        getUsers()
            .then(users => {
                setUsers(users)
            })
    })

    return <>
        <VStack align='left'>
            {users.map(user =>
                <Link
                    key={user.id}
                    to={'/user/' + user.id}
                >
                    {user.nick}
                </Link>    
            )}
        </VStack>
    </>
}

export default AdminPanelPage