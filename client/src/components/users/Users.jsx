import { useContext, useState } from 'react'
import { UserContext } from '../../context/UsersContext'
import UsersCard from "./UsersCard"

/*
  En este componente mostraremos la información de los usuario
  a través de tarjetas que comentaremos a continuación (UsersCard).
*/
function Users() {
    const { usuarios } = useContext(UserContext)
    return (
      <>
        <div className="grid grid-cols-2 gap-2">
          {usuarios.map((usuario) => (
              <UsersCard key={usuario.id} usuarios={usuario} />))
          }
        </div>
      </>
    )
}
  
export default Users