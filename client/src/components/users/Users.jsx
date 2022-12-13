import { useContext } from 'react'
import { UserContext } from '../../context/UsersContext'
import UsersCard from "./UsersCard"

function Users() {
    const { usuarios } = useContext(UserContext)
    if(usuarios.length === 0) {
        <h1 className="text-white font-bold text-center">NO EXISTEN USUARIOS</h1>
    }
    return (
      <>
        <div className="grid grid-cols-4 gap-2">
          {usuarios.map((usuario) => (
                <UsersCard key={usuario.id} usuarios={usuario} />))
          }
        </div>
      </>
      /*
      <>
        <div className="grid grid-cols-4 gap-2">
          {usuarios.map((usuario) => (
                <UsersCard key={usuario.id} usuarios={usuario} />))
          }
        </div>
        <div className= "mt-6" style={{ textAlign: 'center' }}>
        <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Previous
        </a>

        <a href="#" class="inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          Next
        </a>
        </div>
      </>
      */
      
    )
  }
  
  export default Users