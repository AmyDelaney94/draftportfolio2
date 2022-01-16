const boxElements = document.querySelectorAll('[data-cell]')
const playerX = 'X'
const playerO = 'O'
let X_Turn
const winningBoard = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
]

boxElements.forEach(box => {
    box.addEventListener('click',handleClick, {once: true})
});


/**
 * Function for clicking the box designed to take the Event (e)
 */
function handleClick(e) {
    const box = e.target
    const currentPlayer = X_Turn ? playerO : playerX 
    makeMove(box,currentPlayer)
    
    if (gameWon(currentPlayer)) {
        gameOver(false)
    }

    // check draw 
    nextTurn() 

}

/**
 * Function for game over
 */
function gameOver(draw) {
    if (draw) {
        
    } else {

    }
}



/**
 * Function that plays the correct symbol depending on turn.
 */
function makeMove(box, currentPlayer) {
    box.classList.add(currentPlayer)
}

/**
 * Function swaps between X and O each turn. 
 */
function nextTurn() {
    X_Turn = !X_Turn
}

/**
 * Function to check if game has been won
 * If all indexes are same player then game over
 */
function gameWon(currentPlayer) {
    return winningBoard.some(combination => {
        return combination.every(index => {
            return boxElements[index].classList.contains(currentPlayer)
        })
    })
}
