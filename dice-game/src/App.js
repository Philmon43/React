import Container from "./Components/Container/Container";
import PlayerCard from "./Components/playercard/PlayerCard";
import Console from "./Components/Console/Console";

const App = () => {
    return(
        <Container>
            <PlayerCard 
                player="play_card player_1 active"
                player_n= "Player 1"
            />
            <Console />
            <PlayerCard
                player="play_card player_2"
                player_n = "Player 2"
            />
        </Container>
    )
}

export default App