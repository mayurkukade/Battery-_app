import Register from "./components/RegisterForm/Register"
import { Route,Routes } from "react-router-dom"


const App = () => {
  return (
    <main className='App'>
      <Routes>
        <Route path='/' element={<Register />} />
      </Routes>
      

    </main>
  )
}

export default App
