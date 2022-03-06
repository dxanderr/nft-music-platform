import styled from 'styled-components'
import Data from '../data'
import Card from './Card'

export default function Cards(){
    const CardsComponents = Data.map(card =>{
        return <Card 
            key={card.id}
            card={card}
        />
    })
    return (
        <CardsStyled>
            <h3>Discover Music NFT</h3>
            <section className="cards-list">
                {CardsComponents}
            </section>           
        </CardsStyled>
    )
}


const CardsStyled = styled.div`
    
    padding: 0 10%;
    margin: 40px 0 200px 0;
    .cards-list{
        display: flex;
        flex-wrap: nowrap;
        gap: 20px;
    }

    h3{
        font-size: 40px;
        font-weight: 400;
    }

`
