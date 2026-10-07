import GameCard from '../../components/game-card/GameCard.jsx'
import './Catalog.css'

// will be replaced with data from Supabase
const sampleGames = [
    { id: 1, title: 'The Witcher 3', genre: 'RPG', platform: 'PC', year: 2015, description: 'Open-world action RPG where you hunt monsters as Geralt of Rivia.' },
    { id: 2, title: 'Hades', genre: 'Roguelike', platform: 'Switch', year: 2020, description: 'Fight your way out of the Underworld in this fast-paced dungeon crawler.' },
    { id: 3, title: 'Celeste', genre: 'Platformer', platform: 'PC', year: 2018, description: 'Climb a mountain in a tough, heartfelt precision platformer.' },
    { id: 4, title: 'Elden Ring', genre: 'Action RPG', platform: 'PS5', year: 2022, description: 'Explore the Lands Between in a vast, challenging open world.' },
]

export default function Catalog() {
    return (
        <section className="catalog">
            <h1 className="catalog-title">Game Catalog</h1>

            <div className="catalog-grid">
                {sampleGames.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </section>
    )
}
