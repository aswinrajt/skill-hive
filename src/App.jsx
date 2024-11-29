import { useState } from 'react'
import './App.css'
import './bootstrap.min.css'

import { Routes,Route } from 'react-router-dom'
import Landing from './Pages/Landing'
import Dashboard from './Pages/Dashboard'
import Auth from './Pages/Auth'
import AdminDashboard from './Admin/AdminDashboard'
import TeacherDashboard from './Teacher/TeacherDashboard'
import ManageUser from './Admin/ManageUser'
import StudentDashboard from './Student/Studentdashboard'
import ManageEvents from './Student/ManageEvents'
import ManageEvent from './Teacher/ManageEvent'
// import { ToastContainer } from 'react-toastify'
import AdminAuth from './Pages/AdminAuth'
import TeachersAuth from './Pages/TeachersAuth'
function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<Landing/>}/>
  <Route path='/adminauth' element={<AdminAuth/>}/>
  <Route path='/dash' element={<Dashboard/>}/>
  <Route path='/admindash' element={<AdminDashboard/>}/>
  
  <Route path='/landing' element={<Landing/>}/>
  <Route path='/auth' element={<Auth/>}/>
  <Route path='/mnguser' element={<ManageUser/>}/>
  <Route path='/studentdash' element={<StudentDashboard/>}/>
  <Route path='/studentevent' element={<ManageEvents/>}/>

  <Route path='/teacherdash' element={<TeacherDashboard/>}/>
  <Route path='/teacherauth' element={<TeachersAuth/>}/>
  <Route path='/teacher/manageevnt' element={<ManageEvent/>}/>

</Routes>
    {/* <ToastContainer/> */}
   
    </>
  )
}

export default App
