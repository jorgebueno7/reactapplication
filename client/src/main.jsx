import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/css/index.css'
import { UsersContextProvider } from './context/UsersContext'
import { ProductsContextProvider } from './context/ProductsContext'
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UsersContextProvider>
    <ProductsContextProvider>
      <App />
    </ProductsContextProvider>
    </UsersContextProvider>
  </BrowserRouter>
)
