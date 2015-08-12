// var op = prompt('Choose an operation');
// console.log('op', op);
// var num = prompt('Choose a number');
// console.log('num', num);

// alert("why is your console not open?")

// var goodNum = parseFloat(num)

//whaaa??
//parseFloat or parseInt to convert to number with integers.
//

var firstNum = parseFloat(prompt("What is your first number?"));
console.log(firstNum);
var op = prompt("What is your calculation? a = add, s = subtract, m = multiply, d = divide, q = square root, w = power");
console.log(op);
if (op !== "q") {
  var secondNum = parseFloat(prompt("What is your second number?"));
  console.log(secondNum);
}

if (isNaN(firstNum) === true || ((isNaN(secondNum) === true && op !== "q"))) {
  alert("One of your numbers was not actually a number.  Try again, yeah?");
} else if (op === 'a') {
  var result = firstNum + secondNum;
  alert(firstNum + " + " + secondNum + " = " + result);
  console.log(result);
} else if (op === 's') {
  var result = firstNum - secondNum;
  alert(firstNum + " - " + secondNum + " = " + result);
  console.log(result);
} else if (op === 'm') {
  var result = firstNum * secondNum;
  alert(firstNum + " x " + secondNum + " = " + result);
  console.log(result);
} else if (op === 'd') {
  var result = firstNum / secondNum;
  alert(firstNum + " / " + secondNum + " = " + result);
  console.log(result);
} else if (op === 'q') {
  var result = Math.sqrt(firstNum);
  alert("The square root of " + firstNum + " is " + result);
  console.log(result);
} else if (op === 'w') {
  var result = Math.pow(firstNum, secondNum);
  alert(firstNum + " to the power of " + secondNum + " is " + result);
  console.log(result);
} else {
  alert("You asked for an operator that I did not offer you.  WTF?")
}















