import { useContext, useState } from 'react'
import ReactPaginate from 'react-paginate';
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
    )
}
  
export default Users