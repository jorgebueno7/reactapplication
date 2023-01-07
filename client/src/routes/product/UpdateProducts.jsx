import { useState, useContext } from 'react'
import { ProductContext } from '../../context/ProductsContext'
import { useNavigate } from 'react-router-dom'

async function actualizaProducto(credentials) {
    const BASE_URL = 'http://localhost:3000/api/v1'
    return await fetch(BASE_URL + '/products/' + `${credentials.id}`, 
      { method: 'PUT', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(credentials),
    }).then(res => res.json())
    .catch(err => console.log(err));
}

/*
    Componente encargado de actualizar los productos, en este caso solo se encargará de
    actualizar el precio de los productos que es como inicialmente hicimos en el API
*/
function UpdateProducts() {
    const { productos } = useContext(ProductContext)
    const [credentials, setCredentials] = useState({id: productos.length, precio: ''});
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate('/')
    }
    const handleSubmit = async e => { 
        e.preventDefault()
    }
    const handleChange = e => {
        setCredentials({
          ...credentials,
          [e.target.name] : e.target.value,
        })
    }
    const putProduct = async e => {
        e.preventDefault();
        const product = await actualizaProducto(credentials)
        if(product.precio >= 0){
                alert('Producto actualizado con éxito')
                setCredentials(product)
                navigateHome()
            }
    }

    return (
        <>
            <section className="bg-gray-4 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Actualizar producto
                        </h1>
                        <form onSubmit={handleSubmit}className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                                <input type="number" onChange={handleChange} value={credentials.precio || ''} name="precio" placeholder="Introduce el precio del producto" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button onClick={putProduct} className="w-full text-white bg-blue-600 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Actualizar datos</button>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default UpdateProducts