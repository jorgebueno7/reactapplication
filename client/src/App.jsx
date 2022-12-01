import Users from './components/users/Users'
import UsersForm from './components/users/UsersForm'
import Products from './components/products/Products'

function App() {
    return (
      <div className="bg-sky-600 h-screen">
        <div className="container mx-auto p-10">
            <UsersForm /> 
            <Users />
        </div>
      </div>
    )
}

export default App