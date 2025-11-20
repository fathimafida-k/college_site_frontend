import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Footer from './Footer'
import Auth from './Auth'
import Contact from './Contact'
import {ToastContainer} from 'react-toastify'
import Undergraduate from './Undergraduate'
import Daashboard from './Daashboard'
import ManageStudent from './ManageStudent'
import ManageFaculity from './ManagaFaculity'
import ManageProgram from './ManageProgram'
import AddCourse from './AddCourse'
import ProgramDetails from './ProgramDetails'
import Edit from './Edit'
import About from './About'

function App() {
 
  return (
    <>

        <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick={false}
        theme="colored"
      />
     <Routes>
       <Route path={"/"} element={<Home />} />
           <Route path={"/register"} element={<Auth insideregister={true} />} />
        <Route path={"/login"} element={<Auth />} />
        <Route path={"/contact"} element={<Contact />} />
           <Route path={"/undergraduate"} element={<Undergraduate/>} />
              <Route path={"/about"} element={<About/>} />
           <Route path={"/admin-dashboard"} element={<Daashboard/>} />
             <Route path={"/student-manage"} element={<ManageStudent/>} />
             <Route path={"/faculty-manage"} element={<ManageFaculity/>} />
               <Route path={"/program-manage"} element={<ManageProgram/>} />
                <Route path={"/add"} element={<AddCourse/>} />
                 <Route path={"/edit/:id"} element={<Edit/>} />

                  <Route path="/programs/:id/" element={<ProgramDetails/>} />
      </Routes> 

    </>
  )
}

export default App
