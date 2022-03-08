import styled from 'styled-components'
import Nav from '../Nav'
import Hero from '../Hero'
import Banner from '../Banner'
import Info from '../Info'
import Guide from '../Guide'
import Data from '../../data'
import Card from '../Card'
import topLeft from '../../images/top-left.png'
import spotlight from '../../images/ellipse.png'
import '../../style.css'

export default function Home(){
    const cardObjects = Data.map(card => {
        return <Card
            key={card.id}
            card={card}
        />
    })
    return (
        <HomeStyled>
            <img src={topLeft} className="top-left-blur" alt="bg-image" />
            <img src={topLeft} className="card-bg" alt="bg-image" />
            <img src={spotlight} className="bottom-right-blur" alt="bg-image" />
            <div className="nav-fog"></div>
            <Nav />
            <Hero />
            <Banner />
            <Info />
            <Guide />
            <h3 className="cards-title">Discover Music NFT</h3>
            <section className="cards">
                {cardObjects}
            </section>
        </HomeStyled>
    )
}

const HomeStyled = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    background: #020106;
    z-index: 0;

    .top-left-blur{
        position: absolute;
        z-index: -1;
        top: -650px;
        left: -600px;
        height: 1352px;
    }

    .bottom-right-blur{
        position: absolute;
        top: 800px;
        right: -600px;
        height: 1300px;
        z-index: -1;
    }

`