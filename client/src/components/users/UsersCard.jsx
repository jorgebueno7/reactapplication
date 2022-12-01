import { useContext } from 'react'
import { UserContext } from '../../context/UsersContext'
function UsersCard({ usuarios }) {
    const { eliminaUsuario } = useContext(UserContext)
    return (
        <div className="bg-gray-700 text-white p-4 rounded-md">
            <h1 className="text-2xl font-bold">{usuarios.dni}</h1>
            <h2 className="text-gray-400 text-sm">{usuarios.nombre}</h2>
            <button className="bg-red-600 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
                onClick={() => eliminaUsuario(usuarios.id)}>Eliminar tarea</button>
        </div>
    )
}

export default UsersCard