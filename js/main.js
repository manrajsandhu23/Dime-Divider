const check = document.querySelector("#check");
const cash = document.querySelector("#cash");
const bill = document.querySelector("#bill");
const output = document.querySelector("#output-text");

console.log(output);
const moneyBox = [2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];
function cal() {
  returnMoney();
}

function returnMoney() {
  let returnAmount = cash.value - bill.value;
  if (returnAmount < 0) {
    // output.classList.add("block");
    output.innerHTML = "Amount is Invalid ❌";
    console.log("Amount is Invalid");
  } else {
    output.innerHTML = "Amount to be returned: " + returnAmount;
  }
  noteFinder();
  function noteFinder() {}
}

check.addEventListener("click", cal);
