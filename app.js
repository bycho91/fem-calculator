const bill = document.querySelector("#input-bill");
const customTip = document.querySelector("#input-custom-tip");
const people = document.querySelector("#input-people");
const resultTip = document.querySelector("#tip-amt");
const resultBill = document.querySelector("#total-amt");
const btnList = document.querySelectorAll(".btn");
const resetBtn = document.querySelector("#reset-btn");

// event listeners

bill.addEventListener("input", setBillValue);
btnList.forEach((btn) => btn.addEventListener("click", (e) => handleClick(e)));
customTip.addEventListener("input", (e) => setCustomTipValue(e));
people.addEventListener("input", setPeopleValue);
resetBtn.addEventListener("click", resetCalculator);

// default values
let billValue = 0.0;
let tipValue = 0.15;
let peopleValue = 1;

people.value = 1;

// helper functions
function validateFloat(s) {
  let rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
}

function handleErrorMessage(targetElement) {
  targetElement.style.display = "block";
  setTimeout(() => {
    targetElement.style.display = "none";
  }, 3000);
}

// setting functions

function setBillValue() {
  // validate the value of bill
  if (!validateFloat(bill.value)) {
    handleErrorMessage(document.querySelector(".error-bill"));
  }

  billValue = parseFloat(bill.value);

  console.log(billValue);

  calculateTip();
}

function handleClick(e) {
  // unset the initial active btn
  let toRemove = document.querySelector(".btn-active");
  if (toRemove) toRemove.classList.remove("btn-active");

  // add active btn state to the one clicked
  let currentBtn = e.target;
  currentBtn.classList.add("btn-active");

  if (currentBtn.classList.contains("custom-btn")) {
    if (currentBtn.value === NaN) return;
  } else {
    tipValue = parseFloat(currentBtn.innerText) / 100;
  }

  calculateTip();
}

function setCustomTipValue(e) {
  tipValue = parseFloat(e.target.value / 100);

  if (customTip.value !== "") calculateTip();
}

function setTipValue() {
  if (currentTipEl.classList.contains("custom-btn")) {
    tipValue = parseFloat(currentTipEl.value) / 100;
  } else {
    tipValue = parseFloat(currentTipEl.innerText) / 100;
  }
  console.log(tipValue);
  calculateTip();
}

function setPeopleValue() {
  peopleValue = parseFloat(people.value);

  // validate if people is over 1
  if (peopleValue <= 0) {
    handleErrorMessage(document.querySelector(".error-people"));
  }

  console.log(peopleValue);

  calculateTip();
}

// calculate tip function

function calculateTip() {
  if (people.value >= 1) {
    let tipPerPerson = (billValue * tipValue) / peopleValue;
    let totalPerPerson = (billValue * (1 + tipValue)) / peopleValue;
    resultTip.innerText = `$${tipPerPerson.toFixed(2)}`;
    resultBill.innerText = `$${totalPerPerson.toFixed(2)}`;
  }
}

function resetCalculator() {
  bill.value = 0.0;
  setBillValue();

  btnList[2].click();

  people.value = "1";
  setPeopleValue();
}
