import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductsContext'
import { UserContext } from '../../context/UsersContext'

function ProductsCard({ productos }) {
    const { eliminaProducto } = useContext(ProductContext)
    const { loginUser } = useContext(UserContext)
    const { isAdmin } = useContext(UserContext)
    const [showInfo, setShowInfo] = useState(false)
    const navigate = useNavigate()
    const navigateUpdate = () => {
        navigate('/products/update')
    }
    const navigateCreate = () => {
        navigate('/products/create')
    }
    const handleChange = () => {    
        setShowInfo(true)
    }
    return (
        <>
            { isAdmin ? (<>
                <div className="bg-gray-600 text-white p-4 rounded-md mt-12">
                    <h1 className="text-2xl font-bold">{productos.nombre}</h1>
                    <h2 className="text-gray-400 text-l">{productos.marca}</h2>
                    <h2 className="text-gray-400 text-l">{productos.tipo}</h2>
                    <h2 className="text-gray-400 text-l">{productos.precio}</h2>
                    <div style={{ textAlign: 'center' }}>
                        <button style={{ display: 'inline-block', width: '90px', height: '50px' }} className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-3 py-2.5 text-center mt-2 mr-2 mb-2"
                            onClick={navigateCreate}>Crear producto</button>
                        <button style={{ display: 'inline-block', width: '90px', height: '50px' }} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded text-sm px-3 py-2.5 text-center mt-2 mr-2 mb-2"
                            onClick={() => eliminaProducto(productos.id)}>Eliminar producto</button>
                        <button style={{ display: 'inline-block', width: '90px', height: '50px' }} className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded text-sm px-3 py-2.5 text-center mt-2 mr-2 mb-2"
                            onClick={navigateUpdate}>Editar producto</button>
                    </div>
                </div>
            </>) : (<>
                <div className="bg-gray-600 text-white p-4 rounded-md mt-12">
                    <h1 className="text-2xl font-bold">{productos.nombre}</h1>
                    <h2 className="text-gray-400 text-l">{productos.marca}</h2>
                    {showInfo ? (<>
                                    <h2 className="text-gray-400 text-l">{productos.tipo}</h2>
                                    <h2 className="text-gray-400 text-l">{productos.precio}</h2>
                                </>) : (<></>)}
                    <div style={{ textAlign: 'center' }}>
                        {!showInfo ? (<><button style={{ display: 'inline-block', width: '90px', height: '50px' }} 
                    className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-3 py-2.5 text-center mt-2 mr-2 mb-2" 
                    onClick={handleChange}>+ Info</button></>) : (<></>)}
                    </div>
                </div>
            </>)}
        </>
        
    )
}

export default ProductsCard