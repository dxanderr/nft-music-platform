import "../style.css"


export default function Card(props) {
    let { title, price, coverImg, currImg, tokens } = props.card
    let badgeText
    return (
        <div className="card">
            {/* {badgeText && <div className="card--badge">{badgeText}</div>} */}
            <div className="test">
                <div className="image-container">
                    <img src={coverImg} className="image" alt='blank' />
                </div>
                <div className="card--info">
                    <p className="card--title">{title}</p>
                    <div className="price-container">
                        <div className="coin-price">
                            <img src={currImg} className="curr-logo" alt="start" />
                            <p>{price}</p>
                        </div>
                        <p>{tokens}</p>
                    </div>
                </div>
                <div className="buttons">
                    <button className="button play-now"><p>Play Now</p></button>
                    <button className="button buy"><p>Buy NFT</p></button>
                </div>
            </div>
        </div>
    )
}