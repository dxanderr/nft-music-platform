import Hero from '../Hero'
import Banner from '../Banner'
import Info from '../Info'
import Guide from '../Guide'
import topLeft from '../../images/top-left.png'
import spotlight from '../../images/ellipse.png'
import Cards from '../Cards'



export default function Home(){

    return (
        <div className="home-container">
            <img src={topLeft} className="bg top-left-blur" alt="bg-image" />
            <img src={topLeft} className="bg card-bg" alt="bg-image" />
            <img src={spotlight} className="bg bottom-right-blur" alt="bg-image"/>
            <Hero />
            <Banner />
            <Info />
            <Guide />
            <Cards />
        </div>
    )
}
