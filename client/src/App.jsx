import { useContext, useState } from 'react'
import Users from './components/users/Users'
import Products from './components/products/Products'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Login from './routes/user/Login'
import Register from './routes/user/Register'
import Update from './routes/user/Update'
import Pagination from './components/Pagination'
import CreateProducts from './routes/product/CreateProducts'
import { Routes, Route } from 'react-router-dom'
import { UserContext } from './context/UsersContext'

function App() {
    const { usuarios } = useContext(UserContext)
    const ITEMS_PER_PAGE = 2
    const [usuario, setUsuario] = useState([...usuarios].splice(0, ITEMS_PER_PAGE))
    const [currentPage, setCurrentPage] = useState(0)
    
    const nextHandler = () => {
      const totalElements = usuarios.length
      const nextPage = currentPage + 1
      const firstIndex = nextPage * ITEMS_PER_PAGE
      if(firstIndex === totalElements) return;

      setUsuario([...usuarios].splice(firstIndex, ITEMS_PER_PAGE))
      setCurrentPage(nextPage)
    }
    const prevHandler = () => {
      const prevPage = currentPage - 1
      if(prevPage < 0) return;

      const firstIndex = prevPage * ITEMS_PER_PAGE 

      setUsuario([...usuarios].splice(firstIndex, ITEMS_PER_PAGE))
      setCurrentPage(prevPage)
    }
    return (
      <>
          <Navbar />
          <Pagination currentPage={currentPage} users={usuario} nextHandler={nextHandler} prevHandler={prevHandler}/>
          <Routes>
            <>
              <Route path="/" element={<Home />}> </Route>
              <Route path="/users" element={<Users />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/users/register" element={<Register />}></Route>
              <Route path="/users/update" element={<Update />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/products/create" element={<CreateProducts />}></Route>
            </>
          </Routes>
      </>      
    )
}

export default App