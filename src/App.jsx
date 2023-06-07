import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import HomePage from './Components/HomePage'
import Register from './Components/Register'
import Volunteering from './Components/Voulnteering'
import Layout from './Components/Layout'
import VolunteeringPage from './Components/VolunteeringPage'
function App() {

  return (
    <Routes>
      <Route index element={<Login />}></Route>

      <Route path='/' element={<Layout />}>
        <Route path='HomePage' element={<HomePage />}></Route>
        <Route path='Voulnteers' element={<Volunteering />}></Route>
        <Route path='VoulnterringPage/:id' element={<VolunteeringPage />}></Route>
      </Route>
    </Routes>
  )
}

export default App
