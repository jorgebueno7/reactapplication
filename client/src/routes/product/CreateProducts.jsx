import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ProductContext } from '../../context/ProductsContext'

async function crearProducto(credentials) {
    const BASE_URL = 'http://localhost:3000/api/v1'
    return await fetch(BASE_URL + '/products',
    {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
        status: 200,
    }).then(res => res.json()).catch(err => console.log(err))
}

function CreateProducts() {
    const [nombre, setNombre] = useState("")
    const [marca, setMarca] = useState("")
    const [tipo, setTipo] = useState("")
    const [precio, setPrecio] = useState("")
    const [credentials, setCredentials] = useState({nombre: '', marca: '', tipo: '', precio: ''})
    const { creaProducto } = useContext(ProductContext)
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate('/')
    }
    const handleSubmit = async e => {
        e.preventDefault()
        creaProducto({
            id: id, nombre: nombre, marca: marca, tipo: tipo, precio: precio
        })
        setNombre(""); setMarca(""); setTipo(""); setPrecio("");
    }
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name] : e.target.value,
        })
    }
    const postProduct = async e => {
        e.preventDefault()
        const product = await crearProducto(credentials)
        if(product.nombre.length > 0 && product.marca.length > 0
            && product.tipo.length > 0 && product.precio >= 0) {
            alert('Producto creado con éxito')
            setCredentials(product)
            navigateHome()
        }else{
            alert('Algo no ha ido bien. Repita el proceso')
        }
    }
    return (
        <>
            <section className="bg-gray-4 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Crea un nuevo producto
                        </h1>
                        <form onSubmit={handleSubmit}className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                <input type="text" onChange={handleChange} value={credentials.nombre} name="nombre" placeholder="Introduce el nombre del producto" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" autoFocus/>
                            </div>
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marca</label>
                                <input type="text" onChange={handleChange} value={credentials.marca} name="marca" placeholder="Introduce la marca del producto" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="types" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tipo</label>
                                <input type="text" onChange={handleChange} value={credentials.tipo} name="tipo" placeholder="Introduce el tipo del producto" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="double" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Precio</label>
                                <input type="double" onChange={handleChange} value={credentials.precio} name="precio" placeholder="Introduce el precio de tu producto" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button onClick={postProduct} className="w-full text-white bg-blue-600 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Crear producto</button>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default CreateProducts