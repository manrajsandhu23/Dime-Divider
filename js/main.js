const check = document.querySelector("#check");
const cash = document.querySelector("#cash");
const bill = document.querySelector("#bill");
const output = document.querySelector("#output-text");
const noOfNotes = document.querySelectorAll(".noOfNotesF");
const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];

function inputValidator() {
  let balAmount = cash.value - bill.value;
  if (balAmount < 0) {
    output.innerHTML = "Amount is Invalid ❌";
  } else {
    output.innerHTML = "Amount to be returned is " + balAmount;
  }
  notesToBeReturned(balAmount);
}

function notesToBeReturned(balAmount) {
  for (let i = 0; i < availableNotes.length; i++) {
    let numberOfNotes = Math.trunc(balAmount / availableNotes[i]);
    balAmount = balAmount % availableNotes[i];
    noOfNotes[i].innerText = numberOfNotes;
  }
}

check.addEventListener("click", inputValidator);
