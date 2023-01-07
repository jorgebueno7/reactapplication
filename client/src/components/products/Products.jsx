import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductsContext'
import { UserContext } from '../../context/UsersContext'
import ProductsCard from './ProductsCard'

/*
    En este componente mostraremos la información de los productos
    a través de tarjetas que comentaremos a continuación (ProductsCard).
    También aplicamos ternarias de react para mostrar información relevante
    para el administrador o cualquier usuario común
*/
function Products() {
    const { productos } = useContext(ProductContext)
    const { isAdmin } = useContext(UserContext)
    const navigate = useNavigate()
    const navigateCreate = () => {
        navigate('/products/create')
    }
    return (
        <>
            <div className="grid grid-cols-2 gap-2">
            { isAdmin ? (<>
                {productos.map((producto) => (
                    <ProductsCard key={producto.id} productos={producto} />))
                }
                <div style={{textAlign: 'center'}}>
                    <button style={{ display: 'inline-block', position: 'fixed', left: '25px', top: '1px', width: '100px', height: '60px' }} className="text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded text-sm px-3 py-2.5 text-center mt-2 mr-2 mb-2"
                        onClick={navigateCreate}>Crear producto</button>
                </div>
                
            </>) : (<>
                {productos.map((producto) => (
                    <ProductsCard key={producto.id} productos={producto} />))
                }
            </>)}
            </div>
        </>
    )
}


export default Products