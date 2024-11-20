import { getBaseUrl } from "@/helpers/config/envConfig"

const getOrders = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/orders`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store'
        })
        let result = await data.json()
        const orders = result.data
        return orders
    } catch (error) {
        console.error(error)
    }
}

export default getOrders