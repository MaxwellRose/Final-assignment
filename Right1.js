let num = 0

document.getElementById('mbutton').addEventListener('click', number)

function number () {
  num = document.getElementById('input2').value
  if (num < 5) {
  alert('Correct! Click the link')
  }
}