import styled from 'styled-components'

export default function Guide(){
    return(
        <GuideStyled>
            <div className="statement">
                <h4>01 /</h4>
                <p className="statement--text">Artists themselves become a platform. NFTs allow artistes, especially upcoming ones, to create an ecosystem that allow genuine fans buy into thier market</p>
            </div>
            <div className="statement">
                <h4>02 /</h4>
                <p className="statement--text">Artists themselves become a platform. NFTs allow artistes, especially upcoming ones, to create an ecosystem that allow genuine fans buy into thier market</p>
            </div>
            <div className="statement">
                <h4>03 /</h4>
                <p className="statement--text" >Artists themselves become a platform. NFTs allow artistes, especially upcoming ones, to create an ecosystem that allow genuine fans buy into thier market</p>
            </div>
        </GuideStyled>
    )
}

const GuideStyled = styled.div `

    margin: 60px 40px;

    h4{
        font-size: 40px;
        font-weight: 500;
    }

    .statement--text{
        margin: 40px 0;
        line-height: 1.75rem;
        color: #C4C4C4;          
    }

`