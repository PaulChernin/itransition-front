import fetch from "../../../api/fetch"

const getTagsByPrefix = async (prefix: string) => {
    const response: Array<string> = await fetch('/tag/get/byPrefix', {
        prefix: prefix
    })
    return response
}

export {
    getTagsByPrefix
}