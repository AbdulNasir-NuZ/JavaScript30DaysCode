window.onload = function() {
    addColor();
}

for (let i= 0; i< 9; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}

const btn =document.querySelector('.btn');
const randomColorBlock = document.querySelectorAll('.box');

function randomHexColorCode() {
    var chars = '0123456789abcdef';
    var colorLenght = 6;
    var color = '';

    for (var i= 0; i< colorLenght; i++){
        var randomColor = Math.floor(Math.random() * chars.length);
        color += chars.substring(randomColor, randomColor +1);
    }
    return '#' + color;
}

function addColor()
{
    randomColorBlock.forEach(e => {
        var newColor = randomHexColorCode();
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })
}