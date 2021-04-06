document.getElementById('button').addEventListener('click', write)

let number = 0
let count = 0
let answer = 'You are wierd'

function write () {
  number = document.getElementById('loopinput').value

  number = parseInt(number)
  count = parseInt(count)

  for (count = 0; count < number; count++) {
    answer = answer + 'you are wierd'
  }
  document.getElementById('text3').innerHTML = answer
}