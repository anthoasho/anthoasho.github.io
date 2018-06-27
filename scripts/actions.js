
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
