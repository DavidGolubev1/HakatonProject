import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import HomePage from './Components/Homepage'
import Register from './Components/Register'
import About from './Components/About'
import Contact from './Components/Contact'
import Volunteering from './Components/Voulnteering'
import Layout from './Components/Layout'
import VolunteeringPage from './Components/VolunteeringPage'
import Userpage from './Components/Userpage'
import Notfound from './Components/Notfound'
import Profile from './Components/Profile'
import VolunteeringForm from './Components/VolunteeringForm'
import Data from './data.json'
import Users from "./Users.json"
import * as React from "react"

function App() {
  if (!localStorage.getItem('helps')) {
    localStorage.setItem("helps", JSON.stringify(Data.volunteers)); 
  }
  if (!localStorage.getItem("users")){
    localStorage.setItem("users" , JSON.stringify(Users.users))
  }
  if (!localStorage.getItem("logged-user")){
    localStorage.setItem("logged-user" , "")
  }

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path='About' element={<About/>}></Route>
        <Route path='Contact' element={<Contact/>}></Route>
        <Route path='Voulnteerings' element={<Volunteering />}></Route>
        <Route path='VoulnterringPage/:id' element={<VolunteeringPage />}></Route>
        <Route path='Voulnteerings/VoulnterringPage/:id' element={<VolunteeringPage />}></Route>
        <Route path='profile/VoulnterringPage/:id' element={<VolunteeringPage />}></Route>
        <Route path='VolunteeringForm' element={<VolunteeringForm />}></Route>
        <Route path='Profile' element={<Profile/>}></Route>
      </Route>
      <Route path='*' element={<Notfound/>}></Route>
      <Route path='Userpage' element={<Userpage />}>
        <Route path="register" element={<Register />}></Route>
        <Route path='Login' element={<Login />}></Route>
      </Route>
    </Routes>
  )
}
export default App;
