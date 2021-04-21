import { Game } from './game.js';

export const GameBoard = () => {
    // Virtual game board
    let squares = ['', '', '', '', '', '', '', '', ''];
    let game = (Game)();
    let winningScenarios = getWinningScenarios();

    // Cache Dom
    let cachedSquares = Array.from(document.querySelectorAll('.board__square'));
    let newGameButton = document.querySelector("#newGame");

    // Bind events
    cachedSquares.forEach((item, idex) => {item.addEventListener('click', fillSquare)});
    newGameButton.addEventListener('click', startNewGame);


    function fillSquare() {
        
        let index = parseInt(this.id)
        
        unbindEventListener(this);
        
        this.innerText = game.currentPlayer.symbol;

        squares[index] = game.currentPlayer.symbol;
        
        game.currentPlayer.placedSquares.push(index);
        
        game.checkForWinner();
    }
    
    function unbindEventListener(square) {
        square.removeEventListener('click', fillSquare);
    }

    function startNewGame() {

    }

    function alertWinner() {

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