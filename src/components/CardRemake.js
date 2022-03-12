import Data from './CardData.js';
import Card from './Card2';

export default function CardRemake(){
    const cardObjects = Data.map( card =>{
        return (
            <Card 
                key = {card.id}
                card = {card}
            />
        )   
    })

    return(
        <div className="card-item">
            {cardObjects}
        </div>
    )
}