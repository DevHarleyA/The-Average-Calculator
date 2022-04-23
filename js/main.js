document.querySelector('#addition').addEventListener('click', addMe)
document.querySelector('#subtraction').addEventListener('click', subtractMe)
document.querySelector('#multiplication').addEventListener('click', multiplyMe)
document.querySelector('#division').addEventListener('click', divideMe)
document.querySelector('#zeroMe').addEventListener('click', zeroMe)

function addMe() {
    let result = 0
    let firstNumber = parseInt(document.querySelector('#firstNumber').value)
    let secondNumber = parseInt(document.querySelector('#secondNumber').value)
    result = firstNumber + secondNumber
    document.querySelector('#resultsHere').innerText = result
    console.log(result)
}

function subtractMe() {
    let result = 0
    let firstNumber = parseInt(document.querySelector('#firstNumber').value)
    let secondNumber = parseInt(document.querySelector('#secondNumber').value)
    result = firstNumber - secondNumber
    document.querySelector('#resultsHere').innerText = result
    console.log(result)
}

function multiplyMe() {
    let result = 0
    let firstNumber = parseInt(document.querySelector('#firstNumber').value)
    let secondNumber = parseInt(document.querySelector('#secondNumber').value)
    result = firstNumber * secondNumber
    document.querySelector('#resultsHere').innerText = result
    console.log(result)
}

function divideMe() {
    let result = 0
    let firstNumber = parseInt(document.querySelector('#firstNumber').value)
    let secondNumber = parseInt(document.querySelector('#secondNumber').value)
    result = firstNumber / secondNumber
    document.querySelector('#resultsHere').innerText = result
    console.log(result)
}

function zeroMe() {
    document.querySelector('#resultsHere').innerText = 0
}