import { useState, useEffect, createContext } from 'react'

async function deleteUsuario(id) {
    const BASE_URL = 'http://localhost:3000/api/v1'
    return await fetch(BASE_URL + '/users/' + `${id}`, 
      { method: 'DELETE' })
}

/*
    Este componente, se trata de un contexto, el cual se encargará de proporcionar
    a todos los demás componentes de la aplicación información relevante para el desarrollo
    correcto de la aplicación. Como podemos ver, encontramos tres useState de los cuales
    diferenciamos usuarios, loginUser e isAdmin. El useState de usuarios lo utilizamos
    para actualizar el array de usuarios que consumimos del API al hacer fetch, tanto cuando añadimos
    un usuario, lo eliminamos o actualizamos datos del mismo. El useState de loginUser cambiará de estado
    cuando hagamos login e iniciemos sesión con un usuario y por último en cuanto al useState de isAdmin
    es el que se encarga de que visualicemos las funcionalidades del administrador en cada momento.

    Al utilizar un context, emplearemos el provider para "exportar" todas las variables, estados y funciones
    que vayamos a utilizar a posteriori en cada uno de los componentes
*/
export const UserContext = createContext()
export function UsersContextProvider(props) {
    const [usuarios, setUsers] = useState([])
    const [loginUser, setLoginUsers] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const BASE_URL = 'http://localhost:3000/api/v1'
    const usersFetch = (url) => { fetch(url).then(res => res.json()).then(data => setUsers(data.users)).catch(err => err.message); }
    const creaUsuario = (usuario) => { 
        setUsers([...usuarios, {
            id: usuario.id,
            dni: usuario.dni,
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
            edad: usuario.edad,
            email: usuario.email,
            password: usuario.password,
            telefono: usuario.telefono,
            direccion: usuario.direccion
        }])
    }
    const eliminaUsuario = (usuarioId) => { 
        setUsers(usuarios.filter(usuario => usuario.id !== usuarioId))
        deleteUsuario(usuarioId)
    }

    useEffect(() => { 
        usersFetch(BASE_URL + '/users')
    }, [])
    return (
        <UserContext.Provider value={{usuarios, loginUser, isAdmin, setUsers, setIsAdmin, setLoginUsers, creaUsuario, eliminaUsuario }}>
            {props.children}
        </UserContext.Provider>
    )
}