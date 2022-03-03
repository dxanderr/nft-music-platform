import styled from 'styled-components'
import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'

export default function Header(){
    return(
        <HeaderStyled>
            <div className="logo">
                <strong>Music</strong>
                <p>NFT Platform</p>
            </div>
 
            <nav>
                <p>MARKETPLACE</p>
                <p>ABOUT</p>
                <p>RESOURCES</p>
                <p>FAQ</p>
            </nav>

            <div className="social--links">
                <img src={facebook} alt="facebook-icon"></img>
                <img src={instagram} alt="instagram-icon"></img>
                <img src={twitter} alt="twitter-icon"></img>
            </div>
        </HeaderStyled>
    )
}


const HeaderStyled = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 26px;
    z-index: 1;

    background: rgba(255, 255, 255, 0.116);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border-bottom: solid rgba(255, 255, 255, 0.603) 1px;
    -webkit-backdrop-filter: blur(5px);

    nav{
        display: none;
        z-index: 1;
    }

    nav p{
        margin: 0 16px;
        color: white;

        &:hover{
            color: #2D9FF6;
        }
    }

    .social--links img{
        height: 20px;
        margin: 0 10px;

        &:hover{
            fill: "currentColor";
            color: #2D9FF6;
        }

    }

    @media screen and (min-width: 768px){
        nav{
            display: flex;
        }
    }

    @media screen and (min-width: 1200px){
        padding: 0 10%;
    }
`