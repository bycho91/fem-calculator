const bill = document.querySelector('#input-bill');
const customTip = document.querySelector('#input-custom-tip');
const people = document.querySelector('#input-people');
const resultTip = document.querySelector('#tip-amt');
const resultBill = document.querySelector('#total-amt');
let tip;

// tip per person = bill * tip% / people
// bill per person = bill * (1+tip%) / people

// add btn-active class whenever a btn is clicked and remove from previous
document.querySelector('.btns-wrapper').addEventListener('click', (e) => {
    const toRemove = document.querySelector('.btn-active');
    if(e.target.classList.contains('btn')) {
        if (toRemove) toRemove.classList.remove('btn-active');
        e.target.classList.add('btn-active');
    }
})

const calculate = async () => {
    let inputTipEl = await document.querySelector('.btn-active');
    
    if(inputTipEl.classList.contains('custom-btn')) {
        tip = parseInt(inputTipEl.value)/100;
    }else {
        tip = parseInt(inputTipEl.innerText)/100;
    }

    const tipPerPerson = (parseInt(bill.value)*tip)/parseInt(people.value)
    const billPerPerson = (parseInt(bill.value) + tipPerPerson)/parseInt(people.value);

    return {
        tipPerPerson,
        billPerPerson,
    }
}

document.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
        calculate().then(({tipPerPerson, billPerPerson}) => {
            resultTip.innerText = `$${tipPerPerson.toFixed(2)}`;
            resultBill.innerText = `$${billPerPerson.toFixed(2)}`;
        })
    }
})

