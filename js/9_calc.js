console.log('Это калькулятор');

let num1 = prompt('Введите первое число', '');
let action = prompt('Введите действие', '');
let num2 = prompt('Введите второе число', '');
let result;
// alert(Number(num1));
if (Number(num1) == Number(num1) && Number(num2) == Number(num2)) {
  if (String(action) == '+') {
    alert(calcPlusing(num1, num2));
  } else if (String(action) == '-') {
    alert(calcMinusing(num1, num2));
  } else if (String(action) == '*') {
    alert(calcMultiplication(num1, num2));
  } else if (String(action) == '/') {
    alert(calcDivision(num1, num2));
  } else {
    alert('Это не верное действие');
  }
} else {
  alert('Бро, это не числа');
}

function calcPlusing(num1, num2) {
  return Number(num1) + Number(num2);
}

function calcMinusing(num1, num2) {
  return Number(num1) - Number(num2);
}

function calcMultiplication(num1, num2) {
  return Number(num1) * Number(num2);
}

function calcDivision(num1, num2) {
  return Number(num1) / Number(num2);
}
