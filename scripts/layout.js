function smartElement(type, parent, className, extraAttribute){
  let content = document.createElement(type);
  content.className = className;
  parent.appendChild(content);
  for(var name in extraAttribute){
    content[name] = extraAttribute[name]
  }
  return content
}
var body = document.getElementsByTagName("body")[0]



let gallery = document.getElementById("gallery")
let navContainer =  smartElement("div", body, "nav-container");
let navButton = smartElement("button", navContainer, "nav-button");
let navIcon =  smartElement("div", navButton, "hamburger");
for(let i = 0; i<3; i++){
  smartElement("div", navIcon, "line")
}
let navButtonContainer = smartElement("div", navButton, "nav-button-area")
navButton.addEventListener("click", function(){
  let navArea = document.querySelector(".nav-button-area")
  navButton.childNodes[0].classList.toggle("close")
  console.log(navButton.childNodes)
  navArea.classList.toggle("nav-area-show")
  console.log(navIcon)
})
function makeLayoutFromArray(data){
  let gallery = document.getElementById("gallery")
  for(let i = 0; i < data.length; i++){
    let panel = smartElement("div", gallery, "panel", {id:data[i].id})

    let buttonContainer = smartElement("div", panel, "button-area")
    smartElement("div", navButtonContainer, `nav-button-row ${data[i].id}`)
    if(i === 0){
      createButton("top", buttonContainer, "Top", "fa-arrow-up arrow-icon arrow-icon-prev")
    }
    if(i !== 0 ){
      createButton( "previous", buttonContainer, "Back", "fa-arrow-up arrow-icon arrow-icon-prev")
    }
    if(i !==  (data.length-1)){
      createButton(null, buttonContainer, "Next", "fa-arrow-down arrow-icon arrow-icon-prev")
    }
    if(i ===  (data.length-1)){
      createButton( "top", buttonContainer, "Top", "fa-arrow-up arrow-icon arrow-icon-prev")
    }
    createPane(data[i].id, data[i].data);

  }
}
function createButton(direction, parent,  text, icon){
  let button = smartElement("button", parent, "button panel-button-next", {type: "button", innerText:text})
    button.addEventListener("click", window.smoothScroll.bind(button, direction))
    let iconStyle = smartElement("i", button, `fas ${icon}`)
}
function createPane(location, data, vertical){
  let panel = document.getElementById(location);
  let parent = smartElement("div", panel, "vertical")
  data.forEach(function(element, i ){
    let content = smartElement("div", parent, "content", {id: `${element.id}-${i}`})
    let innerContent  = smartElement("div", content, "inner-content")
    let navRow = document.querySelector(`.${element.id}`)
    if(element.cornerGraphic){
      let cornerGraphic = smartElement("div", innerContent, element.cornerGraphic.css)
      let background = smartElement("img", cornerGraphic, null, {src: element.cornerGraphic.background})
    }
    if(i !==  (data.length-1)){
      let nextButton = smartElement("div", content, "order-right")
      createButton(null, nextButton, null, "fa-arrow-right")
    }
    if(i !== 0 ){
      let prevButton = smartElement("div", content, "order-left")
            createButton("previous", prevButton, null, "fa-arrow-left")
    }
    let information = smartElement("div", innerContent, "information")
    let title = smartElement("h1", information, "title", {innerText: element.title})
    let text = smartElement("p", information, "text", {innerHTML: element.text})
    let navButton = smartElement("div", navRow, "nav-button-selector")
    navButton.addEventListener("click",function(){
      let horizontal = document.getElementById(element.id)
      let vertical = document.getElementById(`${element.id}-${i}`)
        let navArea = document.querySelector(".nav-button-area")
        setTimeout(() => {
        navArea.classList.remove("nav-area-show")
        horizontal.scrollIntoView({
          behavior: "smooth",
          block: "start"
        })
        setTimeout(() => {  vertical.scrollIntoView({
            behavior: "smooth",
            block: "start"
          })
        }, 500)
        }, 500)

    })
    let test = smartElement("p", navButton, null, {innerText: element.title})
    console.log(element.title)
    element.img  && smartElement("img", innerContent, null, {src: element.img.src, alt: element.img.alt})
    if(element.scriptBox){
      let loaderContainer = smartElement("div", innerContent, "loader-container")
      for(let i = 0; i < element.scriptBox.length; i++){
        let smallLoadingWithTitle = smartElement("div", loaderContainer, `loader-item-area`)
        let smallLoading = smartElement("div", smallLoadingWithTitle, `loader-item ${element.scriptBox[i][0].parentClass}`)
        insertScript(element.scriptBox[i], smallLoading);
        smartElement("div", smallLoadingWithTitle, "loader-title", {innerText:element.scriptBox[i][0].title })
      }
    }

  })
}
function insertScript(arr, parent){
  for(let i = 0; i < arr.length; i++){
    smartElement("div", parent, arr[i].className)
  }
}
makeLayoutFromArray(layoutArray)
