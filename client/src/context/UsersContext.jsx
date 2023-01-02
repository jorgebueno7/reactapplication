import { useState, useEffect, createContext } from 'react'

async function deleteUsuario(id) {
    const BASE_URL = 'http://localhost:3000/api/v1'
    return await fetch(BASE_URL + '/users/' + `${id}`, 
      { method: 'DELETE' })
}

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