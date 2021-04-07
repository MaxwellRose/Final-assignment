const egg = 'egg' // sets the answer as a constant
let answer = 'poop'

document.getElementById('rbutton').addEventListener('click', riddle) // sets the button click as a function

function riddle () {
  answer = document.getElementById('input1').value // sets sets the answer as a veriable
  if (answer === egg) { // if the input is "egg", alert
    alert('Correct! Click the link')
  }
}
