/* Main Containers*/
var body = document.getElementsByTagName("body")[0]
let gallery = document.getElementById("gallery")
let navContainer =  smartElement("div", body, "nav-container");
let navButtonContainer = smartElement("div", navContainer, "nav-button-area nav-area-hide")
window.onload = function(){
  navigation();
  makeLayoutFromArray(layoutArray, removeLoading)
  codePenEmbed();
}
function removeLoading(){
  document.querySelector(".hidden").style.display = "flex";
  let loader =   document.getElementById("loader")
  loader.style.opacity = "0";
  setTimeout(function(){
    loader.style.display = "none";
  }, 2000)
}
/*
  Element creator, mainly for setting type of element, its parent and any classNames
  Extra attributes are added as an object
*/
function smartElement(type, parent, className, extraAttribute){
  let content = document.createElement(type);
  content.className = className;
  parent.appendChild(content);
  for(var name in extraAttribute){
    content[name] = extraAttribute[name]
  }
  return content
}

/*
  Automatically adds a row for each item in the layout array from Data.

*/
function navigation(parent){
  let navButton = smartElement("button", navContainer, "nav-button");
  let navIcon =  smartElement("div", navButton, "hamburger");
  for(let i = 0; i<3; i++){
    smartElement("div", navIcon, "line");
  }
  navButton.addEventListener("click", function(){
    let navArea = document.querySelector(".nav-button-area");
    navButton.childNodes[0].classList.toggle("close");
    navArea.classList.toggle("nav-area-show");
    navArea.classList.toggle("nav-area-hide");
  })
}

/*
  Add each individual Navigation button to the navigation box
  Allows for scrolling each pane into view on click
*/
function addNavButton(parent, element, index){
  let navButton = smartElement("div", parent, "nav-button-selector");
  navButton.addEventListener("click", function(){navigationScrollerClick.bind(this, element.id, index)()});
  let navButtonTitle = smartElement("p", navButton, null, {innerText: element.title});
}

/*This runs through the Array specified in the data and creates a horizontal slide for each item*/
function makeLayoutFromArray(data, next){
  let gallery = document.getElementById("gallery");
  for(let i = 0; i < data.length; i++){
    let panel = smartElement("div", gallery, "panel", {id:data[i].id});
    topBottomButtons(panel, data, i);
    createPane(data[i].id, data[i].data);
  }
  next();
}
/*

TODO: Clean all this up, so many variables it is hard to keep track. Try experimenting with putting all information into data.js

This creates each indivial pane that covers the size of the screen, if there are extra horizontal pages, they are automatically added.
It's written to paint the content inwards accordingly (containers are followed by contents of subsequent containers)
*/
function createPane(location, data){
  let panel = document.getElementById(location);
  let parent = smartElement("div", panel, "vertical");
  data.forEach(function(element, i ){
    let content = smartElement("div", parent, "content", {id: `${element.id}-${i}`});
    let innerContent  = smartElement("div", content, "inner-content");
    let navRow = document.querySelector(`.${element.id}`);
    let information = smartElement("div", innerContent, "information");
    let title = smartElement("h1", information, "title", {innerText: element.title});
    let text = smartElement("p", information, "text", {innerHTML: element.text});
    addCornerGraphic(element, content);
    addSideButtons(content, i, data.length);
    addNavButton(navRow, element, i); //Add the button for this pane into navigation
    element.img  && smartElement("img", innerContent, "panel-image", {src: element.img.src, alt: element.img.alt});
    element.loaderBox && addLoaderBox(innerContent, element.loaderBox);
    element.codepen && codePenInsertor(element.codepen, innerContent);
    element.codepen && text.classList.add("mobile-hidden")
    // element.calculator && addCalculatorToContent(innerContent, information, element.calculator.code, calculator);
    // element.tagEditor &&  addCalculatorToContent(innerContent, information, element.tagEditor.code, tagEditor);
    // element.tagEditor && codePenInsertor("GyWbyR", innerContent)
    // element.fetcher && codePenInsertor("YeNovr", innerContent);
    // element.fetcher && addCalculatorToContent(innerContent, information, element.fetcher.code, randomUserFetcher)
  })
}

