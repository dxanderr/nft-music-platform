import styled from 'styled-components'
import Header from '../Header'
import Hero from '../Hero'
import Banner from '../Banner'
import Info from '../Info'
import Guide from '../Guide'
import topLeft from '../../images/top-left.png'
import ellipse from '../../images/ellipse.png'
import '../../style.css'

export default function Home(){
    return (
        <HomeStyled>
            <Header />
            <img src={topLeft} className="top-left-blur" alt="bg-blur" />
            <img src={ellipse} className="bottom-right-blur" alt="bg-blur" />
            <Hero />
            <Banner />
            <Info />
            <Guide />
        </HomeStyled>
    )
}

const HomeStyled = styled.div`

    position: relative;
    height: 100%;
    width: 100%;
    background: #020106;

    .top-left-blur{
        position: absolute;
        /* z-index: -1; */
        top: -650px;
        left: -600px;
        height: 1352px;
        z-index: -1;
    }

    .bottom-right-blur{
        position: absolute;
        /* z-index: -1; */
        top: 800px;
        right: -600px;
        /* transform: rotate(0deg); */
        height: 1300px;
        z-index: -1;
    }

`