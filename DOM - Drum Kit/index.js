const numberOfDrums = document.querySelectorAll('.drum').length;

// Detecting button press
for (let i = 0; i < numberOfDrums; i++) {
	document.querySelectorAll('.drum')[i].addEventListener('click', handleClick, false);
}

function handleClick() {
	const buttonInnerHTML = this.innerHTML;
	makeSound(buttonInnerHTML);
}

const drumKeys = {
	w: document.querySelector('.drum.w'),
	a: document.querySelector('.drum.a'),
	s: document.querySelector('.drum.s'),
	d: document.querySelector('.drum.d'),
	j: document.querySelector('.drum.j'),
	k: document.querySelector('.drum.k'),
	l: document.querySelector('.drum.l'),
};

// Detecting keyboard press

document.addEventListener(
	'keypress',
	function (event) {
		makeSound(event.key);
	}
);

function makeSound(key) {
	switch (key) {
		case 'w':
			console.log('tom-1');
			// const tom1 = new Audio('./sounds/tom-1.mp3');
			// tom1.play();
			break;
		case 'a':
			console.log('tom-2');
			// const tom2 = new Audio('./sounds/tom-2.mp3');
			// tom2.play();
			break;
		case 's':
			console.log('tom-3');
			// const tom3 = new Audio('./sounds/tom-3.mp3');
			// tom3.play();
			break;
		case 'd':
			console.log('tom-4');
			// const tom4 = new Audio('./sounds/tom-4.mp3');
			// tom4.play();
			break;
		case 'j':
			console.log('snare');
			// const snare = new Audio('./sounds/snare.mp3');
			// snare.play();
			break;
		case 'k':
			console.log('crash');
			// const crash = new Audio('./sounds/crash.mp3');
			// crash.play();
			break;
		case 'l':
			console.log('kick-bass');
			// const kick = new Audio('./sounds/kick-bass.mp3');
			// kick.play();
			break;

		default:
			console.log('Invalid key pressed: ', key);
			break;
	}
}
