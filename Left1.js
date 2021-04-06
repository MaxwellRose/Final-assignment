const egg = 'egg'

document.getElementById('rbutton').addEventListener('click', riddle)

function riddle () {
  answer = document.getElementById('input1').value
  if (answer === egg) {
  alert('Correct! Click the link')
  }
}