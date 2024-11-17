import NoProducts from "@/components/baseComponents/dashboard/NoProducts"
import ProductsList from "@/components/baseComponents/dashboard/ProductsList"
import productsList from "@/data/productsList"

export default function Products() {
    return (
        <>
            {
                productsList.length > 0 ? <ProductsList /> : <NoProducts />
            }
        </>
    )
}