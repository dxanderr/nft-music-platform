import styled from 'styled-components'
export default function Info(){
    return(
        <InfoStyled>
            <section className="first">
                <div className="text first--text">
                    <h3>How do Music NFTs work?</h3>
                    <p className="paragraph">NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artists get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited.</p>
                </div>
            </section>
            <section className="second">
                <div className="text second--text">
                    <h3>How do Music NFTs work?</h3>
                    <p className="paragraph" >NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artists get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited.</p>
                </div>    
            </section>
        </InfoStyled>
    )
}

const InfoStyled = styled.div`
    margin: 40px auto;
    padding: 0 10%;
    max-width:1600px;

    /* Rows */
    section{
        margin: 60px 0;
    }

    /* Column */
    .first, .second{
        display: flex;
        align-items:center;
        max-width: 100%;
    }

    /* Header and Text Content */
    /* Header */
    h3{
        font-size: 40px;
        font-weight: 400;
    }

    /* paragraph */
    .paragraph{
        line-height: 1.75rem;
        margin: 60px 0px 20px 0px;
        color: #C4C4C4;        
    }


    /* 3D Object */
    .canvas{
        width:551px
        height: 200px;
        /* border: solid 2px red; */
    }


    @media screen and (min-width: 986px){
        section{
            display: flex;
        }

        .text{
            width: 60%;
        }

        .placeholder{
            margin-left: 40px;
        }
    }
`