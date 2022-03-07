import "../style.css"
import Image from '../images/ellipse.png'

export default function Card(props){
    let { coverImg, stats, location, title, price, openSpots } = props.card
    let badgeText
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className="image-container">
            <img src={coverImg} className="image" alt='blank' />
            </div>
            <div className="card--stats">
                {/* <img src={Star} className="card--star" alt="start" /> */}
                <span>{stats.rating}</span>
                <span className="gray">({stats.reviewCount}) • </span>
                <span className="gray">{location}</span>
            </div>
            <p>{title}</p>
            <p><span className="bold">From ${price}</span> / person</p>
        </div>
    )
}
