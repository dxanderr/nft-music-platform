import Header from './components/Header'
import topLeft from './images/top-left.png'

export default function App(){
    return(        
        <div className="home--container">
            <img src={topLeft} className="top-left-blur" alt="bg-blur"/>
            <Header />
        </div>
    )
}