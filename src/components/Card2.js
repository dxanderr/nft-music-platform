import Eth from '../images/eth.svg'
import '../style.css'

export default function Card2(props){
    let { photo , profile, name, bid, genre, active } = props.card
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
                
                { badgeText === "Online" ? 
                    <p className="badge badge1">
                    {badgeText} 
                    </p> :
                    <p className="badge badge2">{badgeText}</p>
                }
                {/* react icon */}
                <p className="name">{name}</p>
                <p className="genre">{genre}</p>
                <div className="card--price">
                    <p className="grey">Current Bid</p>
                    <img src={Eth} className="coin-img" alt="coin" />
                    <p className="card--value">{bid}</p>
                </div>
            </div>
        </div>
    )
}