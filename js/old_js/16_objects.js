const operations = {
  add: '+',
  sub: '-',
  multi: '*',
};
let num1 = 80;
let num2 = '5';
let action = '*';
let result;

console.log(calculate(action, num1, num2));

// if (Number(num1) == Number(num1) && Number(num2) == Number(num2)) {
//   result = calculate(action, num1, num2);
//   console.log(result);
// } else {
//   console.log('Not a numbers');
// }

// if Calculator
//
// function calculate(operation, num1, num2) {
//   if (operation == '+') {
//     return add(Number(num1), Number(num2));
//   }
//   if (operation == '-') {
//     return sub(Number(num1), Number(num2));
//   }
//   if (operation == '*') {
//     return multi(Number(num1), Number(num2));
//   } else {
//     return 'Wrong action!';
//   }
// }

// switch Calculator

// function calculate(operation, num1, num2) {
//   switch (operation) {
//     case '+':
//       return add(Number(num1), Number(num2));
//       break;
//     case '-':
//       return sub(Number(num1), Number(num2));
//       break;
//     case '*':
//       return multi(Number(num1), Number(num2));
//       break;
//     default:
//       return 'Wrong action!';
//       break;
//   }
// }

// switch Calculator + object

function calculate(operation, num1, num2) {
  if (checkNumber(num1, num2)) {
    switch (operation) {
      case operations.add:
        return add(Number(num1), Number(num2));
        break;
      case operations.sub:
        return sub(Number(num1), Number(num2));
        break;
      case operations.multi:
        return multi(Number(num1), Number(num2));
        break;
      default:
        return 'Wrong action!';
        break;
    }
  } else {
    return 'Not a numbers';
  }
}

function checkNumber (num1, num2) {
  return (Number(num1) == Number(num1) && Number(num2) == Number(num2));
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function multi(num1, num2) {
  return num1 * num2;
}
