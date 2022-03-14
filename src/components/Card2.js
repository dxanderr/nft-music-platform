import Eth from '../images/eth.svg'
import Active from '../images/active.svg'
import '../style.css'

export default function Card2(props){
    let { photo , profile, name, title, bid, active } = props.card
    let badgeText

    if (active){
        badgeText = "Online"
    } else {
        badgeText = "Offline"
    }

    return(
        <div className="card">
            <div className="image-container">
                <img src={photo} className="image" alt='blank' />
            </div>
            <div className="card--info">
                <img src={profile} alt="profile-pic" className="profile-pic" />
                
                { badgeText === "Online" && 
                     <img src={Active} alt="active status" className="active-badge" />
                }
                {/* react icon */}
                <p className="artist-name">{name}</p>
                <p className="song--title">{title}</p>
                <div className="card--price">
                    <p className="total-raised-header">Total Raised</p>
                    <p className="card--value">{bid} Eth</p>
                </div>
            </div>
        </div>
    )
}