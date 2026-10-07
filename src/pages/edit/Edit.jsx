import { useParams } from 'react-router-dom'

export default function Edit() {
    const { gameId } = useParams()

    return (
        <div>
            <h1>Edit Game</h1>
            <p>Game ID: {gameId}</p>
        </div>
    )
}
