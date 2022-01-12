const billInput = document.querySelector('#bill');
const tipPercentage = document.querySelectorAll('.number');
const peopleInput = document.querySelector('#people');
const tipAmount = document.querySelector('#tip-amount');
const total = document.querySelector('#total');

billInput.addEventListener('click', ()=> {
    billInput.value = '';
}, { once: true });

billInput.addEventListener('input', (e) => {    
    billInput.value = e.target.value;   
    console.log(e.target.value);
});

tipPercentage.forEach(percentage => {
    percentage.addEventListener('click', () => {
        console.log(percentage);
        console.log(billInput.value);
    })
})

// console.log(billInput);
// console.log(tipPercentage);
// console.log(peopleInput);
// console.log(tipAmount);
// console.log(total);
