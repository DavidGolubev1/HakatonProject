import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import HomePage from './Components/HomePage'
import Register from './Components/Register'
import Volunteering from './Components/Voulnteering'
import Layout from './Components/Layout'
import VolunteeringPage from './Components/VolunteeringPage'
import Userpage from './Components/Userpage'
import VolunteeringForm from './Components/VolunteeringForm'
import Data from './data.json'
function App() {
  if (!localStorage.getItem('helps')) {
    localStorage.setItem("helps", JSON.stringify(Data.volunteers)); 
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path='Voulnteerings' element={<Volunteering />}></Route>
        <Route path='VoulnterringPage/:id' element={<VolunteeringPage />}></Route>
        <Route path='AddVolunteering' element={<VolunteeringForm />}></Route>
        <Route path='Profile' element=''></Route>
      </Route>
      <Route path='Userpage' element={<Userpage />}>
        <Route path="register" element={<Register />}></Route>
        <Route path='Login' element={<Login />}></Route>
      </Route>
    </Routes>
  )
}

export default App
