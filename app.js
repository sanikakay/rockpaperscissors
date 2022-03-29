//caching the dom

let uscore = 0;
let cscore = 0;
const uscore_span = document.getElementById("user-score");
const cscore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".scoreboard");
let result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scis_div = document.getElementById("scis");

function convert(variab) {
	if(variab === "rock") return "Rock";
	if(variab === "paper") return "Paper";
	if(variab === "scis") return "Scissors";
}

function computerChoice() {
	const choices = ['rock', 'paper', 'scis'];
	const rand = Math.floor(Math.random()*3);
	return choices[rand];
}

function win(userChoice, compChoice) {
	uscore++;
	uscore_span.innerHTML = uscore;
	const uSmall = "user".fontsize(3).sub();
	const cSmall = "computer".fontsize(3).sub();
	result_div.innerHTML = convert(userChoice) + uSmall + " beats " + convert(compChoice) + cSmall + ". You win!";
}

function lose(userChoice, compChoice) {
	cscore++;
	cscore_span.innerHTML = cscore;
	const uSmall = "user".fontsize(3).sub();
	const cSmall = "computer".fontsize(3).sub();
	result_div.innerHTML = convert(compChoice) + cSmall + " beats " + convert(userChoice) + uSmall + ". You loser!";
}

function draw(userChoice, compChoice) {
	const uSmall = "user".fontsize(3).sub();
	const cSmall = "computer".fontsize(3).sub();
	result_div.innerHTML = convert(userChoice) + uSmall + " is the same as " + convert(compChoice) + cSmall + ". Draw.";
}

function game(userChoice) {
	const compChoice = computerChoice();
	switch(userChoice + compChoice) {
		case "rockscis":
		case "paperrock":
		case "scispaper":
			win(userChoice, compChoice);
			break;
		case "scisrock":
		case "rockpaper":
		case "paperscis":
			lose(userChoice, compChoice);
			break;
		case "rockrock":
		case "scisscis":
		case "paperpaper":
			draw(userChoice, compChoice);
			break;
	}
}

function main() { 
	rock_div.addEventListener('click', function() {
		game("rock");
	})

	paper_div.addEventListener('click', function() {
		game("paper");
	})

	scis_div.addEventListener('click', function() {
		game("scis");
	})
	console.log("Hi");
	}
main();




