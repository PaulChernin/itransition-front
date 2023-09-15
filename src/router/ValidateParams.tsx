import { ReactNode } from "react"
import { useNumberParam } from "../hooks/useNumberParam"
import { Navigate } from "react-router-dom"

type ValidateParamsProps = {
    children: ReactNode,
    paramName: string
}

// TODO: валидировать по предоставленной схеме и прокидывать вниз как props
const ValidateParams = ({ paramName, children }: ValidateParamsProps) => {
    const value = useNumberParam(paramName)

    return <>
        {value
            ?
            children
            :
            <Navigate to='/404' replace />
        }
    </>
}

export default ValidateParams