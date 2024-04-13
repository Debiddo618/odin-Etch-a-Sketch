const containerEL = document.querySelector(".container");

const handleMouseOver = (event) => {
    console.log
    event.target.classList.add("hover");
}

for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        let squareEl = document.createElement('div');
        squareEl.classList.add("square");
        squareEl.addEventListener("mouseover",handleMouseOver);
        containerEL.appendChild(squareEl);
    }
}