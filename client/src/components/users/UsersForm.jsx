import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../../context/UsersContext'
export default function UsersForm() {
    const [dni, setDni] = useState("")
    const [nombre, setNombre] = useState("")
    const { creaUsuario } = useContext(UserContext)
    const handleSubmit = (e) => { 
        e.preventDefault()
        creaUsuario({
            dni: dni,
            nombre: nombre
        })
        setDni(""); setNombre("")
    }
    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-white text-center mb-2">Añadir un nuevo usuario</h1>
            <form onSubmit={handleSubmit} className="bg-sky-200 p-10 mb-4 grid grid-cols-2" >
            <input className="p-2 m-2"
                placeholder= "Escribe tu DNI" onChange={(e) => setDni(e.target.value)} value={dni} autoFocus/>
            <input className="p-2 m-2" 
                placeholder= "Escribe tu nombre" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            <button class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Guardar usuario</button>
        </form>
        </div>
        
    )
}
