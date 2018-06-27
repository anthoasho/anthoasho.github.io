function smartElement(type, parent, className, extraAttribute){
  let content = document.createElement(type);
  content.className = className;
  parent.appendChild(content);
  for(var name in extraAttribute){
    content[name] = extraAttribute[name]
  }
  return content
}
function makeLayoutFromArray(data){
  let gallery = document.getElementById("gallery")
  for(let i = 0; i < data.length; i++){
    let panel = smartElement("div", gallery, "panel", {id:data[i].id})
    let buttonContainer = smartElement("div", panel, "button-area")
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
    let content = smartElement("div", parent, "content")
    if(element.cornerGraphic){
      let cornerGraphic = smartElement("div", content, element.cornerGraphic.css)
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
    let information = smartElement("div", content, "information")
    let title = smartElement("h1", information, "title", {innerText: element.title})
    let text = smartElement("p", information, "text", {innerHTML: element.text})
    element.img  && smartElement("img", content, null, {src: element.img.src, alt: element.img.alt})
    if(element.scriptBox){

      let loaderContainer = smartElement("div", content, "loader-container")
      for(let i = 0; i < element.scriptBox.length; i++){
        let smallLoading = smartElement("div", loaderContainer, "loader-item")
        insertScript(element.scriptBox[i], smallLoading);
      }
    }

  })
}
function insertScript(arr, parent){
  for(let i = 0; i < arr.length; i++){
    smartElement("div", parent, arr[i].className)
    console.log(arr[i])
  }
}
makeLayoutFromArray(layoutArray)
