import { useState, useEffect, createContext } from 'react'

async function deleteProducto(id) {
    const BASE_URL = 'http://localhost:3000/api/v1'
    return await fetch(BASE_URL + '/products/' + `${id}`, 
      { method: 'DELETE' })
}

/*
    Como podemos ver, encontramos un useState. El useState de productos lo utilizamos
    para actualizar el array de productos que consumimos del API al hacer fetch, tanto cuando añadimos
    un producto, lo eliminamos o actualizamos datos del mismo.

    Al utilizar un context, emplearemos el provider para "exportar" todas las variables, estados y funciones
    que vayamos a utilizar a posteriori en cada uno de los componentes
*/

export const ProductContext = createContext()
export function ProductsContextProvider(props) {
    const [productos, setProducts] = useState([])
    const BASE_URL = 'http://localhost:3000/api/v1'
    const productsFetch = (url) => { fetch(url).then(res => res.json()).then(data => setProducts(data.products)).catch(err => err.message); }
    const creaProducto = (producto) => { 
        setProducts([...productos, {
            id: productos.length,
            nombre: producto.nombre,
            marca: producto.marca,
            tipo: producto.tipo,
            precio: producto.precio
        }])
    }
    const eliminaProducto = (productoId) => { 
        setProducts(productos.filter(producto => producto.id !== productoId))
        deleteProducto(productoId)
    }
    useEffect(() => { 
        productsFetch(BASE_URL + '/products')
    }, [])
    return (
        <ProductContext.Provider value={{productos, creaProducto, eliminaProducto}}>
            {props.children}
        </ProductContext.Provider>
    )
}