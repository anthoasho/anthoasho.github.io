//convert
function tagEditor(parent){
let counter = 0;
let tagEditorHolder = smartElement("div", parent, null, {id:"tag-editor"});
let container = smartElement("div", tagEditorHolder, "container");
let form = smartElement("form", container, null, {id: "input", onsubmit: tagEditorInput})
let input = smartElement("input", form, "input", {id: "information", type: "text", placeholder:"Input tag...", autocomplete:"off", required: "true"})
let removeButton = smartElement("input", form, "submit", {type: "button", value: "CLEAR ALL"})
removeButton.addEventListener("click", removeAll)
let submitButton = smartElement("input", form, "submit", {type: "submit", value: "ENTER"})
let taskListContainer = smartElement("div", container, "task-list")
let taskListUl = smartElement("ul", taskListContainer, "list")
function tagEditorInput() {
  event.preventDefault();
  let inputBox = document.getElementById("information")
  let input = inputBox.value
  let i = counter;
  counter++;
  let list = document.querySelector(".list")
  let listItem = smartElement("li", list, "item", {id: `item-${i}`, innerText: input})
  setTimeout(() => {  listItem.classList.add("show-fade")}, 10)
  let deleteButton = smartElement("button", listItem, null, {id: `erase-${i}`, innerText: "x"})
  deleteButton.addEventListener("click", function(){
    listItem.classList.remove("show-fade");
    setTimeout(()=> {
      listItem.parentNode.removeChild(listItem)
    }, 400)
  })
  inputBox.value = "";
  inputBox.placeholder = "Input tag ... ";
 }
function removeAll(){
    let listItems = document.querySelectorAll("li")
    var k = 0;
    var timer = 50
    delayedTimeout()
     function delayedTimeout(){
       setTimeout(()=>{
         listItems[k].classList.remove("show-fade");
         k++
         if (k<listItems.length){
           delayedTimeout()
         }
         if(k>counter){
           counter = 0;
         }
       }, timer)
   }
   setTimeout(()=>{
     for(let i = 0; i < listItems.length; i++){
       listItems[i].parentNode.removeChild(listItems[i]);
     }
   }, (timer * (1.5 *listItems.length)))
}
function removeInd(){
  this.parentNode.removeChild(this);
}
}

window.calculator = function(parent){
//Calculator Design and event listeners
  let container = smartElement("div", parent, null, {id:"calculator-body"})
  let buttons = [["CE"], [7, 8, 9, "/"], [4, 5, 6, "x"], [1, 2, 3, "-"], [0, ".", "=", "+"]]
  smartElement("input", container, null, {type: "text", id:"input", value:"0", disabled: "disabled"})
  for(let i = 0; i< buttons.length; i++){
    let row = smartElement("div", container, "row")
    let newButtons = buttons[i]
    for(let k = 0; k < newButtons.length; k++){
      let isFunctionKey = typeof newButtons[k] !== "number"
      let button = smartElement("button", row, (isFunctionKey && "function"), {id: newButtons[k], innerText:  newButtons[k], name:newButtons[k]})
      if(newButtons[k] !== "x"){
        button.addEventListener("click", () => dataInput(newButtons[k]))
      }else{
        button.addEventListener("click",() => dataInput("*"))
    }
  }
}

//Calculator Code
let inputDataTotal = [];
let inputDataShow = [];
let dataFinal = null;
let equals = false;
let testVar = document.getElementById('input');
//Creates a function to alter data
clearData = function(equal, data){
              inputDataShow = [data];
              inputDataTotal = [data];
              equals = equal;
}
function dataInput(input){
      //clears all calculations
      if (input === 'CE'){
            clearData(false, []);
            testVar.value = 0;
      }
      //Inserts the operator and clears the input field
      else if(input === '/' || input === '*' || input === '+' || input === '-'){
            inputDataTotal.push(input);
            testVar.value = input;
            inputDataShow = [];
            equals = false;
      }
      //Conducts final calculation and pushes it to input field
      // Also limits decimals to 8 places
      else if (input === '='){
            calculation = function(){
                 return eval(inputDataTotal.join(''));
            }
            dataFinal = parseFloat(calculation().toFixed(8));
            if(calculation() === undefined){
                 testVar.value = 'Please input';
            }else{
                  testVar.value = dataFinal;
                   clearData(true, [dataFinal])
                  }
      }
      //Checks to see if a period has been entered and disables duplicates
      else if (input === '.'){
            if (!inputDataShow.includes('.')){
                   if(equals === true){
                   clearData(false, []);
                }
            inputDataShow.push(input);
            inputDataTotal.push(input);
            testVar.value = inputDataShow.join('') ;
        }
      }
      //pushes the pressed number
      else{
        if(equals === true){
             clearData(false, []);
        }
        inputDataShow.push(input);
        inputDataTotal.push(input);
       testVar.value = inputDataShow.join('') ;
      }
}

}

function randomUserFetcher(parent){

let fetchHolder = smartElement("div", parent, null, {id:"fetch"});
let container =   smartElement("div", fetchHolder, "fetch-container");
let profile = smartElement("div", container, "profile");
let info = smartElement("div", profile, "info");
let picture = smartElement("div", info, "pic");
let profilePicture = smartElement("img", picture, null, {id: "pro-pic", alt: "User's Profile Picture"});
let information = smartElement("div", info, "fetch-information");
let name = smartElement("div", information, null, {id: "name"});
let username = smartElement("div", information, null, {id: "username"});
let emailDiv = smartElement("div", information);
let emailP = smartElement("p", emailDiv, null, {innerText: "Email: "});
let emailSpan = smartElement("span", emailP, null, {id: "email"});
let cityDiv = smartElement("div", information);
let cityP = smartElement("p", cityDiv, null, {innerText: "City: "});
let citySpan = smartElement("span", cityP, null, {id: "city"});
let nextButton = smartElement("div", profile, null, {id: "next"});
smartElement("p", nextButton, null, {innerText:"Next User"});
var url = "https://randomuser.me/api";
 randomUser();

// let nextButton = document.getElementById("next");
// let profile = document.getElementByClassName("profile");
nextButton.addEventListener("click", function(){
  profile.classList.add("active");
  setTimeout(function(){
    profile.classList.remove("active");
  }, 200)
})

function randomUser(){
  fetch(url)
    .then(function(data){
      let information = data.results[0];
      name.innerText = `${information.name.first} ${information.name.last}`
      username.innerText = information.login.username;
      emailSpan.innerText = information.email;
      citySpan.innerText = information.location.city;
      profilePicture.setAttribute("src", information.picture.large);
    })
    .catch(function(err){
      name.innerText = "Anthony Ashurst"
      username.innerText = "AnthoAsho"
      emailSpan.innerText = "anthoasho@gmail"
      citySpan.innerText = "Yokohama"
      profilePicture.setAttribute("src", "public/images/1.JPG");
    })
}

// function randomUser(){
//     $.getJSON(url)
//   .done(function(data){
//     var information = data.results[0];
//     $("#name").text(information.name.first + ' ' + information.name.last)
//     $("#username").text(information.login.username);
//     $("#email").text(information.email);
//     $("#city").text(information.location.city);
//     $("#pro-pic").attr("src", information.picture.large);
//   });
// }
}
