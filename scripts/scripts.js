
let home = document.getElementById("home");



let animateList = {
  hi: {
    node: home.children[0],
    timing: 0
  },
  br: {
    node: home.children[2],
    timing: 2000
  },
  name: {
    node: home.children[1],
    timing: 2000
  },
  start: {
    node: home.children[3],
    timing: 3000
  },
  links: {
    node: home.children[4],
    timing: 4000
  },
  codepen:{
    node: home.children[5],
    timing: 4100
  }
}




orderedIntro();
function orderedIntro(){
  for(var item in animateList){
    timeout(animateList[item].node, animateList[item].timing)
  }
}
function timeout(obj, timing){
  setTimeout(function(){
    obj.classList.add("animate")
    obj.classList.remove("no-opacity")
  }, timing)
}





function introDelayedAnimation(parentNode, timing, className){
  // let items = document.getElementById("nav").children;
  let items = parentNode.children;
  let i = 0;
  (function delayedLoop(){
    setTimeout(function(){
      items[i].classList.add(className);
      items[i].classList.remove("no-opacity")

      if (++i < items.length) delayedLoop(i);
    }, Array.isArray(timing) ? timing[i] : timing)
  })(i)

}
