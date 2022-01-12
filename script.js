const billInput = document.querySelector("#bill");
const tipPercentage = document.querySelectorAll(".number");
const peopleInput = document.querySelector("#people");
const tipAmount = document.querySelector("#tip-amount");
const total = document.querySelector("#total");

billInput.addEventListener(
  "click",
  () => {
    billInput.value = "";
  },
  { once: true }
);

billInput.addEventListener("input", (e) => {
  billInput.value = e.target.value;
  tipAmount.value = billInput.value;
  console.log(e.target.value);
});

tipPercentage.forEach((percentage) => {
  percentage.addEventListener("click", () => {
    if (percentage.textContent === "5%") {
      tipAmount.value = billInput.value * 0.05;
    } else if (percentage.textContent === "10%") {
      tipAmount.value = billInput.value * 0.1;
    } else if (percentage.textContent === "15%") {
      tipAmount.value = billInput.value * 0.15;
    } else if (percentage.textContent === "25%") {
      tipAmount.value = billInput.value * 0.25;
    } else if (percentage.textContent === "50%") {
      tipAmount.value = billInput.value * 0.5;
    }
  });
});
