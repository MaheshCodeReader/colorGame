var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



init();
resetButton.addEventListener("click", function(){
	reset();
});



function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i = 0; i < modeButtons.length; ++i){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			// ternary operator to set numSquares variable
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for(var i = 0; i < squares.length; ++i){
		// add click listeners to squres
		squares[i].addEventListener("click", function(){
			// compare color of clicked square and compare with pickedColor
			var clickedColor = this.style.backgroundColor;
			// if equal then turn all squares to selected color
			console.log(clickedColor, pickedColor);
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?";
			}
			else {	// else change squre color to body color
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";		
			}
		});
	}
}

function reset(){
	resetButton.textContent = "New Colors";
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	// change color of squares
	for(var i = 0; i < squares.length; ++i){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelBlue";

	messageDisplay.textContent = "";
}

function changeColors(color){
	// loop through all the squares
	for(var i = 0; i < squares.length; ++i){
		// change color of squares
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
	// make an array
	var arr = [];
	// repeat num times
	for(var i = 0; i < num; ++i){
		// get random color and push into array
		arr.push(randomColor());
	}

	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	
	// create "rgb(r, g, b)" format string
	return "rgb(" + r +  "," + " " + g + "," + " " + b + ")";
}