import React from "react"
import Container from "./Components/Container/Container";
import PlayerCard from "./Components/playercard/PlayerCard";
import Console from "./Components/Console/Console";

class App extends React.Component{
    newGame = () => console.log("new game")
    rollDice = () => console.log("roll the dice")
    holdScore = () => console.log("hold score")
    render(){
        return(
            <Container>
                <PlayerCard 
                    player="play_card player_1 active"
                    player_n= "Player 1"
                />

                <Console
                 onNewButtonClick={this.newGame}
                 onRollDiceClick={this.rollDice}
                 onHoldScoreClick={this.holdScore}
                 />

                <PlayerCard
                    player="play_card player_2"
                    player_n = "Player 2"
                />
            </Container>
        )
    }
}

export default App;