import fetch from "../../../api/fetch"

const getTagsByPrefix = async (prefix: string) => {
    const response = await fetch('/tag/get/byPrefix', {
        prefix: prefix
    })
    return response as Array<string>
}

export {
    getTagsByPrefix
}