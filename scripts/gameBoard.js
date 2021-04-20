import { createPlayer } from './player.js';

export const GameBoard = () => {
    // Virtual game board
    let squares = ['', '', '', '', '', '', '', '', ''];

    // Initiate players
    let playerOne = createPlayer({ name: "Player One", symbol: "X" });
    let playerTwo = createPlayer({ name: "Player Two", symbol: "O" });

    let currentPlayer = playerOne;

    // Cache board
    let cachedSquares = Array.from(document.querySelectorAll('.board__square'));

    // Bind events
    cachedSquares.forEach((item, idex) => {
        item.addEventListener('click', fillSquare)
    });

    function fillSquare() {
        unbindEventListener(this);
        this.innerText = currentPlayer.symbol;
        switchCurrentPlayer();

    }

    function unbindEventListener(square) {
        square.removeEventListener('click', fillSquare);
    }

    function switchCurrentPlayer() {
        currentPlayer = (currentPlayer === playerOne) ? playerTwo : playerOne;
    }
};