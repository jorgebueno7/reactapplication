import { useContext } from 'react'
import { ProductContext } from '../../context/ProductsContext'
import ProductsCard from './ProductsCard'

function Products() {
    const { productos } = useContext(ProductContext)

    return (
        <>
            <div className="grid grid-cols-4 gap-2">
            {productos.map((producto) => (
                    <ProductsCard key={producto.id} productos={producto} />))
            }
            </div>
        </>
    )
}


export default Products