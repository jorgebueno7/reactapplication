import { useContext, useState } from 'react'
import { UserContext } from '../context/UsersContext'

async function loginUser(credentials) {
  const BASE_URL = 'http://localhost:3000/api/v1'
  return fetch(BASE_URL + '/users/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(credentials)
  }).then(data => data.json())
 }
 export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const { iniciaUsuario, setLoginUsers } = useContext(UserContext)
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({ email, password });
    setToken(token);
  }
  const login = async e => {
    e.preventDefault();
    const token = await loginUser({ email, password });
    setToken(token);
    const userData = {token};
    localStorage.setItem('token-info', JSON.stringify(userData));
    setLoginUsers(true);
    setEmail('');
    setPassword('');
  };
 
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1 className="text-white text-4xl mb-2">Iniciar sesión</h1>
          <>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                  <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Introduce tu email"/>
              </div>
              <div>
                  <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Introduce tu contraseña"/>
              </div>
              <div className="mt-3">
                <button onClick={login}>Iniciar sesión</button>
              </div>
            </form>
          </>
      </div>
    </>
  );
}