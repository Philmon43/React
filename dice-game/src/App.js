import React from "react"
import Container from "./Components/Container/Container";
import PlayerCard from "./Components/playercard/PlayerCard";
import Console from "./Components/Console/Console";
import RandomNumber from "./Hooks/RandomNumber"

class App extends React.Component{
    state = {
        scores: [0, 0],
        currentScore: 0,
        activePlayer: 0,
        diceValue: [0, 0],
        playerOne: "play_card player_1",
        playerTwo: "play_card player_2",
    }

    //swich player
    switchPlayer = () => {
        switch(this.state.activePlayer){
            case 0:
                this.setState({playerTwo: "play_card player_2", playerOne: "play_card player_1 inactive",activePlayer: 1});
                break
            case 1:
                this.setState({playerOne: "play_card player_1", playerTwo: "play_card player_2 inactive",activePlayer: 0});
                break
            default:
                break
        }
    }

    //on new Game button click
    newGame = () => console.log("new game")

    //on roll dice button click
    rollDice = () => {
        let radomDiceOne = RandomNumber();
        let radomDiceTwo = RandomNumber();
        this.setState({
            diceValue: [radomDiceOne, radomDiceTwo], 
            currentScore: this.state.currentScore+(radomDiceOne+radomDiceTwo)
        })
    }

    //on hold dice button click
    holdScore = () => {
        let runningScore = this.state.currentScore;
        let newScore = this.state.scores;
        newScore[this.state.activePlayer] += runningScore
        this.setState({currentScore: 0, scores: newScore});
        this.switchPlayer()
    }

    
    componentDidMount(){
        //set defaul player
        this.setState({
            playerOne: "play_card player_1 inactive",
            playerTwo: "play_card player_2",
            activePlayer: 0
        });
    }
    
    componentDidUpdate(){

    }
    
    getDiceOnevalue= () => this.state.diceValue[0];
    getDiceTwovalue= () => this.state.diceValue[1];

    render(){
        return(
            <Container>
                <PlayerCard 
                    player={this.state.playerOne}
                    player_n= "Player 1"
                    score={this.state.scores[0]}
                    currentScore = {this.state.activePlayer===0?this.state.currentScore:0}
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
                    currentScore = {this.state.activePlayer===1?this.state.currentScore:0}
                />
            </Container>
        )
    }
}

export default App;