import { useState, useEffect, createContext } from 'react'

export const UserContext = createContext()
export function UsersContextProvider(props) {
    const [usuarios, setUsers] = useState([])
    const BASE_URL = 'http://localhost:3000/api/v1'
    const usersFetch = (url) => { fetch(url).then(res => res.json()).then(data => setUsers(data.users)).catch(err => err.message); }
    const creaUsuario = (usuario) => { 
        setUsers([...usuarios, {
            id: usuarios.length,
            dni: usuario.dni,
            nombre: usuario.nombre
        }])
    }
    const eliminaUsuario = (usuarioId) => { 
        setUsers(usuarios.filter(usuario => usuario.id !== usuarioId))
    }
    useEffect(() => { 
        usersFetch(BASE_URL + '/users')
    }, [])
    return (
        <UserContext.Provider value={{usuarios, creaUsuario, eliminaUsuario}}>
            {props.children}
        </UserContext.Provider>
    )
}
