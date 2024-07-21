console.log("can load this")
let inputString = '0'
let listOfInputs = []
let listOfOperations = []

function calcPress(input) {
    console.log("clicked on ====>", input)
    inputString = inputString + input
    console.log("display ====>", inputString)
    var inputElement = document.querySelector('.display-value');
    inputElement.value = inputString
}

function init() {
    var inputElement = document.querySelector('.display-value');
    console.log("inputElement", inputElement)
    inputElement.value = inputString
}

function clearScreen() {
    listOfInputs = []
    listOfOperations = []
    var inputElement = document.querySelector('.display-value');
    console.log("inputElement", inputElement)
    inputElement.value = '0'
}

function removeLast() {
    var inputElement = document.querySelector('.display-value');
    console.log("inputElement", inputElement)
    inputString = inputString.substring(0, inputString.length - 1)
    inputElement.value = inputString;
}

function divide() {
    console.log("input before division", parseInt(inputString));
    listOfInputs.push(parseInt(inputString));
    listOfOperations.push("/")
    var inputElement = document.querySelector('.display-value');
    inputString = '0'
    inputElement.value = inputString
}

function multiply() {
    console.log("input before multiplication", parseInt(inputString));
    listOfInputs.push(parseInt(inputString));
    listOfOperations.push("*")
    var inputElement = document.querySelector('.display-value');
    inputString = '0'
    inputElement.value = inputString
}

function subtract() {
    console.log("input before subtraction", parseInt(inputString));
    listOfInputs.push(parseInt(inputString));
    listOfOperations.push("-")
    var inputElement = document.querySelector('.display-value');
    inputString = '0'
    inputElement.value = inputString
}

function add() {
    console.log("input before addition", parseInt(inputString));
    listOfInputs.push(parseInt(inputString));
    listOfOperations.push("+")
    var inputElement = document.querySelector('.display-value');
    inputString = '0'
    inputElement.value = inputString
}

function eval() {
    try {
        // Parse and add the new input value to the list
        let newInput = parseInt(inputString);
        if (!isNaN(newInput)) {
            listOfInputs.push(newInput);
        }

        console.log("list of inputs ====>", listOfInputs);
        console.log("list of operations ========>", listOfOperations);

        // Initialize the result with the first input
        let result = listOfInputs[0];

        for (let i = 1; i < listOfInputs.length; i++) {
            let operation = listOfOperations[i - 1]; // Operations should align with inputs
            let nextValue = listOfInputs[i];

            switch (operation) {
                case "/":
                    result /= nextValue;
                    break;
                case "*":
                    result *= nextValue;
                    break;
                case "-":
                    result -= nextValue;
                    break;
                case "+":
                    result += nextValue;
                    break;
                default:
                    // Handle unexpected operation, e.g., spaces or invalid characters
                    console.log("Ignoring invalid operation: ", operation);
                    break;
            }
        }
        console.log("result ======>", result);
        var inputElement = document.querySelector('.display-value');
        inputString = result
        listOfInputs = []
        // listOfInputs.push(result)
        listOfOperations = []
        inputElement.value = inputString
    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', init);