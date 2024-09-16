const numberOfDrums = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrums; i++) {
	document.querySelectorAll('.drum')[i].addEventListener('click', handleClick, false);
}

function handleClick() {
	alert('I got clicked!');
}

