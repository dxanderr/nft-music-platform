import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import topLeft from "./images/top-left.png"
import spotlight from "./images/ellipse.png"
// components
import Home from './components/pages/Home';
import About from './components/pages/About';
import "./style.css"
import Footer from './components/Footer';
import Navbar from './components/Nav';

export default function App(){
    return(        
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
            </Routes>
            <Footer />
        </Router>
    )
}

