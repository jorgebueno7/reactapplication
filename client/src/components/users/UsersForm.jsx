import { useState, useContext } from 'react'
import { UserContext } from '../../context/UsersContext'
import { useNavigate } from 'react-router-dom'


export default function UsersForm() {
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
    const [isSignedUp, setIsSignedUp] = useState(false)
    const { creaUsuario } = useContext(UserContext)
    
    const handleSubmit = (e) => { 
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
        setCredentials(user)
        setIsSignedUp(true)
    }
    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl font-bold text-white text-center mb-2">Añadir un nuevo usuario</h1>
            <form onSubmit={handleSubmit} className="bg-sky-200 p-10 mb-4 grid grid-cols-2" >
            <input className="p-2 m-2" type="text"
                placeholder= "Escribe tu DNI" onChange={handleChange} value={credentials.dni} name="dni" autoFocus/>
            <input className="p-2 m-2" type="text"
                placeholder= "Escribe tu nombre" onChange={handleChange} value={credentials.nombre} name="nombre"/>
            <input className="p-2 m-2" type="text"
                placeholder= "Escribe tus apellidos" onChange={handleChange} value={credentials.apellidos} name="apellidos"/>
            <input className="p-2 m-2" type="text"
                placeholder= "Escribe tu edad" onChange={handleChange} value={credentials.edad} name="edad"/>
            <input className="p-2 m-2" type="email"
                placeholder= "Escribe tu email" onChange={handleChange} value={credentials.email} name="email"/>
            <input className="p-2 m-2" type="password"
                placeholder= "Escribe tu password" onChange={handleChange} value={credentials.password} name="password"/>
            <input className="p-2 m-2" type="text"
                placeholder= "Escribe tu telefono" onChange={handleChange} value={credentials.telefono} name="telefono"/>
            <input className="p-2 m-2" type="text"
                placeholder= "Escribe tu direccion" onChange={handleChange} value={credentials.direccion} name="direccion"/>
            <button onClick={postUser} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Guardar usuario</button>
        </form>
        </div>
        
    )
}
