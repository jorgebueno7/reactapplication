import Users from './components/users/Users'
import Products from './components/products/Products'
import Navbar from './components/Navbar'
import Home from './routes/Home'
import Login from './routes/user/Login'
import Register from './routes/user/Register'
import Update from './routes/user/Update'
import CreateProducts from './routes/product/CreateProducts'
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
              <Route path="/users/update" element={<Update />}></Route>
              <Route path="/products" element={<Products />}></Route>
              <Route path="/products/create" element={<CreateProducts />}></Route>
            </>
          </Routes>
      </>      
    )
}

export default App