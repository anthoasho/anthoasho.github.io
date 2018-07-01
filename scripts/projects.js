//convert
function tagEditor(parent){

let counter = 0;

// <div id="tag-editor">
//
//
//     <div class="container">
//        <form id = "input" onSubmit="tagEditorInput()">
//          <input id="information" class="input" type="text" placeholder="Input tag..." autocomplete="off" required>
//             <input class="submit"  type="button" onClick="removeAll()" value="CLEAR ALL" >
//          <input class="submit" type="submit" value="ENTER" >
//
//       </form>
//       <div class = "task-list">
//           <ul class="list">
//
//           </ul>
//       </div>
//     </div>
//     </div>

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
  console.log(input);

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
    // for(k = 0; k < counter; k++){
    let listItems = document.querySelectorAll("li")
    console.log(counter)
    var k = 0;
    var timer = 50
      delayedTimeout()
     // $("#test" + k).slideUp(200, removeInd);
     function delayedTimeout(){

       setTimeout(()=>{
       console.log(listItems)
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
  //First attempt at a Javascript project
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

// function randomUser(){

/*HTML */

// <div class="container">
//
//   <h1>Random User Generator</h1>
//   <div class="profile">
//     <div class="info">
//       <div class="pic">
//         <img src="" id="pro-pic" alt="">
//       </div>
//       <div class="information">
//         <div id="name"></div>
//         <div id="username"></div>
//         <div>
//           <p>Email: <span id="email"></span></p>
//         </div>
//         <div>
//           <p>City: <span id="city"></span></p>
//         </div>
//       </div>
//     </div>
//     <div id="next">
//       <p>Next user</p>
//     </div>
//   </div>
//
// </div>

  /*CSS*/

// .container {
//   display: flex;
//   flex-direction:column;
//   justify-content: center;
//   align-items: center;
//   color: #303030;
//   font-family: "Arimo";
// }
//
// .profile {
//   width: 450px;
//   height: 250px;
//   display: flex;
//   padding: 15pxx;
//   flex-direction: column;
//   background: #dbdbdb;
//   justify-content: space-between;
//   border-radius: 10px;
//   overflow: hidden;
//   box-shadow: -1px 1px 4px rgba(0, 0, 0, 0.4);
// }
// .info {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-basis: 100%;
//   margin: 10px;
// }
// .pic img {
//   border-radius: 50%;
// }
// .information {
//   margin-left: 20px;
//   display: flex;
//   flex-direction: column;
//   width: 100%;
// }
// #name{
//   font-size: 1.7rem;
//   text-transform: capitalize;
//   min:-width:100%;
//   border-bottom: 3px solid #00bc3e;
// }
// #username{
//   margin-top: 10px;
//   font-size: 1.2rem;
//   color: #00bc3e;
//
// }
// #next {
//   height: 50px;
//   background: #00e24a;
//   text-align: center;
//   color: #dbdbdb;
//   letter-spacing: 4px;
// }
// #next:hover{
//   background:#00bc3e;
// }
//
// .active {
//   transform: translateY(2px);
// }
// span{
//   font-weight: 400;
// }
// p{
//   font-weight: 700;
// }
//
// .name {
//   color: #00bc3e;
// }

// Convert to vanilla JS
// var url = "https://randomuser.me/api";
//  randomUser();
//
// $("#next").click(function(){
//   randomUser();
//   $(".profile").addClass("active").delay(150).queue(function( next ){
//     $(this).removeClass('active');
//     next();})
// });
//
//
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
// }
