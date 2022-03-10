import Card from './Card'
import Data from '../data'

export default function Cards(){
    const cardObjects = Data.map(card => {
        return <Card
            key={card.id}
            card={card}
        />
    })
    return(
        <section >
            <h3 className="cards-title">Discover Music NFT</h3>
            <div className="cards">
                {cardObjects}
            </div>
        </section>
    )
}