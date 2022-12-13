import { NavLink } from 'react-router-dom'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UsersContext'
const Navbar = () => {
  const { loginUser, setLoginUsers } = useContext(UserContext)
  const logout = () => {
      localStorage.removeItem('token-info');
      setLoginUsers(false);
  };
  return (
    <div className="absolute top-3 right-5 max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
        <div className="flex space-x-8 text-white-900">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Usuarios</NavLink>
            {
               loginUser ? (<NavLink to="/" onClick={() => logout()}>Cerrar sesión</NavLink>) 
                         : (<NavLink to="/login">Login</NavLink>)
            }
            
        </div>
        </div>
    </div>

  )
}

export default Navbar
