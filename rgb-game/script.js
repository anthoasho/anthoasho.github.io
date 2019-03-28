var numberSqr = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
colorDisplay.textContent = pickedColor;
var resetBtn = document.getElementById("resetBtn");
var modeButtons = document.querySelectorAll(".mode");

resetBtn.addEventListener("click", reset);
init();

function setModeButtons(){
  for(var i = 0; i< modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberSqr = 3: numberSqr = 6;
      reset();
    }
  )
  }
}
function setUpSquares(){
  resetBtn.textContent = "New colors";
  h1.style.backgroundColor = "#4a7bc9";
  message.textContent = "";
  for(var i = 0; i<squares.length; i++){
        // squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function(){
          var clickedColor = this.style.backgroundColor;
          if(clickedColor === pickedColor){
            message.textContent = "Correct";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
            resetBtn.textContent = "Play again?"
          }else {
            this.style.backgroundColor = "#232323";
            message.textContent = "try again!";
            resetBtn.textContent = "New colors";
          }
        })
  }
}
function init(){
  setModeButtons();
  setUpSquares();
  reset();
}
function reset(){
  this.textContent = "New colors"
  colors = generateRandomColors(numberSqr);
  pickedColor = colors[pickColor()];
  colorDisplay.textContent = pickedColor;
  for(var i = 0; i < squares.length; i++){
    if(colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    }else{
      squares[i].style.display = "none";
    }

  }

}
function changeColors(color){
    for(var i = 0; i < squares.length; i++){
      squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return random;
}
function generateRandomColors(num){
  var arr = [];
    for(var i = 0; i < num; i++){
      arr.push(randomColor());
    }
  return arr;
}
function randomColor(){
     var r = Math.floor(Math.random() * 256)
     var g = Math.floor(Math.random() * 256)
     var b = Math.floor(Math.random() * 256)
     return "rgb(" + r +", " + g + ", " + b + ")";
}
