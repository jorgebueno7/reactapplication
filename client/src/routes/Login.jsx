import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UsersContext'
import { useNavigate } from 'react-router-dom'

async function iniciaUsuario(credentials) {
    const BASE_URL = 'http://localhost:3000/api/v1'
    return await fetch(BASE_URL + '/users/login', 
      { method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(credentials),
        status : 200,
    }).then(res => res.json())
    .catch(err => console.log(err));
}

export default function Login() {
    const navigate = useNavigate()
    const navigateHome = () => {
        navigate('/')
    }
    const naviateAgain = () => {
        navigate('/login')
    }
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [credentials, setCredentials] = useState({email: '', password: ''});
  const { loginUser, setLoginUsers } = useContext(UserContext)
  
  const handleSubmit = async e => {
    e.preventDefault()

    const token = await iniciaUsuario(credentials);
    setToken(token);
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
    console.log(token)
    
    if(token.token !== undefined) {
      setToken(token);
    
      const userData = {token};
      localStorage.setItem('token-info', JSON.stringify(userData));
      alert('Inicio de sesión con éxito')
      setLoginUsers(true)
      navigateHome();
    }
    else{
      alert('Credenciales incorrectas, intentelo de nuevo!')
      setLoginUsers(false)
      naviateAgain()
    }
  };
  const logout = () => {
    localStorage.removeItem('token-info');
    setLoginUsers(false);
  };
  return (
    <>
      <div style={{ textAlign: 'center' }}>
          {!loginUser ? (
            <>
              <h1 className="text-white text-4xl mb-2">Iniciar sesión</h1>
              <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <input type="text" onChange={handleChange} value={credentials.email} name="email" placeholder="Introduce tu email" autoFocus/>
                </div>
                
                <div>
                    <input type="password" onChange={handleChange} value={credentials.password} name="password" placeholder="Introduce tu contraseña"/>
                </div>

                <div className="mt-3">
                  <button onClick={loginUsuario}>Iniciar sesión</button>
                </div>

              </form>
            </>
          ) : (
            <>
              <h1 className="text-white text-4xl mb-2">Iniciar sesión</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Introduce tu email"/>
                </div>
                <div>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Introduce tu contraseña"/>
                </div>
                <div className="mt-3">
                  <button onClick={navigateHome}>Sesión iniciada, ve a home</button>
                </div>
              </form>
            </>
          )
          }
      </div>
    </>
  );
}