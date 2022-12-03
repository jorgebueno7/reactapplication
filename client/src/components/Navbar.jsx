import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="absolute top-3 right-5 max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
        <div className="flex space-x-8 text-white-900">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Usuarios</NavLink>
        </div>
        </div>
    </div>

  )
}

export default Navbar
