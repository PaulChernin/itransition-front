import { useParams } from "react-router-dom"

export const useNumberParam = (name: string) => {
    const s = useParams()[name]
    if (!s || isNaN(parseInt(s))) return null
    return parseInt(s)
}