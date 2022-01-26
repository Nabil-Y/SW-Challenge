let active = 1;
const arrows = document.querySelectorAll("svg");

const decrement = () => {
active === 1 ? "" : active -= 1;
}

const increment = () => {
active === 3 ? "" : active += 1;
}

arrows[0].addEventListener("click", decrement);
arrows[1].addEventListener("click", increment);