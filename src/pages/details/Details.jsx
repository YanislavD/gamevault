import { useParams } from 'react-router-dom'

export default function Details() {
    const { gameId } = useParams()

    return (
        <div>
            <h1>Game Details</h1>
            <p>Game ID: {gameId}</p>
        </div>
    )
}
