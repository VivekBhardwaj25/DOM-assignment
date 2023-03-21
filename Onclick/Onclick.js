
// There are two type // It is First Type
let boxElement = document.getElementById("box");

boxElement.addEventListener("click", hello);
function hello () {
    document.getElementById("clickme").innerText = "thnku 🫠😊";
}

// It is Second Type
let boxElements = document.getElementById("boxes");

boxElements.addEventListener("click", function () {
    document.getElementById("clck").innerText = "Hii Bro 😇";
});
