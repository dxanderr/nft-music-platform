import Header from './components/Header'
import topLeft from './images/top-left.png'
import ellipse from './images/ellipse.png'
import Hero from './components/Hero'
export default function App(){
    return(        
        <div className="home--container">
            <img src={topLeft} className="top-left-blur" alt="bg-blur"/>
            <img src={ellipse} className="bottom-right-blur" alt="bg-blur"/>
            <Header />
            <Hero />
        </div>
    )
}