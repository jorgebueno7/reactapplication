import { useState, useContext } from 'react'
import { UserContext } from '../../context/UsersContext'
import { useNavigate } from 'react-router-dom'

async function registraUsuario(credentials) {
    const BASE_URL = 'http://localhost:3000/api/v1'
    return await fetch(BASE_URL + '/users/register', 
      { method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(credentials),
        status : 200,
    }).then(res => res.json())
    .catch(err => console.log(err));
}

export default function Register() {
    const [dni, setDni] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellidos, setApellidos] = useState("")
    const [edad, setEdad] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [telefono, setTelefono] = useState("")
    const [direccion, setDireccion] = useState("")
    const [credentials, setCredentials] = useState({dni: '', nombre: '', apellidos: '', edad: '',
        email: '', password: '', telefono: '', direccion: ''});
    const { creaUsuario } = useContext(UserContext)
    
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate('/')
    }
    const navigateLogin = () => {
        navigate('/login')
    }
    
    const handleSubmit = async e => { 
        e.preventDefault()
        creaUsuario({
            id: id,
            dni: dni,
            nombre: nombre,
            apellidos: apellidos,
            edad: edad,
            email: email,
            password: password,
            telefono: telefono,
            direccion: direccion
        })
        setDni(""); setNombre(""); setApellidos(""); setEdad("");
        setEmail(""); setPassword(""); setTelefono(""); setDireccion("");
    }

    const handleChange = e => {
        setCredentials({
          ...credentials,
          [e.target.name] : e.target.value,
        })
    }
    const postUser = async e => {
        e.preventDefault()
        const user = await registraUsuario(credentials)
        if(user.dni.length > 0 && user.nombre.length > 0 && user.apellidos.length > 0 && user.edad > 0
            && credentials.email === "admin@admin.com" && credentials.password === "adminadmin" && user.telefono.length > 0 && user.direccion.length > 0){
            alert('Usuario de tipo administrador creado con éxito')
            setCredentials(user)
            navigateLogin()
        }
        else if(user.dni.length > 0 && user.nombre.length > 0 && user.apellidos.length > 0 && user.edad > 0
            && user.email.length > 0 && user.password.length > 0 && user.telefono.length > 0 && user.direccion.length > 0){
            alert('Usuario registrado con éxito')
            setCredentials(user)
            navigateLogin()
        }
        else{
            alert('Algo no ha ido bien. Repita el proceso')
        }
    }
    return (
        <>
            <section className="bg-gray-4 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Registrate como nuevo usuario
                        </h1>
                        <form onSubmit={handleSubmit}className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">DNI</label>
                                <input type="text" onChange={handleChange} value={credentials.dni} name="dni" placeholder="Introduce tu dni" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" autoFocus/>
                            </div>
                            
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                                <input type="text" onChange={handleChange} value={credentials.nombre} name="nombre" placeholder="Introduce tu nombre" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Apellidos</label>
                                <input type="text" onChange={handleChange} value={credentials.apellidos} name="apellidos" placeholder="Introduce tus apellidos" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Edad</label>
                                <input type="text" onChange={handleChange} value={credentials.edad} name="edad" placeholder="Introduce tu edad" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input type="text" onChange={handleChange} value={credentials.email} name="email" placeholder="Introduce tu email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="password" onChange={handleChange} value={credentials.password} name="password" placeholder="Introduce tu contraseña" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>

                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefono</label>
                                <input type="text" onChange={handleChange} value={credentials.telefono} name="telefono" placeholder="Introduce tu telefono" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Direccion</label>
                                <input type="text" onChange={handleChange} value={credentials.direccion} name="direccion" placeholder="Introduce tu direccion" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <button onClick={postUser} className="w-full text-white bg-blue-600 hover:bg-primary-200 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Registrarme</button>
                        </form>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}
