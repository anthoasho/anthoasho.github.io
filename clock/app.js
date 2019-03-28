let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let clockWidth = 5;
let minutesWidth = 2;
let secondsWidth = 1;
let hoursWidth = 3
let  now,clock, minutes, hours, seconds, date;
init();
let gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
gradient.addColorStop(1, "#343f46")
gradient.addColorStop(0, "#232c31")
update();
// setInterval(function(){
// update();
// }, 1000/60)
window.requestAnimationFrame(update);

function update(){
  window.requestAnimationFrame(update);
  now = new Date();
  seconds.angle = radians(now.getSeconds() + (now.getMilliseconds()/1000)+45, 60);
  minutes.angle = radians(now.getMinutes() + (now.getSeconds()/60)+45, 60);
  hours.angle = radians(now.getHours()+(now.getMinutes()/60) +45, 12);
  date.date = now.toDateString();
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  clock.update();
}
function init(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  clock = new Clock(150, clockWidth, ctx);
  minutes = new Arm("#98d590", clock.radius*0.8, hoursWidth);
  hours = new Arm("#98d590", clock.radius*0.5, minutesWidth);
  seconds = new Arm("#b1faf8", clock.radius, secondsWidth, ctx);
  date = new DateDisplay();

}
function DateDisplay(fontsize){
  this.fontsize = fontsize;

  this.draw = function(){

    ctx.font ="60px Arial";
    ctx.fillStyle = "#90ced544  "
    ctx.textAlign = "center";
    ctx.filter = "drop-shadow(1px 2px 2px #00000088)";
    ctx.fillText(this.date, canvas.width/2, (canvas.height/2) + (clock.radius/2 *3));
    ctx.fillStyle = "#1f2529";
    ctx.filter = "none";
    ctx.fillText(this.date, canvas.width/2, (canvas.height/2) + (clock.radius/2 *3)+0.5);
    ctx.fill();
  }
}
function Clock(radius, width, context){
  this.x = canvas.width/2;
  this.y = canvas.height/2;
  this.width = width;
  this.radius = radius;
  this.context = context;
  this.draw = function(width){
    // this.context.clearRect(0, 0, canvas.width, canvas.height);
    // backgroundCtx.fillStyle = "#3b444b";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    hours.update();
    minutes.update();
    seconds.update();
    date.draw();
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    this.context.lineWidth = this.width;
    ctx.filter = "drop-shadow(1px 2px 2px #00000088)";
    this.context.strokeStyle = "#90ced588";
    this.context.stroke();
    ctx.filter = "none";

    this.context.beginPath();
    this.context.lineWidth = this.width;
    this.context.arc(this.x+0.5, this.y+0.5, this.radius, 0, 2*Math.PI);
    this.context.strokeStyle = "#5a6a92";
    this.context.stroke();
    this.context.filter = "none"

  }
  this.update = function(){
    this.draw();
  }
}
function Arm(color, length, width, context = ctx){
  this.color = color;
  this.length = length;
  this.width = width;
  this.context = context;
  this.draw = function(){
    this.context.beginPath();
    this.context.lineWidth = this.width;
    this.context.strokeStyle = this.color;
    // this.context.filter = "drop-shadow(1px 1px 1px #fFFFFF44)";
    ctx.filter = "drop-shadow(5px 2px 4px #00000055)";

    this.context.moveTo(clock.x,  clock.y);
    this.context.lineTo(clock.x +((Math.cos(this.angle) * this.length) ),  clock.y + (Math.sin(this.angle) * this.length));
    this.context.stroke();
    this.context.filter = "none";
  }
  this.update = function(){
    this.draw();
  }
}
function radians(degrees, num){
  let pi = Math.PI * 2;
  return degrees * (pi/num);
}
