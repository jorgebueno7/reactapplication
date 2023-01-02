import React from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const naviateRegister = () => {
    navigate('/users/register')
  }
  const navigateProducts = () => {
    navigate('/products')
  }
  return (
    <div className="h-full">
      <div className="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row">
        <div className="flex flex-col w-full xl:w-2/5 lg:items-start overflow-y-hidden">
          <h1 className="my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight md:text-left">
            Gym
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500">
              food
            </span>
          </h1>
          <p className="leading-normal text-base md:text-2xl mb-8 md:text-left">
            Tu tienda de suplementos y ropa deportiva favorita
          </p>
          <div>
            
          </div>
          <form className="bg-gray-900 opacity-75 w-full shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="block text-blue-300 py-2 font-bold mb-2" htmlFor="emailaddress">
                REGÍSTRATE Y DISFRUTA DE NUESTROS PRODUCTOS
              </label>
            </div>
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={naviateRegister}
                className="bg-gradient-to-r from-purple-800 to-green-500 hover:from-pink-500 hover:to-green-500 text-white font-bold py-2 px-4 rounded focus:ring transform transition hover:scale-105 duration-300 ease-in-out"
                type="button">
                Registrarme
              </button>
            </div>
          </form>
        </div>
        
        <div className="flex w-full justify-center xl:w-2/5 p-12 overflow-hidden">
          <img onClick={navigateProducts} className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="./src/assets/0-0-79871.png" />
          <img onClick={navigateProducts} className="mx-auto w-full md:w-2/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6" src="./src/assets/2174_mainimage.png" />
        </div>

        <div className="mx-auto md:pt-16">
          <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
            Download our app:
          </p>
          <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
            <img src="./src/assets/App Store.svg" className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out" />
            <img src="./src/assets/Play Store.svg" className="h-12 transform hover:scale-125 duration-300 ease-in-out" />
          </div>
        </div>

        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; Gymfood 2022</a>
        </div>
      </div>
    </div>
  )
}

export default Home