import styled from 'styled-components'
import Image from '../images/ellipse.png'
export default function Card(props){
    let { coverImg, stats, location, title, price, openSpots } = props.card
    let badgeText
    return(
        <CardStyled>
            <div className="card">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={Image} className="card--image" alt='blank' />
                <div className="card--stats">
                    <img src={Image} className="card--star" alt="start" />
                    <span>{stats.rating}</span>
                    <span className="gray">({stats.reviewCount}) • </span>
                    <span className="gray">{location}</span>
                </div>
                <p>{title}</p>
                <p><span className="bold">From ${price}</span> / person</p>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled.div`

    .card {
        position:relative;
        width: 300px;
        font-size: 12px;
        flex: 0 0 auto;         
        display: flex;          
        flex-direction: column; 
    }

    .card--image {
        width: 100%;
        height: 233.66px; 
        border-radius: 9px;
        margin-bottom: 9px;
    }

    /* ADD */
    .card--title {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .card--stats {
        display: flex;
        align-items: center;
    }

    .card--star {
        height: 14px;
    }

    /* ADD */
    .card--price {
        margin-top: auto;
    }


    .card--badge{
        position: absolute;
        top: 6px;
        left: 6px;
        background-color: white;
        padding: 5px 7px;
        border-radius: 2px;
        font-weight: bold;
    }
`