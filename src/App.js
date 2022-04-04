import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styling
// import "./style.css"
import "./components/sass/index.scss"

// Pages
import Home from './components/pages/Home';
import Marketplace from './components/pages/Marketplace'
import About from './components/pages/About';
import Resources from './components/pages/Resources'
import FAQ from './components/pages/FAQ'

// section components
import MobileMenu from './components/Mobile';
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
                <Route path="/marketplace" exact element={<Marketplace />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/resources" exact element={<Resources />} />
                <Route path="/faq" exact element={<FAQ />} />
            </Routes>
            <Footer />
        </Router>
    )
}

