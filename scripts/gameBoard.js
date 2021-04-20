import { createPlayer } from './player.js';
import { Game } from './game.js';

export const GameBoard = () => {
    // Virtual game board
    let squares = ['', '', '', '', '', '', '', '', ''];
    let winningScenarios = getWinningScenarios();

    // Initiate players
    let playerOne = createPlayer({ name: "Player One", symbol: "X" });
    let playerTwo = createPlayer({ name: "Player Two", symbol: "O" });
    let currentPlayer = playerOne;

    // Cache Dom
    let cachedSquares = Array.from(document.querySelectorAll('.board__square'));
    let newGameButton = document.querySelector("#newGame");

    // Bind events
    cachedSquares.forEach((item, idex) => {item.addEventListener('click', fillSquare)});
    newGameButton.addEventListener('click', startNewGame);


    function fillSquare() {
        
        let index = parseInt(this.id)
        
        unbindEventListener(this);
        
        this.innerText = currentPlayer.symbol;

        squares[index] = currentPlayer.symbol;
        
        currentPlayer.placedSquares.push(index);
        
        checkForWinner();
    }

    function unbindEventListener(square) {
        square.removeEventListener('click', fillSquare);
    }

    function switchCurrentPlayer() {
        currentPlayer = (currentPlayer === playerOne) ? playerTwo : playerOne;
    }

    function checkForWinner() {
        
        switchCurrentPlayer();
    }

    function startNewGame() {

    }

    function getWinningScenarios() {
        return [
            [1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [7,5,6]
        ]
    }

};