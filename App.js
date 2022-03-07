import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// components
import Home from './components/pages/Home';
import About from './components/pages/About';
import "./style.css"
import Footer from './components/Footer';

export default function App(){
    return(        
        <Router>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" exact element={<About />} />
            </Routes>
            <Footer />
        </Router>
    )
}

