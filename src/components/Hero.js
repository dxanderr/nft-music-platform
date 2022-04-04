import Solana from '../images/solana.svg'
import RightArrow from '../images/carret_right.svg'
import Card from '../images/card_example.png'

export default function Hero(){
    return(
        <div className="hero-container">
            <div className="left--column">
                <h2>Music for NFT Creators.</h2>
                <h3>Digital Music for fans.</h3>
                <p className="hero--text">Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming yeaer -- doubtedly changing the trajectory of countless budding music careers.</p>

                <section className="hero--details">
                    <div className="powered--by">
                        <p>Powered by</p>
                        <img src={Solana} className="solana--logo" alt="solana logo" />
                    </div> 

                    <button className="discover--more">
                        Discover More
                        <img src={RightArrow} className="right-arrow" alt="Right arrow" />
                    </button>
                </section>
            </div>
            <div className="right--column">
                <img src={Card} className="hero-cards" alt="hand" />
            </div>
        </div>
    )
}
