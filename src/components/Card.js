import SingleCopy from '../images/cube.svg'
import Active from '../images/active.svg'
import '../style.css'

export default function Card2(props){
    let { photo, profile, name, title, bid, active, available_nfts, available_nfts_amt } = props.card
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
                <div className="card-bottom">
                    <div className="card--price">
                        <p className="total-raised-header">Total Raised</p>
                        <p className="card--value">{bid} Eth</p>
                    </div>
                    { available_nfts ? 
                        <div className="available_nfts">
                            <p className="stock">AVAILABLE NFTS</p>
                            <p className="num-nfts">{ available_nfts_amt }</p>
                        </div>
                        :
                        <img className="single-copy" src={SingleCopy} alt=""/>
                    }    
                </div>
            </div>
        </div>
    )
}