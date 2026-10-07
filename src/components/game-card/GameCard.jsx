import { Link } from 'react-router-dom'
import './GameCard.css'

export default function GameCard({ game }) {
  return (
    <article className="game-card">
      <div
        className="game-card-cover"
        style={game.coverUrl ? { backgroundImage: `url(${game.coverUrl})` } : undefined}
      >
        <span className="game-card-year">{game.year}</span>
      </div>

      <div className="game-card-body">
        <h3 className="game-card-title">{game.title}</h3>

        <div className="game-card-tags">
          <span className="tag tag-genre">{game.genre}</span>
          <span className="tag">{game.platform}</span>
        </div>

        <p className="game-card-description">{game.description}</p>

        <Link to={`/games/${game.id}`} className="game-card-btn">
          Details
        </Link>
      </div>
    </article>
  )
}
