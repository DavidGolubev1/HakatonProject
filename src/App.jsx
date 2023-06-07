import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import HomePage from './Components/HomePage'
import Register from './Components/Register'
import Volunteering from './Components/Voulnteering'
function App() {

  return (
    <Routes>
      <Route index element={<Login />}></Route>

      <Route>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='Voulnteers' element={<Volunteering />}></Route>
      </Route>
    </Routes>
  )
}

export default App
