import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../src/css/index.css'
import { UsersContextProvider } from './context/UsersContext'
import { BrowserRouter } from 'react-router-dom'

//<RouterProvider router = {router} />

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UsersContextProvider>
      <App />
    </UsersContextProvider>
  </BrowserRouter>
)
