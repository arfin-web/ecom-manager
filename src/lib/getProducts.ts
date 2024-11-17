import { getBaseUrl } from "@/helpers/config/envConfig"

const getProducts = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/products`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        })
        let result = await data.json()
        const products = result.data
        return products
    } catch (error) {
        console.error(error)
    }
}

export default getProducts