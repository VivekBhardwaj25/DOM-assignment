
const mouseOut = document.getElementById("box");

mouseOut.addEventListener("mouseout", mout);
function mout () {
    document.getElementById("mouseout").innerText = "Mouse Out 😃";
}