const buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;

// Handle button clicks
$('.btn').click(function () {
	const userChosenColour = $(this).attr('id');
	userClickedPattern.push(userChosenColour);
	handleInteraction(userChosenColour);
	checkAnswer(userClickedPattern.length - 1);
});

// Start game on key press
$(document).keypress(function () {
	if (!started) {
		nextSequence();
		started = true;
	}
});

function handleInteraction(userChosenColour) {
	$('#' + userChosenColour)
		.fadeOut(100)
		.fadeIn(100);
	playSound(userChosenColour);
	animatePress(userChosenColour);
}

function resetUserPattern() {
	userClickedPattern = [];
}

function checkAnswer(currentLevel) {
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
			resetUserPattern();
			setTimeout(function () {
				nextSequence();
			}, 1500);
		}
	} else {
		console.log('wrong');
		gameOver();
	}
}

// Play next random pattern
function nextSequence() {
	level++;
	const randomNumber = Math.floor(Math.random() * 4);
	const randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);

	playSequence();
}

// Play game sequence
function playSequence() {
	gamePattern.forEach((color, i) => {
		setTimeout(() => {
			handleInteraction(color);
		}, 500 * i);
		$('#level-title').text('Level ' + level);
	});
}

// Button animation
function animatePress(currentColor) {
	$('#' + currentColor).addClass('pressed');
	setTimeout(() => {
		$('#' + currentColor).removeClass('pressed');
	}, 100);
}

// Play sound
function playSound(name) {
	const sound = new Audio('./sounds/' + name + '.mp3');
	sound.play();
}

function gameOver() {
	playSound('wrong');

	$('#level-title').text('Game Over, Press Any Key to Restart!');
	$('body').addClass('game-over');
	setTimeout(() => {
		$('body').removeClass('game-over');
	}, 200);
	startOver();
}

// Reset values and start over
function startOver() {
	gamePattern = [];
	userClickedPattern = [];
	level = 0;
	started = false;
}
