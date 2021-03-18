import "./playercard.css"

// play_card player_1 active
const PlayerCard = ({player, player_n}) =>{
    return (
        <div className={player}>
            <div className="player_box_upper">
                <h1 className="player_number">{player_n}</h1>
                <h1 className="player_global_score">0</h1>
            </div>
            <div className="player_box_lower">
                <p>Current Score</p>
                <p className="current_score">0</p>
            </div>
        </div>
    )
}

export default PlayerCard