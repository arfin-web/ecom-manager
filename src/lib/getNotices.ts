import { getBaseUrl } from "@/helpers/config/envConfig"

const getNotices = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/notices`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        })
        let result = await data.json()
        const notices = result.data
        return notices
    } catch (error) {
        console.error(error)
    }
}

export default getNotices