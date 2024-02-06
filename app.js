const btnSubmit = document.querySelector('.btnSubmit');
const number1 = document.querySelector('.numero-1');
const number2 = document.querySelector('.numero-2');

function verifica(num1, num2) {

    const value1 = num1.value.trim();
    const value2 = num2.value.trim();

    if (value2 > value1) {
        alert('Parabéns! o número B maior que o número A');
    } else if (value1 > value2) {
        alert('Infelizmente o número A é maior que o número B');
    } else {
        alert('Os números são iguais');
    }
}

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    verifica(number1, number2)
})