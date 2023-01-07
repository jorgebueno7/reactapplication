import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../context/UsersContext'
import { useNavigate, NavLink } from 'react-router-dom'

async function iniciaUsuario(credentials) {
    const BASE_URL = 'http://localhost:3000/api/v1'
    return await fetch(BASE_URL + '/users/login', 
      { method: 'POST', 
        headers: { 'Content-Type': 'application/json', 
                  'Authorization': 'Bearer ' + btoa('token'), }, 
        body: JSON.stringify(credentials),
        status : 200,
    }).then(res => res.json())
    .catch(err => console.log(err));
}

/*
  Componente encargado de realizar el login del usuario. En el proceso de login, almacenamos
  el token generado en el local storage del navegador. En cada uno de los componentes, comprobamos
  si las credenciales son correctas y si es cierto, salta una alerta informando al usuario del correcto
  inicio de sesión ya sea como administrador o como un usuario común
*/
export default function Login() {
  const navigate = useNavigate()
  const navigateHome = () => {
    navigate('/')
  }
  const naviateAgain = () => {
    navigate('/login')
  }
  const naviateUsers = () => {
    navigate('/users/register')
  }

  const [token, setToken] = useState('');
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const { loginUser, setLoginUsers } = useContext(UserContext)
  const { isAdmin, setIsAdmin } = useContext(UserContext)
  
  const handleSubmit = async e => {
      e.preventDefault()
      const token = await iniciaUsuario(credentials)
      setToken(token)
  }
  
  const handleChange = e => {
      setCredentials({
        ...credentials,
        [e.target.name] : e.target.value,
      })
  }

  const loginUsuario = async e => {
      e.preventDefault();
      const token = await iniciaUsuario(credentials);
      if(token.token !== undefined && credentials.email == "admin@admin.com" && credentials.password == "adminadmin"){
          setToken(token);
          
          const userData = {token};
          localStorage.setItem('token-info', JSON.stringify(userData));

          alert('Inicio de sesión como administrador')
          setIsAdmin(true)
          setLoginUsers(true)
          navigateHome();
      }
      else if(token.token !== undefined) {
          setToken(token);
        
          const userData = {token};
          localStorage.setItem('token-info', JSON.stringify(userData));

          alert('Inicio de sesión con éxito')
          setLoginUsers(true)
          navigateHome();
      }else{
        alert('Credenciales incorrectas, intentelo de nuevo!')
        setLoginUsers(false)
        naviateAgain()
      }
  };
  return (
    <>
    <section className="bg-gray-4 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Inicia sesión con tu cuenta
                  </h1>
                  <form onSubmit={handleSubmit}className="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                          <input type="email" onChange={handleChange} value={credentials.email} name="email" placeholder="Introduce tu email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" autoFocus/>
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                          <input type="password" onChange={handleChange} value={credentials.password} name="password" placeholder="Introduce tu contraseña" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      </div>
                      <button onClick={loginUsuario} className="w-full text-white bg-blue-600 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Inicia sesión</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          ¿Aún no tienes cuenta? <a onClick={naviateUsers} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Registrate</a>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
    </>
  )
}