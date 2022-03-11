import styled from 'styled-components'
import Solana from '../images/solana.svg'
import RightArrow from '../images/carret_right.svg'
import Card from '../images/card_example.png'

export default function Hero(){
    return(
        <HeroStyled>
            <div className="left--column">
                <h2>Music for NFT Creators.</h2>
                <h3>Digital Music for fans.</h3>
                <p className="hero--text">Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming yeaer -- doubtedly changing the trajectory of countless budding music careers.</p>

                <section className="hero--details">
                    <div className="powered--by">
                        <p>Powered by</p>
                        <img src={Solana} className="solana--logo" alt="solana logo" />
                    </div> 

                    <button className="discover--more">
                        Discover More
                        <img src={RightArrow} className="right-arrow" alt="Right arrow" />
                    </button>
                </section>
            </div>
            <div className="right--column">
                <img src={Card} className="hand" alt="hand" />
            </div>
        </HeroStyled>
    )
}

const HeroStyled = styled.div`
    margin: auto;
    max-width:1600px;
    padding: 120px 10% 0 10%;  
    .left--column{
        z-index: 2;
        display: block;          
    }
    /* right column with 3D image is removed on mobile */
    .right--column{
        display: none;
        z-index: 1;
        display: none;
        align-items: center;
        justify-content: right;
    }

    .hand{
        height: 350px;
    }
    
    h2,h3{
        font-weight:400;
    }

    h2{
        font-size: 50px;
    }

    h3{
        margin-top: 20px;
        font-size: 30px;
    }

    .hero--text{
        line-height: 1.75rem;
        margin-top: 60px;
        color: #C4C4C4;
    }

    .hero--details{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 60px;
    }

    .solana--logo{
        margin-top: 6px;
        height: 30px;
    }

    button{
        margin-right: 20px;
        padding: 6px 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #C4C4C4;
        background: none;
        border-radius: 20px;
        border: solid 1px #C4C4C4;

        &:hover{
            background: #000;
        }
    }

    .right-arrow{
        height: 26px;
    }


    @media screen and (min-width: 500px){
        .hero--text, .hero--details{
            max-width: 90%;
        }
    }

    @media screen and (min-width: 768px){
        display: flex;
        justify-content: space-between;
        

        h3{
            font-size: 40px;
        }
        
        .hero--text{  
            max-width: 60%;
        }
        
        .hero--details{
            max-width: 60%;
        }

    }

    @media screen and (min-width: 968px){
        padding: 120px 10% 0 10%;
        .left--column{
            width: 50%;
        }

        .hero--text{  
            max-width: 100%;
        }
        
        .hero--details{
            max-width: 100%;
        }    
        
        .canvas{
            height: 400px !important;
            width: 400px !important;
        }
        
        .right--column{
            display: flex;
        }
    }
    @media screen and (min-width: 1200px){
        padding: 120px 10% 0 10%;
        max-width: 1600px;
    }

`