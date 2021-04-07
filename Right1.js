let num = 0 //sets the answer as a verable

document.getElementById('mbutton').addEventListener('click', number) //sets the button click as a function

function number () {
  num = document.getElementById('input2').value //sets sets the answer as a veriable
  if (num < 5) { //if the input is > 5, alert
    alert('Correct! Click the link')
  }
}
