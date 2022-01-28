let active = 1;
const arrows = document.querySelectorAll("svg");


const decrement = () => {
    document.querySelector("#pageSelector li:nth-child("+active+")").classList.remove("display");
    active -= 1;
    active === 1 ? arrows[0].classList.add('unclickable-arrow') : arrows[1].classList.remove('unclickable-arrow');
}


const increment = () => {
    active += 1;
    document.querySelector("#pageSelector li:nth-child("+active+")").classList.add("display");
    active === 3 ? arrows[1].classList.add('unclickable-arrow') : arrows[0].classList.remove('unclickable-arrow');
}


arrows[0].addEventListener("click", decrement);
arrows[1].addEventListener("click", increment);