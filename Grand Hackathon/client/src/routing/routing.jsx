import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from "../pages/Home"
import Doctor from "../pages/Doctor"
import About from "../pages/About"
import Pateints from "../pages/Pateints"
import Error from "../pages/Error"
import Appointment from "../pages/Appointment"
import Ourdoctors from "../pages/OurDoctors"
import Allapointment from "../pages/Allapointment"

const Routing = () => {
  return (
    <Routes>
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/doctor' element={<Doctor/>}/>
        <Route path='/pateints' element={<Pateints/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/ourdr' element={<Ourdoctors/>}/>
        <Route path='/allapointment' element={<Allapointment/>}/>
        <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
  )
}

export default Routing