import Users from './components/users/Users'
import UsersForm from './components/users/UsersForm'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
      <>
          <Navbar />
          <Routes>
            <>
              <Route path="/" element={<Home />}> </Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/users/register" element={<Register />}></Route>
              <Route path="/users/`:{id}`" element={<UsersForm />}></Route>
            </>
          </Routes>

      </>      
    )
}

export default App