import { ReactNode } from "react"
import { useNumberParam } from "../hooks/useNumberParam"
import { Navigate } from "react-router-dom"

type ValidateParamsProps = {
    children: ReactNode,
    paramName: string
}

const ValidateParams = ({ paramName, children }: ValidateParamsProps) => {
    const value = useNumberParam(paramName)

    return <>
        {value
            ?
            children
            :
            <Navigate to='/404'/>
        }
    </>
}

export default ValidateParams