import React from "react"
import Container from "./Components/Container/Container";
import PlayerCard from "./Components/playercard/PlayerCard";
import Console from "./Components/Console/Console";
import RandomNumber from "./Hooks/RandomNumber";

class App extends React.Component{
    state = JSON.parse(localStorage.getItem("state")) || {
        scores: [0, 0],
        diceValue: [0, 0],
        title: ["Player 1", "Player 2"],
        pointToAchive: 100,
        currentScore: 0,
        activePlayer: 0,
    }

    elemntSelectros = () => {
        return{
            button: document.querySelectorAll(".cutome_btn"),
            playerCard: document.querySelectorAll(".play_card")
        }
    }

    syncLocalSorage = () => localStorage.setItem("state", JSON.stringify(this.state))

    setActivePlayer = async () => {
        let viceVersa = this.state.activePlayer === 1? 0: 1;
        await this.elemntSelectros().playerCard[viceVersa].classList.add("inactive")
        await this.elemntSelectros().playerCard[this.state.activePlayer].classList.remove("inactive")
    }

    swichPlayer =  () => this.setState({activePlayer: this.state.activePlayer===0?1:0})

    disableBtn = () => {
        this.elemntSelectros().button.forEach((el, i) => {
            if(i > 0){
                el.parentElement.classList.add("disable")
                el.classList.add("disable")
            }
        });
    }

    enableBtn = () => {
        this.elemntSelectros().button.forEach((el, i) => {
            if(i > 0){
                el.parentElement.classList.remove("disable")
                el.classList.remove("disable")
            }
        });
    }

    setInputvalue = (value) => {
        this.newGame()
        this.setState({pointToAchive: value})
    }

    newGame = () => {
        this.setState({
            scores: [0, 0],
            currentScore: 0,
            activePlayer: 0,
            diceValue: [0, 0],
            title: ["Player 1", "Player 2"],
            pointToAchive: this.state.pointToAchive
        })
        this.elemntSelectros().playerCard.forEach((el) => el.classList.remove("winner"));
        this.elemntSelectros().playerCard[0].classList.remove("inactive")
        this.elemntSelectros().playerCard[1].classList.add("inactive")
        this.enableBtn()
    }

    rollDice = async () => {
        let radomDiceOne = RandomNumber();
        let radomDiceTwo = RandomNumber();
        await this.setState({
            diceValue: [radomDiceOne, radomDiceTwo], 
            currentScore: this.state.currentScore+(radomDiceOne+radomDiceTwo)
        })
    }

    holdScore = async () => {
        let active = this.state.activePlayer;
        await this.setState((state) => {
            let copyScores = state.scores
            copyScores[active] += state.currentScore
            state.currentScore = 0
        });
        if(this.state.scores[active] >= this.state.pointToAchive){
            let winner = "W I N N E R";
            this.elemntSelectros().playerCard[active].classList.add("winner")
            this.setState((state) => {
                state.title[active] = winner
                state.diceValue = [0, 0]
            })
            this.disableBtn()
        }
        await this.swichPlayer()
        await this.setActivePlayer()
    }
    
    componentDidMount(){
        this.setState({diceValue: [0, 0]})
        this.setActivePlayer()
    }
    
    componentDidUpdate(){
        localStorage.setItem("state", JSON.stringify(this.state))
        if(this.state.diceValue[0]+this.state.diceValue[1] === 12){
            this.disableBtn()
            setTimeout(() => {
                this.setState({diceValue: [0, 0], currentScore: 0})
                this.enableBtn()
                this.swichPlayer()
                this.setActivePlayer()
            }, 2000)
        }
    }
    render(){
        return(
            <Container>
                <PlayerCard 
                    player="play_card player_1"
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
                 handleInputValue={(value) => this.setInputvalue(value)}
                 placeHolder = {this.state.pointToAchive}
                 />

                <PlayerCard
                    player="play_card player_2"
                    player_n = {this.state.title[1]}
                    score={this.state.scores[1]}
                    currentScore = {this.state.activePlayer===1?this.state.currentScore:0}
                />
            </Container>
        )
    }
}

export default App;