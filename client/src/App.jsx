import Users from './components/users/Users'
import UsersForm from './components/users/UsersForm'
import Products from './components/products/Products'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Login from './routes/Login'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
      <>
          <Navbar />
          <Routes>
            <>
              <Route path="/" element={<Home />}> </Route>
              <Route path="/users" element={<>
                  <UsersForm />
                  <Users />
                </>}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<UsersForm />}></Route>
            </>
          </Routes>

      </>      
    )
}

export default App