function topBottomButtons(parent, dataArray, index){
  let buttonContainer = smartElement("div", parent, "button-area");
  smartElement("div", navButtonContainer, `nav-button-row ${dataArray[index].id}`);
  index === 0 && createButton("top", buttonContainer, "Top", "fa-arrow-up arrow-icon arrow-icon-prev", window.smoothScroll,"button panel-button-next ");
  index !== 0 && createButton( "previous", buttonContainer, "Back", "fa-arrow-up arrow-icon arrow-icon-prev", window.smoothScroll,"button panel-button-next ");
  index !==  (dataArray.length-1) && createButton(null, buttonContainer, "Next", "fa-arrow-down arrow-icon arrow-icon-prev", window.smoothScroll, "button panel-button-next ");
  index ===  (dataArray.length-1) &&  createButton( "top", buttonContainer, "Top", "fa-arrow-up arrow-icon arrow-icon-prev", window.smoothScroll, "button panel-button-next ");
}

function createButton(direction, parent,  text, icon, func, className ){
  let button = smartElement("button", parent,  className, {type: "button", innerText:text})
    button.addEventListener("click", func.bind(button, direction))
    icon && smartElement("i", button, `fas ${icon}`)
}
/* Used for Morikin's corner graphic, if other panels add an image in data it will automatically be created*/
function addCornerGraphic(element, parent){
  if(element.cornerGraphic){
    let cornerGraphic = smartElement("div", parent, element.cornerGraphic.css);
    let background = smartElement("img", cornerGraphic, null, {src: element.cornerGraphic.background});
  }
}

/*
Checks to see if the pane has left/right siblings, if it does arrow buttons are added for simple navigation
*/
function addSideButtons(parent, index, arrayLength){
  if(index !==  (arrayLength-1)){
    let nextButton = smartElement("div", parent, "order-right");
    createButton(null, nextButton, null, "fa-arrow-right", window.smoothScroll, "button panel-button-next ");
  }
  if(index !== 0 ){
    let prevButton = smartElement("div", parent, "order-left");
          createButton("previous", prevButton, null, "fa-arrow-left", window.smoothScroll, "button panel-button-next ");
  }
}

/*
Adds loading icons to the correct pane
May combine this with another function to show button designs
*/
function addLoaderBox(parent, loaderBox){
  let loaderContainer = smartElement("div", parent, "loader-container");
  for(let i = 0; i < loaderBox.length; i++){
    let smallLoadingWithTitle = smartElement("div", loaderContainer, `loader-item-area`);
    let smallLoading = smartElement("div", smallLoadingWithTitle, `loader-item ${loaderBox[i][0].parentClass}`);
    insertScript(loaderBox[i], smallLoading);
    smartElement("div", smallLoadingWithTitle, "loader-title", {innerText:loaderBox[i][0].title });
  }
}



/*

The following is leftover code in case I want to later re-add my own code viewer
Currently codepen's embed is used for ease, speed and stability.

*/


function insertScript(arr, parent){
  for(let i = 0; i < arr.length; i++){
    smartElement("div", parent, arr[i].className);
  }
}

//
// function codeBoxVisibilityToggle(div) {
//   this.classList.toggle("selected") //button
//   for(let i = 0;  i < div.parentNode.childNodes.length; i++){
//     div.parentNode.childNodes[i].classList.toggle("no-opacity"); //codeBox and siblings
//   }
// }

// function addCalculatorToContent(objectParent, codeAreaParent, code, func){
//   let calculatorContainer = smartElement("div", objectParent, "calculator-container");
//   func(calculatorContainer);
//   let codeArea = smartElement("div", codeAreaParent, "code-box no-opacity");
//   let codePre = smartElement("pre", codeArea);
//   let codeBox = smartElement("code", codePre, null, {innerText: code});
//   let showCodeButton =  createButton(null, calculatorContainer, "Code", null,  (function(){codeBoxVisibilityToggle.bind(this, codeArea)()}), "button code-icon" );
//
//
// }
