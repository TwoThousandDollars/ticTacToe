import { createPlayer } from './player.js';
import { GameBoard } from './gameBoard.js'

export const Game = () => {
    // Initialize board
    // let board = (GameBoard)();

    // Initiate players
    let playerOne = createPlayer({ name: "Player One", symbol: "X" });
    let playerTwo = createPlayer({ name: "Player Two", symbol: "O" });
    let currentPlayer = playerOne;

    function switchCurrentPlayer() {
        this.currentPlayer = (this.currentPlayer === playerOne) ? playerTwo : playerOne;
    }

    function checkForWinner() {
        this.switchCurrentPlayer();
    }

    return {
        currentPlayer,
        switchCurrentPlayer,
        checkForWinner
    }

}