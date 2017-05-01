function add(operandOne, operandTwo){
	return operandOne + operandTwo;
}

function subtract(operandOne, operandTwo){
	return operandOne - operandTwo;
}

function multiply(operandOne, operandTwo){
	return operandOne * operandTwo;
}

function divide(operandOne, operandTwo){
	return operandOne / operandTwo;
}


var numbers = [1,4,10,3,2,7,8];
function findMax(numbers){
	var maxNumber = numbers[0];
for (var i = 0; i < numbers.length; i++) {
	if (numbers[i]>=maxNumber) {
		maxNumber = numbers[i];
	}
}
return maxNumber;
}

function findMin(numbers){
	var minNumber = numbers[0];
for (var i = 0; i < numbers.length; i++) {
	if (numbers[i]<=minNumber) {
		minNumber = numbers[i];
	}
}
return minNumber;
}



alert('Max number is ' + findMax(numbers) +', and min number is: ' + findMin(numbers));

var firstNumber = 2;
var secondNumber = 5;
var result = add(firstNumber,secondNumber);
alert(result);

result = subtract(firstNumber,secondNumber);
alert(result);

result = multiply(firstNumber,secondNumber);
alert(result);

result = divide(firstNumber,secondNumber);
alert(result);

