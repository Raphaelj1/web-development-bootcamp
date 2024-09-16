const numberOfDrums = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrums; i++) {
	document.querySelectorAll('.drum')[i].addEventListener('click', () => handleClick(), false);
}

function handleClick() {
    alert('');
}

// audio.play();
// setTimeout(() => audio.pause(), 10000);
// const audio = new Audio('./sounds/Goodbye.mp3');

const drumKeys = {
    w: document.querySelector(".drum.w"),
    a: document.querySelector(".drum.a"),
    s: document.querySelector(".drum.s"),
    d: document.querySelector(".drum.d"),
    j: document.querySelector(".drum.j"),
    k: document.querySelector(".drum.k"),
    l: document.querySelector(".drum.l"),
}