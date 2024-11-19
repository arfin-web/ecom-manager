import { getBaseUrl } from "@/helpers/config/envConfig"

const getCustomers = async () => {
    try {
        let data = await fetch(`${getBaseUrl()}/customers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            cache: "no-store"
        })
        let result = await data.json()
        const customers = result.data
        return customers
    } catch (error) {
        console.error(error)
    }
}

export default getCustomers