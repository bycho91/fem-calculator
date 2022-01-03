const bill = document.querySelector("#input-bill");
const customTip = document.querySelector("#input-custom-tip");
const people = document.querySelector("#input-people");
const resultTip = document.querySelector("#tip-amt");
const resultBill = document.querySelector("#total-amt");
let tip;

// tip per person = bill * tip% / people
// bill per person = bill * (1+tip%) / people

// add btn-active class whenever a btn is clicked and remove from previous
document.querySelector(".btns-wrapper").addEventListener("click", (e) => {
  const toRemove = document.querySelector(".btn-active");
  if (e.target.classList.contains("btn")) {
    if (toRemove) toRemove.classList.remove("btn-active");
    e.target.classList.add("btn-active");
  }
});

const validateFloat = (s) => {
  let rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
};

const removeErrorMessage = (targetElement) => {
  setTimeout(() => {
    targetElement.style.display = "none";
  }, 3000);
};

const calculate = async () => {
  // this validates whether the # of People is greater than 0
  if (parseFloat(people.value) <= 0) {
    document.querySelector(".error-people").style.display = "block";
    removeErrorMessage(document.querySelector(".error-people"));
    return;
  }

  // validate the bill for real values
  if (!validateFloat(bill.value)) {
    document.querySelector(".error-bill").style.display = "block";
    removeErrorMessage(document.querySelector(".error-bill"));
    return;
  }

  let inputTipEl = await document.querySelector(".btn-active");

  if (inputTipEl.classList.contains("custom-btn")) {
    tip = parseFloat(inputTipEl.value) / 100;
  } else {
    tip = parseFloat(inputTipEl.innerText) / 100;
  }

  const tipPerPerson = (parseFloat(bill.value) * tip) / parseInt(people.value);
  const billPerPerson =
    (parseFloat(bill.value) + tipPerPerson) / parseInt(people.value);

  return {
    tipPerPerson,
    billPerPerson,
  };
};

// Event listener for the split button
document.querySelector("#split-btn").addEventListener("click", () => {
  calculate().then(({ tipPerPerson, billPerPerson }) => {
    resultTip.innerText = `$${tipPerPerson.toFixed(2)}`;
    resultBill.innerText = `$${billPerPerson.toFixed(2)}`;
  });
});

// Resets the calculator
document.querySelector("#reset-btn").addEventListener("click", () => {
  bill.value = "";
  customTip.value = "";
  people.value = "";
  resultTip.innerText = "$0.00";
  resultBill.innerText = "$0.00";
  document.querySelector(".alert-error").style.display = "none";
  document.querySelector(".btn-active").classList.remove("btn-active");
});
