import { useContext } from 'react'
import { UserContext } from '../../context/UsersContext'
function UsersCard({ usuarios }) {
    const { eliminaUsuario } = useContext(UserContext)
    return (
        <div className="bg-gray-600 text-white p-4 rounded-md mt-12">
            <h1 className="text-2xl font-bold">{usuarios.dni}</h1>
            <h2 className="text-gray-400 text-sm">{usuarios.nombre}</h2>
            <button className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-2.5 text-center mt-2 mr-2 mb-2"
                onClick={() => eliminaUsuario(usuarios.id)}>Eliminar usuario</button>
        </div>
    )
}

export default UsersCard