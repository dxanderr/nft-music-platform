import styled from 'styled-components'
import Globe from '../images/Globe.svg'
export default function Banner(){
    return(
        <BannerStyled>
            <div className="cell">
                <h2 className="banner">NEW WAY TO REACH THE FAN</h2>
                <img src={Globe} alt="globe" className="globe"/>
            </div>
            <div className="cell">
                <h2 className="banner">NEW WAY TO REACH THE FAN</h2>
                <img src={Globe} alt="globe" className="globe"/>
            </div>
            <div className="cell">
                <h2 className="banner">NEW WAY TO REACH THE FAN</h2>
                <img src={Globe} alt="globe" className="globe"/>
            </div>
            <div className="cell">
                <h2 className="banner">NEW WAY TO REACH THE FAN</h2>
                <img src={Globe} alt="globe" className="globe"/>
            </div>
            <div className="cell">
                <h2 className="banner">NEW WAY TO REACH THE FAN</h2>
                <img src={Globe} alt="globe" className="globe"/>
            </div>
            <div className="cell">
                <h2 className="banner">NEW WAY TO REACH THE FAN</h2>
                <img src={Globe} alt="globe" className="globe"/>
            </div>
            <div className="cell">
                <h2 className="banner">NEW WAY TO REACH THE FAN</h2>
                <img src={Globe} alt="globe" className="globe"/>
            </div>
            <div className="cell">
                <h2 className="banner">NEW WAY TO REACH THE FAN</h2>
                <img src={Globe} alt="globe" className="globe"/>
            </div>
            <div className="cell">
                <h2 className="banner">NEW WAY TO REACH THE FAN</h2>
                <img src={Globe} alt="globe" className="globe"/>
            </div>
        </BannerStyled>
    )
}


const BannerStyled = styled.div`

height: 60px;
margin-top: 80px;
display: flex;
flex-wrap: clip;
align-items:center;
border-top: 1px solid white;
border-bottom: 1px solid white;

.cell{
    display: flex;
    align-items: center;
    flex: 1 0 auto;
}

.globe{
    height: 40px;
    margin: 0 10px;
}

h2 {
    font-size: 1em;
    font-weight: 300;
    color:white;
    /* animation: animate 30s linear infinite; */
}

/* @keyframes animate 
{ 
    0% {
        transform: translateX(0) 
    }
    50% {
        transform: translateX(-50%) 
    }
    100% {
        transform: translateX(0)
    }

} */



`