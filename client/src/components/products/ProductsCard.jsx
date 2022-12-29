import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductsContext'

function ProductsCard({ productos }) {
    const { eliminaProducto } = useContext(ProductContext)
    const navigate = useNavigate()
    const navigateUpdate = () => {
        navigate('/products/update')
    }
    return (
        <div className="bg-gray-600 text-white p-4 rounded-md mt-12">
            <h1 className="text-2xl font-bold">{productos.nombre}</h1>
            <h2 className="text-gray-400 text-sm">{productos.marca}</h2>
            <h2 className="text-gray-400 text-sm">{productos.tipo}</h2>
            <h2 className="text-gray-400 text-sm">{productos.precio}</h2>
            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mt-2 mr-2 mb-2"
                onClick={() => eliminaProducto(productos.id)}>Eliminar producto</button>
            <button className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mt-2 mr-2 mb-2"
                onClick={navigateUpdate}>Editar producto</button>
            </div>
    )
}

export default ProductsCard