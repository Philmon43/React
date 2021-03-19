import React from "react"
import Container from "./Components/Container/Container";
import PlayerCard from "./Components/playercard/PlayerCard";
import Console from "./Components/Console/Console";

class App extends React.Component{
    state = {
        scores: [0, 0],
        currentScore: 0,
        activePlayer: 0,
        playerOne: "play_card player_1",
        playerTwo: "play_card player_2"
    }

    switchPlayer = () => {
        switch(this.state.activePlayer){
            case 0:
                this.setState({
                    playerTwo: "play_card player_2 inactive", 
                    playerOne: "play_card player_1",
                    activePlayer: 1
                })
                break
            case 1:
                this.setState({
                    playerOne: "play_card player_1 inactive", 
                    playerTwo: "play_card player_2",
                    activePlayer: 0
                })
                break
            default:
                break
        }
    }

    newGame = () => console.log("new game")
    rollDice = () => console.log("roll the dice")
    holdScore = () => this.switchPlayer()
    getDiceOnevalue= () => 1
    getDiceTwovalue= () => 5
    render(){
        return(
            <Container>
                <PlayerCard 
                    player={this.state.playerOne}
                    player_n= "Player 1"
                    score={this.state.scores[0]}
                />

                <Console
                 onNewButtonClick={this.newGame}
                 onRollButtonClick={this.rollDice}
                 onHoldScoreClick={this.holdScore}
                 setDiceOne={this.getDiceOnevalue}
                 setDiceTwo={this.getDiceTwovalue}
                 />

                <PlayerCard
                    player={this.state.playerTwo}
                    player_n = "Player 2"
                    score={this.state.scores[1]}
                />
            </Container>
        )
    }
}

export default App;