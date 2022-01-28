let active = 1;
let incrementing = true;
const arrows = document.querySelectorAll("svg");
const movieImages = Array.from(document.getElementsByClassName("fib"));
const blockOne = document.querySelector(".block1");
const blockTwo = document.querySelector(".block2");
const blockThree = document.querySelector(".block3");

const carrouselMovement = () => {
    if (incrementing === true) {
        switch(active) {
            case 1:
                movieImages.map( item => item.style.transform = "translateX("+ -400 +"px)");
                blockOne.style.transform = "translateX(-100px)";
                blockOne.style.opacity = "0";
                blockTwo.style.transform = "translateX(0)";
                blockTwo.style.opacity = "1";
            break;
            case 2:
                movieImages.map( item => item.style.transform = "translateX("+ -800 +"px)");
                blockTwo.style.transform = "translateX(-100px)";
                blockTwo.style.opacity = "0";
                blockThree.style.transform = "translateX(0)";
                blockThree.style.opacity = "1";
            break;
            default:
            break;
        }
    } else {
        switch(active) {
            case 2:
                movieImages.map( item => item.style.transform = "translateX(0)");
                blockTwo.style.transform = "translateX(100px)";
                blockTwo.style.opacity = "0";
                blockOne.style.transform = "translateX(0%)";
                blockOne.style.opacity = "1";
            break;
            case 3:
                movieImages.map( item => item.style.transform = "translateX("+ -400 +"px)");
                blockThree.style.transform = "translateX(100px)";
                blockThree.style.opacity = "0";
                blockTwo.style.transform = "translateX(0%)";
                blockTwo.style.opacity = "1";
            break;
            default:
            break;
        }
    }
}

const decrement = () => {
    incrementing = false;
    carrouselMovement();
    document.querySelector("#pageSelector li:nth-child("+active+")").classList.remove("display");
    active -= 1;
    active === 1 ? arrows[0].classList.add('unclickable-arrow') : arrows[1].classList.remove('unclickable-arrow');
}


const increment = () => {
    incrementing = true;
    carrouselMovement();
    active += 1;
    document.querySelector("#pageSelector li:nth-child("+active+")").classList.add("display");
    active === 3 ? arrows[1].classList.add('unclickable-arrow') : arrows[0].classList.remove('unclickable-arrow');
}


arrows[0].addEventListener("click", decrement);
arrows[1].addEventListener("click", increment);