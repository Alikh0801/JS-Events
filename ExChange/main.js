const firstCurrency = document.getElementById('firstCurrency');
const secondCurrency = document.getElementById('secondCurrency');

let aznToUsd = 0.59;
let usdToAzn = 1 / aznToUsd;

const main = document.querySelector('.main');
const selectBox = document.createElement('select');
selectBox.style.marginTop = '15px';
selectBox.style.padding = '8px 12px';
selectBox.style.borderRadius = '8px';
selectBox.style.fontWeight = 'bold';
selectBox.innerHTML = `
  <option value="azn-usd">AZN → USD</option>
  <option value="usd-azn">USD → AZN</option>
`;
main.appendChild(selectBox);

let direction = 'azn-usd';

function changePlaceholder() {
    if (direction === 'azn-usd') {
        firstCurrency.placeholder = 'AZN';
        secondCurrency.placeholder = 'USD';
    } else {
        firstCurrency.placeholder = 'USD';
        secondCurrency.placeholder = 'AZN';
    }
}
changePlaceholder();

selectBox.addEventListener('change', (e) => {
    direction = e.target.value;
    firstCurrency.value = '';
    secondCurrency.value = '';
    changePlaceholder();
});

firstCurrency.addEventListener('input', () => {
    const value = parseFloat(firstCurrency.value);
    if (isNaN(value)) {
        secondCurrency.value = '';
        return;
    }

    if (direction === 'azn-usd') {
        secondCurrency.value = (value * aznToUsd).toFixed(2);
    } else {
        secondCurrency.value = (value * usdToAzn).toFixed(2);
    }
});
