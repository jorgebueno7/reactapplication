import { useState, useEffect, createContext } from 'react'

async function deleteProducto(id) {
    const BASE_URL = 'http://localhost:3000/api/v1'
    return await fetch(BASE_URL + '/products/' + `${id}`, 
      { method: 'DELETE' })
}

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