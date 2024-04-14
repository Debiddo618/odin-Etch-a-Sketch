const containerEL = document.querySelector(".container");
const buttonEl = document.getElementById("change-square");

buttonEl.addEventListener("click",() => {
    let numberOfSquares = prompt("Enter the number of squares (10-100): ");
    while(numberOfSquares > 100 || numberOfSquares < 10 ){
        numberOfSquares = prompt("Enter a valid number of squares (10-100): ");
    }
    containerEL.innerHTML = "";
    let width = (100/numberOfSquares);

    for(let i=0;i<numberOfSquares;i++){
        for(let j=0;j<numberOfSquares;j++){
            let squareEl = document.createElement('div');
            squareEl.classList.add("square");
            squareEl.style.flexBasis = `${width}%`;
            squareEl.addEventListener("mouseover",handleMouseOver);
            containerEL.appendChild(squareEl);
        }
    }
});

const handleMouseOver = (event) => {
    console.log
    event.target.classList.add("hover");
}

for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){
        let squareEl = document.createElement('div');
        squareEl.classList.add("square");
        squareEl.style.flexBasis = `${100/16}%`;
        squareEl.addEventListener("mouseover",handleMouseOver);
        containerEL.appendChild(squareEl);
    }
}