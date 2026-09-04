import React from 'react'
import "./Styles/app.scss"
import Header from "./Components/Header"
import Home from './Components/Home'
import Project from './Components/Project'
import Education from './Components/Education'
import Certificates from './Components/Certificates'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import  {Toaster} from 'react-hot-toast'
const App = () => {
  return (
   <>
      <Toaster />
      <Header />
      <Home />
      <Project />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
   
   </>
  )
}

export default App