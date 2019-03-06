import React, { Component } from "react";
import Masterlist from "../../../characters.json";
import Gameresults from "./ResultList";
import Gamebar from "../Gamebar/Gamebar";
import GameOver from "./GameOver";

export default class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Masterlist, Count: 0, Gameover: false,
        };
        this.getId = this.getId.bind(this);
        this.updateCounterClick = this.updateCounterClick.bind(this);
        this.newGame = this.newGame.bind(this);
    }

    // Current Object Tracker (for use by other game functions)
    getId = input => {
        if (input.isClicked === true) {
            this.setState({ Gameover: true });
        } else
            this.changeAndShuffle(input);
    }

    // Increment Click Counter
    updateCounterClick = () => {
        this.setState({
            Count: this.state.Count + 1
        });
    }

    // Shuffle Function
    shuffle = (array) => {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Reset Game State to Initial
    newGame = (e) => {
        this.setState({ Masterlist: Masterlist, Count: 0, Gameover: false });
    }

    // User Click Handler (ie Game Logic)
    changeAndShuffle = whichOneClicked => {
        const changeThisOne = whichOneClicked.id;
        const updatedMasterlist = this.state.Masterlist
        updatedMasterlist[changeThisOne].isClicked = true;
        this.shuffle(updatedMasterlist);
        this.setState({
            Masterlist: updatedMasterlist
        });
    }

    // Render Logic
    render() {
        if (this.state.Gameover === false) {
            return (
                <div className="wrapper">
                    <Gamebar
                        countstate={this.state.Count}
                        gamestate={this.state.Gameover}
                    />
                    <Gameresults
                        results={this.state.Masterlist}
                        updateCounterClick={this.updateCounterClick}
                        changeAndShuffle={this.changeAndShuffle}
                        getId={this.getId}
                    />
                </div>
            );
        } else {
            return (
                <GameOver
                    countstate={this.state.Count}
                    gamestate={this.state.Gameover}
                    newGame={this.newGame}
                />
            );
        }
    }
}