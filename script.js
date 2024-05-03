let inputBill = document.getElementById("bill");
let cashGiven = document.getElementById("cash");
let checkBtn = document.getElementById("btn");
let errorMsg = document.getElementById("error");
let noOfNotes = document.querySelectorAll(".no-of-notes");
let notes = [2000, 500, 100, 20, 10, 5, 1];

function errorHandle(error) {
    errorMsg.style.display = "block";
    errorMsg.innerText = error;
}

function hideMessage() {
    errorMsg.style.display = "none";
}

function clickHandler() {
    hideMessage();
    if (inputBill.value < 0) {
        errorHandle("Please enter positive value");
    } else {
        let remaining = cashGiven.value - inputBill.value;
        if (remaining < 0) {
                errorHandle("Give me more");
        } else {
            for (let i = 0; i < notes.length; i++) {
                const paisa = math.trunc(remaining / notes[i]);
                remaining %= notes[i];
                noOfNotes [i].innerText = paisa;
            }
        }
    }
}

checkBtn.addEventListener("click", clickHandler);