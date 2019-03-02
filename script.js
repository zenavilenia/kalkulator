var number = ""
var input = document.querySelector('.textInput')

function addNumber(num) {
  if (!parseInt(num)) {
    if (!number) {
      return
    } else if (!parseInt(number[number.length - 1])) {
      number = number.slice(0, number.length - 1)
    }
  }
  number += num 
  input.innerHTML = number
}

function clearNumber() {
  number = ""
  input.innerHTML = 0
}

function sumNumber() {
  while (number && !parseInt(number[number.length - 1])) {
    number = number.slice(0, number.length - 1)
  }
  var result = eval(number)
  input.innerHTML = result || 0
  number = ""
}