import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UsersContext'

const Navbar = () => {
  const { loginUser, setLoginUsers } = useContext(UserContext)
  const { listarUsuarioPorId } = useContext(UserContext)
  const { isAdmin, setIsAdmin } = useState(UserContext)
  const logout = () => {
      localStorage.removeItem('token-info');
      setLoginUsers(false);
  };
  return (
    <div className="absolute top-3 right-5 max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
        <div className="flex space-x-8 text-white-900">
            <NavLink className="text-white" to="/">Inicio</NavLink>
            <NavLink className="text-white" to="/products">Productos</NavLink>
            { loginUser ? (<>
                            <NavLink className="text-white" to="/users">Usuarios</NavLink>
                            <NavLink className="text-white" to="/login" onClick={() => logout()}>Cerrar sesión</NavLink>
                           </>)
                        : (<NavLink className="text-white" to="/login">Login</NavLink>) }
        </div>
        </div>
    </div>

  )
}

export default Navbar
