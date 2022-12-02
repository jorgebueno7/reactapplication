import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './Home'
import '../src/css/index.css'
import router from './router/Router'
import { UsersContextProvider } from './context/UsersContext'
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
    <UsersContextProvider>
      <App />
    </UsersContextProvider>
  </React.StrictMode>
)
