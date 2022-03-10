import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// components
import MobileMenu from './components/Mobile';
import Home from './components/pages/Home';
import About from './components/pages/About';
import "./style.css"
import Footer from './components/Footer';
import Navbar from './components/Nav';

export default function App(){
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return(        
        <Router>
            <Navbar toggle={toggle}/>
            <MobileMenu isOpen={isOpen} toggle={toggle} />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
            </Routes>
            <Footer />
        </Router>
    )
}

