let container = document.querySelector("#container");

let isBW = 1;

function fill(e) {
    e.target.style['background-color'] = (isBW)? '#EDF5E1': `rgb(${Math.floor((Math.random()*255))},${Math.floor((Math.random()*255))},${Math.floor((Math.random()*255))})`;
}

for (let i = 0; i < 16*16; i++) {
    let div = document.createElement('div');
    div.classList.add('cell')
    div.style['background-color'] = '#8EE4AF';
    div.addEventListener('mouseenter', fill);
    
    container.appendChild(div);

}

document.querySelector('#toggle').addEventListener('click', (e) => {
    let cells = document.querySelectorAll('.cell');
    document.querySelector('#container').classList.toggle('border-g');

    cells.forEach((cell) => {
        cell.classList.toggle('border-g');
    });
});

document.querySelector('#clear').addEventListener('click', (e) => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        cell.style['background-color'] = '#8EE4AF';
    });
});

document.querySelector('#resize').addEventListener('click', (e) => {
    let cells = document.querySelectorAll('.cell');
    cells.forEach((cell) => {
        document.querySelector('#container').removeChild(cell);
    });

    let num = prompt("how many squares per side to do you want in the new grid (default 16): ", '16');
    while (!(!isNaN(+num) && +num >= 1 && +num <= 100)) {
        console.log(typeof +num);
        console.log(+num);
        num = prompt("Enter a number that is between 1 and 100, inclusive: ", '16');
    }

    let container = document.querySelector('#container');
    container.style['grid-template-columns'] = `repeat(${+num}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${+num}, 1fr)`;

    for (let i = 0; i < +num*+num; i++) {
        let div = document.createElement('div');
        div.classList.add('cell')
        div.style['background-color'] = '#8EE4AF';
        div.addEventListener('mouseenter', fill);
        
        container.appendChild(div);
    }

});

let rainbowbtn = document.querySelector('#rainbow-bw');

rainbowbtn.addEventListener('click', (e) => {
    isBW = 1-isBW;
    rainbowbtn.textContent = (rainbowbtn.textContent != "Random Color")? "Random Color": "White";
});