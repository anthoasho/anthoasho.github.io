
window.smoothScroll = function(element){
    if(!element){
    this.parentNode.parentNode.nextElementSibling.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  if(element && element == "previous"){
    this.parentNode.parentNode.previousElementSibling.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
    if(element && element==="top"){
      window.scroll({
        top: 0,
        behavior: "smooth"
      })
    }
  }


function navigationScrollerClick(id, i){
  console.log(this)
  let hamburger = document.querySelector(".hamburger");
    hamburger.classList.remove("close")
    let horizontal = document.getElementById(id)
    let vertical = document.getElementById(`${id}-${i}`)
    let navArea = document.querySelector(".nav-button-area")
    horizontal.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
    vertical.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
    this.parentNode.parentNode.classList.remove("nav-area-show")
  }


let content = document.getElementById("gallery");
function inView(el){
  var sb = content.getBoundingClientRect();
  var eb = el.getBoundingClientRect();
  let test = window.innerHeight*0.7;
  return !((eb.top + eb.height < 0) || (eb.top > test))
}
function updateInView(){
  for(x of document.querySelectorAll(".panel")){
    if(inView(x)) x.classList.add("inview")
    else x.classList.remove("inview")
  }
}
document.onscroll = updateInView;
updateInView();
// setInterval(movingBalls, 5000)
// // movingBalls();
// function movingBalls(){
//   let items = document.querySelectorAll(".nav-button-selector");
//   let angle = 0;
//   items.forEach(function(element){
//     let radius =  element.offsetWidth /2
//     var num =Math.floor(Math.random()*20) // this will get a number between 1 and 99;
//     num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
//     var num2 = Math.floor(Math.random()*20); // this will get a number between 1 and 99;
//     num2 *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
//     console.log(num)
//     var x = num
//     var y = num2
//     element.style.transform = "translate(" + x + "%, " + y + "%)"
//
//   })
// }
