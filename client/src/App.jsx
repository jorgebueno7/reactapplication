import Users from './components/users/Users'
import UsersForm from './components/users/UsersForm'
import Products from './components/products/Products'
import Home from './routes/Home'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {
    return (
      <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/users" element={<Users />}> </Route>
          </Routes>

      </>      
    )
}

export default App

//<UsersForm /> 
//          <Users />