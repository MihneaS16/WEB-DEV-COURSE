const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}


const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const reserButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto');



let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            opponent.display.classList.add('loser');
            player.display.classList.add('winner');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});
p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

// p1Button.addEventListener('click', function (e) {
//     if (!isGameOver) {
//         p1Score++;
//         p1Display.textContent = p1Score;
//         if (p1Score === winningScore) {
//             isGameOver = true;
//             p2Display.classList.add('loser');
//             p1Display.classList.add('winner');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }

//     }
// });

// p2Button.addEventListener('click', function (e) {
//     if (!isGameOver) {
//         p2Score++;
//         p2Display.textContent = p2Score;
//         if (p2Score === winningScore) {
//             isGameOver = true;
//             p1Display.classList.add('loser');
//             p2Display.classList.add('winner');
//             p1Button.disabled = true;
//             p2Button.disabled = true;
//         }

//     }
// });

winningScoreSelect.addEventListener('change', function (e) {
    //alert(this.value);
    winningScore = parseInt(this.value);
    reset();
});

reserButton.addEventListener('click', reset);

// function reset() {
//     isGameOver = false;
//     p1Score = 0;
//     p2Score = 0;
//     p1Display.textContent = 0;
//     p2Display.textContent = 0;
//     p1Display.classList.remove('winner', 'loser');
//     p2Display.classList.remove('winner', 'loser');
//     p1Button.disabled = false;
//     p2Button.disabled = false;
// }

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('winner', 'loser');
        p.button.disabled = false;
    }

}