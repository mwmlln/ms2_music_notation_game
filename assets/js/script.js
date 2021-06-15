// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByClassName('game-btn');
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "game-start") {
                startGame();
            } else {
                isCorrect()

            }
        })
    }
});


// function to start the process of the game

function startGame() {

    displayImg();
};

//Run countdown Timer for game duration of 60seconds

function runTimer() {};



// Set the queastion images and answers
let images = [
    '<img src="assets/images/note_c.png"  data-type="c" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_d.png"  data-type="d" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_e.png"  data-type="e" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_f.png"  data-type="f" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_g.png"  data-type="g" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_a.png"  data-type="a" alt="Music notation image" class="note-img">',
    '<img src="assets/images/note_b.png"  data-type="b" alt="Music notation image" class="note-img">',
];

//  Display random selection of the images 
function displayImg() {
    let dispImg = images[Math.floor(Math.random() * images.length)];
    document.getElementById("img-place").innerHTML = dispImg;
};

function isCorrect() {
    let currentImg = document.getElementById("img-place").children[0];
    let keytype = currentImg.getAttribute("data-type");

};

function scoreUp() {};