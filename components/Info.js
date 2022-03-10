import styled from 'styled-components'
import ellipse from '../images/ellipse.png'

export default function Info(){
    return(
        <InfoStyled>
            <section className="first">
                <div className="text first--text">
                    <h3>How do Music NFTs work?</h3>
                    <p className="info--text">NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artists get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited.</p>
                </div>
                <img src={ellipse} alt="placeholder" className="placeholder" />
            </section>
            <section className="second">
                <div className="text second--text">
                    <h3>How do Music NFTs work?</h3>
                    <p className="info--text" >NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artists get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited.</p>
                </div>
                <img src={ellipse} alt="placeholder" className="placeholder" />
            </section>
        </InfoStyled>
    )
}

const InfoStyled = styled.div`
    margin: 40px auto;
    padding: 0 10%;
    max-width:1600px;

    section{
        margin: 60px 0;
    }

    .placeholder{
        border: 1px solid grey;
        width:300px;
    }

    h3{
        font-size: 40px;
        font-weight: 400;
    }

    .info--text{
        line-height: 1.75rem;
        margin: 60px 0px 20px 0px;
        color: #C4C4C4;        
    }


    @media screen and (min-width: 986px){
        section{
            display: flex;
            max-width: 100%;
        }

        .text{
            width: 60%;
        }

        .placeholder{
            margin-left: 40px;
        }
    }
`