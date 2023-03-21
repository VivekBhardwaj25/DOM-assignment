// There are two type // It is First Type
const doubleClick = document.getElementById("box");

doubleClick.addEventListener("dblclick", doubl);
function doubl () {
    document.getElementById("double").innerText = "Thnku 😇🫠";
};

// It is Second Type
const doubleClicks = document.getElementById("box");

doubleClicks.addEventListener("dblclick", function () {
    document.getElementById("double").innerText = "Welcome 😇"
});
