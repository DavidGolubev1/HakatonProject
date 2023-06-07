import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import HomePage from './Components/HomePage'
import Register from './Components/Register'
import Volunteering from './Components/Voulnteering'
import Layout from './Components/Layout'
import VolunteeringPage from './Components/VolunteeringPage'
import Userpage from './Components/Userpage'
function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path='Voulnteers' element={<Volunteering />}></Route>
        <Route path='VoulnterringPage/:id' element={<VolunteeringPage />}></Route>
      </Route>
      <Route path='Userpage' element={<Userpage />}>
        <Route path='Login' element={<Login />}></Route>
        <Route path='Register' element={<Register />}></Route>
      </Route>
    </Routes>
  )
}

export default App
