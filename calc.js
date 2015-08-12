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
var secondNum = parseFloat(prompt("What is your second number?"));
console.log(secondNum);


if (isNaN(firstNum) = true || isNaN(secondNum) = true) {
  alert("One of your numbers was not actually a number.  Try again, yeah?");
} else if (op === 'a') {
  var result = goodFirstNum + goodSecondNum;
} else if (op === 's') {
  var result = goodFirstNum - goodSecondNum;
} else if (op === 'm') {
  var result = goodFirstNum * goodSecondNum;
} else if (op === 'd') {
  var result = goodFirstNum / goodSecondNum;
// } else if (op === 'q') {
//   var result = goodFirstNum + goodSecondNum;
// } else if (op === 'w') {
//   var result = goodFirstNum + goodSecondNum;

} else {
  alert("You asked for an operator that I did not offer you.  WTF?")
}





