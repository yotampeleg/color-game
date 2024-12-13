let button = 1;
document.getElementById("score").innerHTML = "score: 0";
let correct_color = "";
let score = 0;

const colors = [
    "red",
    "blue",
    "pink",
    "black",
    "linear-gradient(to top, red, orange, yellow, green, cyan, blue, purple, pink)",
    "purple",
    "orange",
    "brown",
    "green",
    "yellow",
];

const elements_here = [];


function createSquares() {
    document.getElementById("div1").innerHTML = "";
    document.getElementById("div2").innerHTML = "";
    elements_here.length = 0;

    for (let i = 0; i < 3; i++) {
        let box = document.createElement("div");
        box.classList.add("square");
        let box_style = colors[Math.floor(Math.random() * colors.length)];
        box.style.background = box_style;
        elements_here.push(box_style);
        document.getElementById("div1").appendChild(box);

        box.addEventListener("click", function () {
            handleBoxClick(box_style);
        });
    }
    for (let i = 0; i < 3; i++) {
        let box = document.createElement("div");
        box.classList.add("square");
        let box_style = colors[Math.floor(Math.random() * colors.length)];
        box.style.background = box_style;
        elements_here.push(box_style);
        document.getElementById("div2").appendChild(box);


        box.addEventListener("click", function () {
            handleBoxClick(box_style);
        });
    }

    let say = elements_here[Math.floor(Math.random() * elements_here.length)];
    if (say === "linear-gradient(to top, red, orange, yellow, green, cyan, blue, purple, pink)") {
        say = "rainbow";
    }
    document.getElementById("select-color").innerHTML = "find the color: " + say;
    correct_color = say;
}

function handleBoxClick(box_style) {
    let clicked_color = box_style;

    if (correct_color === "rainbow") {
        correct_color = "linear-gradient(to top, red, orange, yellow, green, cyan, blue, purple, pink)";
    }

    if (clicked_color === correct_color) {
        score++;
    } else {
        score--;
    }

    document.getElementById("score").innerHTML = "score: " + score;

    createSquares();
}

document.getElementById("button-start-game").onclick = function () {
    document.getElementById("score").innerHTML = "score: 0";
    score = 0;
    if (button === 1) {
        createSquares();
        document.getElementById("button-start-game").innerHTML = "reset";
        button = 2;
    } else if (button === 2) {
        document.getElementById("button-start-game").innerHTML = "start game";
        button = 1;
        document.getElementById("select-color").innerHTML = "";
        document.getElementById("div1").innerHTML = "";
        document.getElementById("div2").innerHTML = "";
    }
};