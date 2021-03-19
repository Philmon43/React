import React from "react"
import Container from "./Components/Container/Container";
import PlayerCard from "./Components/playercard/PlayerCard";
import Console from "./Components/Console/Console";
import RandomNumber from "./Hooks/RandomNumber"

class App extends React.Component{
    defaultStyle = "play_card player_";

    state = {
        scores: [0, 0],
        diceValue: [0, 0],
        style:  [this.defaultStyle+"1", this.defaultStyle+"2"],
        title: ["Player 1", "Player 2"],
        pointToAchive: 10,
        currentScore: 0,
        activePlayer: 0,
    }


    //swich player
    setActivePlayer = () => {
        // eslint-disable-next-line default-case
        switch(this.state.activePlayer){
            case 0:
                this.setState({
                    style: [this.defaultStyle+"1 inactive", this.defaultStyle+"2"],
                    activePlayer: 1
                })
                break
            case 1:
                this.setState({
                    style: [this.defaultStyle+"1", this.defaultStyle+"2 inactive"],
                    activePlayer: 0
                })
                break
        }
    }


    //disableButtons 
    disableBtn = () => {
        document.querySelectorAll(".cutome_btn").forEach((el, i) => {
            if(i > 0){
                el.classList.add("disable")
            }
        });
    }

    //enable buttons
    enableBtn = () => {
        document.querySelectorAll(".cutome_btn").forEach((el, i) => {
            if(i > 0){
                el.classList.remove("disable")
            }
        });
    }

    //on new Game button click
    newGame = () => {
        this.setState({
            scores: [0, 0],
            currentScore: 0,
            activePlayer: 0,
            diceValue: [0, 0],
            style:  [this.defaultStyle+"1", this.defaultStyle+"2 inactive"],
            title: ["Player 1", "Player 2"],
            pointToAchive: 10 
        })
        this.enableBtn()
    }

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
        if(newScore[this.state.activePlayer] >= this.state.pointToAchive){
            let winner = this.state
                winner.style[this.state.activePlayer] = this.defaultStyle+this.state.activePlayer+" winner" // bug 
                winner.title[this.state.activePlayer] = "W I N N E R" // bug 
                this.setState({diceValue: [0, 0]})
                this.disableBtn()
        }else{
            this.setActivePlayer()   
        }     
    }
    
    componentDidMount(){
        let active = 0
        this.setState({
            style: [this.defaultStyle+active, this.defaultStyle+"2 inactive"],
           activePlayer: active
        });
    }
    
    componentDidUpdate(){
        if(this.state.diceValue[0] === 6 &&this.state.diceValue[1] === 6){
            this.disableBtn()
            setTimeout(() => {
                this.setState({diceValue: [0, 0], currentScore: 0})
                this.setActivePlayer()
                this.enableBtn()
            }, 2000)
        }
    }
    

    render(){
        return(
            <Container>
                <PlayerCard 
                    player={this.state.style[0]}
                    player_n= {this.state.title[0]}
                    score={this.state.scores[0]}
                    currentScore = {this.state.activePlayer===0?this.state.currentScore:0}
                />

                <Console
                 onNewButtonClick={this.newGame}
                 onRollButtonClick={this.rollDice}
                 onHoldScoreClick={this.holdScore}
                 setDiceOne={this.state.diceValue[0]}
                 setDiceTwo={this.state.diceValue[1]}
                 />

                <PlayerCard
                    player={this.state.style[1]}
                    player_n = {this.state.title[1]}
                    score={this.state.scores[1]}
                    currentScore = {this.state.activePlayer===1?this.state.currentScore:0}
                />
            </Container>
        )
    }
}

export default App;