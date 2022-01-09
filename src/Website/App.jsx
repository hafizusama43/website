import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle'
import './css/style.css'
import { Routes, Route,Navigate } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Error from './components/Error'

const App = () => {
    return (
        <>
           <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/services" element={<Services />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route path="*" element={<Error />}></Route>
            </Routes>
            <Footer/>
        </>
    )
}

export default App
