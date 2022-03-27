import {useState, useEffect} from 'react';
import Card from './Card'
import Data from './CardData'

export default function Cards(){
    const [filtered, setFiltered] = useState([...Data])
    const [activeGenre, setActiveGenre] = useState('all')

    useEffect(() => {
        if (activeGenre === 'all') {
            return setFiltered([...Data]);  
        }
        const filter = Data.filter((card) =>
            card.genre.includes(activeGenre)
        );
        setFiltered(filter)
    }, [activeGenre]);

    const cardObjects = filtered.map(card => {
        return <Card
            key={card.id}
            card={card}
        />
    })
    return(
        <section className="cards-container">
            <h3 className="cards-title">Discover Music NFT</h3>
            <div className="filter-container">
                <button className={activeGenre === 'all' ? "filter-btn active" : "filter-btn"} onClick={() => setActiveGenre('all')}>All</button>
                <button className={activeGenre === 'hip-hop' ? "filter-btn active" : "filter-btn"} onClick={() => setActiveGenre('hip-hop')}>Hip Hop</button>
                <button className={activeGenre === 'r&b' ? "filter-btn active" : "filter-btn"} onClick={() => setActiveGenre('r&b')}>R&B</button>
                <button className={activeGenre === 'pop' ? "filter-btn active" : "filter-btn"} onClick={() => setActiveGenre('pop')}>Pop</button>
                <button className={activeGenre === 'rock' ? "filter-btn active" : "filter-btn"} onClick={() => setActiveGenre('all')}>Rock</button>
            </div>
            <div className="cards">
                {cardObjects}
            </div>
        </section>
    )
}