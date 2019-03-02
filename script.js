var number = ""
var input = document.querySelector('.textInput')

function addNumber(num) {
  number += num 
  input.innerHTML = number
}

function clearNumber() {
  number = ""
  input.innerHTML = 0
}

function sumNumber() {
  if (!parseInt(number[number.length - 1])) {
    number = number.slice(0, number.length - 1)
  }
  var result = eval(number)
  input.innerHTML = result
  number = 0
}

function action(e) {

}