import Monkey from '../images/nft_ad.png'
import Shapes from '../images/shape.png'
export default function Info(){
    return(
        <div className="info-container">
            <section className="first">
                <div className="text first--text">
                    <h3>How do Music NFTs work?</h3>
                    <p className="paragraph">NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artists get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited.</p>
                </div>
                <img src={Monkey} alt="card example" className="info_image" />
            </section>
            <section className="second">
                <div className="text second--text">
                    <h3>How do Music NFTs work?</h3>
                    <p className="paragraph" >NFTs are unique assets stored and tradable on a blockchain. They are, immutable, scarce and publicly verifiable. In the music world, artists get to sell limited digital content to their fans who pay via crypto. You can now produce any music content that cannot be counterfeited.</p>
                </div>    
                <img src={Shapes} alt="card example" className="info_image shapes" />
            </section>
        </div>
    )
}
