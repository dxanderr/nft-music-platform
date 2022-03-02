import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import twitter from '../images/twitter.svg'

export default function Header(){
    return(
        <div className="header--container">
            <div className="logo">
                <strong>Music</strong>
                <p>NFT Platform</p>
            </div>
 
            <nav>
                <p>MARKETPLACE</p>
                <p>ABOUT</p>
                <p>RESOURCES</p>
                <p>FAQ</p>
            </nav>

            <div className="social--links">
                <img src={facebook} alt="facebook-icon"></img>
                <img src={instagram} alt="instagram-icon"></img>
                <img src={twitter} alt="twitter-icon"></img>
            </div>
        </div>
    )
}