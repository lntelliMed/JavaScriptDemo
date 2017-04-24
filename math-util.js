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