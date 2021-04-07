document.getElementById('button').addEventListener('click', write) // sets the buttons function

let number = 0 // sets the variables
let count = 0
let answer = 'You are wierd '

function write () {
  number = document.getElementById('loopinput').value // gets the input from the textbox

  number = parseInt(number)
  count = parseInt(count)

  for (count = 0; count < number; count++) { // sets the loop to run as long as count is less than the number
    answer = answer + 'you are wierd '
  }
  document.getElementById('text3').innerHTML = answer  // puts the answer into a paragraph
}
