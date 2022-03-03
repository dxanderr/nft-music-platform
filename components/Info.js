import styled from 'styled-components'
import ellipse from '../images/ellipse.png'

export default function Info(){
    return(
        <InfoStyled>
            <section className="first">
                <div className="first--text">
                    <h3>How do Music NFTs work?</h3>
                    <p className="info--text">NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artists get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited.</p>
                </div>
                <img src={ellipse} alt="placeholder" className="placeholder" />
            </section>
            <section className="second">
                <div className="second--text">
                    <h3>How do Music NFTs work?</h3>
                    <p className="info--text" >NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artists get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited.</p>
                </div>
                <img src={ellipse} alt="placeholder" className="placeholder" />
            </section>

        </InfoStyled>
    )
}

const InfoStyled = styled.div`

    section{

        margin: 60px 40px 0 40px;

    }

    .placeholder{
        border: 1px solid grey;
        width: 100%;
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



`