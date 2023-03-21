// getting the html element
const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const displayValue = document.getElementById("displayvalue");
const resetBtn = document.getElementById("reset");

// counter value
let count = 0;

//Update the displayValue
function UpdatedisplayValue () {
    displayValue.innerText = count;
}

//creating Decrement button
decrementBtn.addEventListener("click", decrementcounter);
function decrementcounter () {
    count--;
    UpdatedisplayValue();
}

//creating Increment button
incrementBtn.addEventListener("click", incrementcounter);
function incrementcounter () {
    count++;
    UpdatedisplayValue();
}

// creating Resest Button
resetBtn .addEventListener("click", reset);
function reset () {
    count = 0;
    UpdatedisplayValue();

}

