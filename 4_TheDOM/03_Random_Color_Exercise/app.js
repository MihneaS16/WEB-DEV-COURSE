
function random(num) {
    return Math.floor(Math.random() * num) + 1;
}

document.querySelector('button').addEventListener('click', () => {
    const rgb = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.querySelector('body').style.backgroundColor = rgb;
    document.querySelector('h1').innerText = rgb;
});