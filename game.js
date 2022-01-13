// Wait for DOM content to load before beginning game.
// Add event listeners to buttons.
document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");
    	
    	for (let button of buttons) {
    	    button.addEventListener("click",function() {
    	        if (this.getAttribute("data-type") === "submit") {
    	            alert("You clicked Reset!");
    	        } else if (this.getAttribute("data-type") === "play") {
    	            alert(`You clicked ${gameType}`);
	            } else {
	                let gameType = this.getAttribute("data-type");
	                alert(`You clicked ${gameType}`);	
	         }
        })
	}
});


/**
* Gets the current amount of games won from the DOM and increments it by 1. 
*/
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
 };


 var zone = document.getElementById('table');
 var text = document.getElementsByClassName('playerStatus');
 var move;
 var cells;

function player() {
	move = this.value;
	text.textContent = move + ', choose a box to take your turn!!'
	chooser.classList.add('lets play!');
	this.checked = false;
}

/** 
 * Function for computer to play
 */

function computersTurn() {
	var emptyBox = [];
	var random;


for (var i = 0; i < box.length; i++) {
	if (box[i].textContent == ''){
		emptyBox.push(box[i]);
	}
}

/**
 * Function for Computer to play available box
 */
	random = (Math.random() * emptyBox.length) -1;
	emptyBox[random].textContent = move;
	gameArea();
	nextMove();
}

/**
 * Change Players
 */
function nextMove() {
	if (move == 'X') {
		move = 'O';
	} else {
		mark = 'X';
	}
} 

/**
 * Function for End of Game 
 */
function win(a, b, c) {
	if (a.textContent == move && b.textContent == move && c.textContent == move ) {
		text.textContent = mark + ' has won the game!';
		a.classList.add('winner');
		b.classList.add('winner');
		c.classList.add('winner');
		return true;
	} else {
		return false;
	}
}

/** 
 * Check Available remaining Moves
 */
function gameArea() {
	win(document.getElementById("box1"), document.getElementById("box2"), document.getElementById("box3"));
	win(document.getElementById("box4"), document.getElementById("box5"), document.getElementById("box6"));
	win(document.getElementById("box7"), document.getElementById("box8"), document.getElementById("box9"));
	win(document.getElementById("box1"), document.getElementById("box5"), document.getElementById("box9"));
	win(document.getElementById("box7"), document.getElementById("box5"), document.getElementById("box3"));
	win(document.getElementById("box2"), document.getElementById("box5"), document.getElementById("box8"));
	win(document.getElementById("box1"), document.getElementById("box4"), document.getElementById("box7"));
	win(document.getElementById("box3"), document.getElementById("box6"), document.getElementById("box9"));
	win(document.getElementById("box3"), document.getElementById("box5"), document.getElementById("box7"));
}

/**
 * Reset Game 
 */
function resetGame() {
	move = 'X';
	for (var i = 0; i < box.length; i++) {
		cells[i].textContent = '';
		cells[i].classList.remove('winner');
	}

	text.textContent = 'choose a box to take your turn!!'
	chooser.classList.remove('lets play!');
	table.innerHTML = '';
}

var gameReset = chooser.getElementsByClassName("reset");
gameReset.addEventListener('click', function(undo) {
	undo.preventDefault();
	resetTable();
}); 

var players = Array.prototype.slice.call(document.getElementsByName("p1"))
players.forEach(function(choice) {
	choice.addEventListener('click',setPlayer,false);
	
});


//Event listeners for Game screen
document.getElementsByTagName("td").forEach(box.addEventListener('click', move));
document.addEventListener("DOMContentLoaded", function(){
    let box = document.getElementsByTagName("td");

	for (let box of boxes) {
		box.addEventListener("click",function() {
			if (this.getAttribute(move) === true) {
				alert("You made your move!");
			} else {
				let boxSelected = this.getAttribute(move);
				alert(`${boxSelected} has already been selected`);	
		 	}
		})
	}
}) ;
