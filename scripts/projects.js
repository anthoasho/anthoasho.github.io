//convert
function tagEditor(){

var counter = 0;



/*HTML */
// <div>
//   <div id ="container">
//      <form id = "input" onSubmit="dataInput()">
//        <input id="information" class="input" type="text" placeholder="Input tag..." autocomplete="off" required>
//           <input class="submit"  type="button" onClick="removeAll()" value="CLEAR ALL" >
//        <input class="submit" type="submit" value="ENTER" >
//
//     </form>
//     <div class = "task-list">
//         <ul class="list">
//
//         </ul>
//     </div>
//   </div>
//
// </div>
/*CSS*/
//   body {
//   background-color: #edfffe;
//   font-size: 12px;
//   font-family: "Open Sans", sans-serif;
// }
// #container {
//   width: 400px;
//   margin: auto;
//   background-color: #f4f4f4;
//   border: solid 1px #cccccc;
//   padding: 5px 5px 0 5px;
// }
// #input {
//   padding-top: 2px;
//   padding-bottom: 2px;
// }
// input,
// .submit {
//   display: inline-block;
//   -webkit-appearance: none;
//   margin-bottom: 5px;
//   /*   border: solid 1px  gray; */
// }
// .input {
//   border: 1px solid lightgray;
//   color: #005650;
//   width: 58%;
//   font-family: "Open Sans", sans-serif;
//   padding-left: 2px;
// }
// .submit {
//   width: 20%;
//   background-color: #ededed;
//   border: 1px solid transparent;
//   color: #005650;
//   float: right;
//   font-family: "Open Sans", sans-serif;
// }
// .task-list {
//   overflow: scroll;
//   max-height: 120px;
//   border-top: solid 1px #cccccc;
//   padding: 0;
// }
// .task-list ul {
//   list-style: none;
//   margin-bottom: 0;
//   padding-left: 10px;
// }
// .task-list li {
//   background-color: #ededed;
//   color: #303030;
//   border-radius: 5px;
//   float: left;
//   margin: 2px;
//   padding: 1px 15px 0px 10px;
//   position: relative;
//   border: solid 1px #cccccc;
// }
// .task-list button {
//   background-color: white;
//   border-radius: 20px;
//   font-size: 50%;
//   border: solid 1px #cccccc;
//   position: absolute;
//   padding: 2px 3px 2px 2px;
//   top: 1px;
//   right: 1px;
// }
// ::-webkit-scrollbar {
//   width: 3px;
//   background-color: #f4f4f4;
// }
// ::-webkit-scrollbar-thumb {
//   background-color: #005650;
// }
// ::-webkit-scrollbar-corner {
//   background: transparent;
// }
function dataInput() {
  event.preventDefault();
  let input = $("#information").val();
  console.log($input);

 let i = counter;
  counter++;
  $("ul.list").prepend($("<li>")
                       .attr('id', 'test' + i)
                       .text($input));
  $("#test" + i ).append($("<button>")
                              .attr('id', 'erase' + i)
                              .text('x')
                              .click(function(){$("#test" + i).fadeOut(200, function(){$(this).remove});})).hide().slideDown();
    $("#information").val('').attr('placeholder', 'Input tag...');
   console.log( counter);
 }


function removeAll(){
    for(k = 0; k < counter; k++){   $("#test" + k).slideUp(200, removeInd);}
  counter = 0;
}
function removeInd(){
  $(this).remove();
}
}

function calculator(){


/*HTML*/

// <div id="calculator-body">
//   <input type="text" disabled="disabled" id="input" value= "0">
//
//   <div class="row">
//     <button id="CE" type="button" class= "function" name="CE"onClick="dataInput('CE')">CE</button>
//   </div>
//
//   <div class="row">
//                 <button id="7" type="button" name="7" onClick="dataInput(7)">7</button>
//                 <button id="8" type="button" name="8" onClick="dataInput(8)">8</button>
//                 <button id="9" type="button" name="9"onClick="dataInput(9)">9</button>
//                 <button id="/" type="button" class= "function" name="/"onClick="dataInput('/')">/</button>
//
//               </div>
//               <div class="row">
//                 <button id="4" type="button" name="4" onClick="dataInput(4)">4</button>
//                 <button id="5" type="button" name="5" onClick="dataInput(5)">5</button>
//                 <button id="6" type="button" name="6"onClick="dataInput(6)">6</button>
//                 <button id="x" type="button" class= "function" name="x"onClick="dataInput('*')">X</button>
//               </div>
//               <div class="row">
//                 <button id="1" type="button" name="1"onClick="dataInput(1)">1</button>
//                 <button id="2" type="button" name="2" onClick="dataInput(2)">2</button>
//                 <button id="3" type="button" name="3" onClick="dataInput(3)">3</button>
//                 <button type="button" class= "function" name="-"onClick="dataInput('-')">-</button>
//               </div>
//               <div class="row">
//                 <button id="0" type="button" name="0" onClick="dataInput(0)">0</button>
//                 <button id="." type="button" name="."onClick="dataInput('.')">.</button>
//                 <button id="=" type="button"class= "function" name="="onClick="dataInput('=')">=</button>
//                 <button id="+" type="button" class= "function" name="+"onClick="dataInput('+')">+</button>
//                                    <!--<button id="C" type="button" class= "function" name="C"onClick="dataInput('C')">C</button> -->
//               </div>
//
//
//               </div>

/* CSS */

  //
  // #calculator-body{
  //   width: 250px;
  //   height: 425px;
  //   background-color:#dbdbdb;
  //   border: 1px solid #a5a5a5;
  //   margin:auto;
  // }
  // #input{
  //   width:220px;
  //   margin: 10px 0 0 12px;
  //   height:50px;
  //   text-align: right;
  //   font-size:35px;
  // }
  // .row{
  //   height: 60px;
  //   width:250px;
  //   padding:10px 0 0 10px;
  // }
  // button{
  //   width: 50px;
  //   height:90%;
  //   margin: 2px;
  //   border: #a5a5a5 solid 1px;
  //   font-family: 'Mukta Malar', sans-serif;
  //   font-size: 20px;
  //   outline:none;
  //
  // }
  // button:active{
  //   background-color:#c5e0dc;
  //   transition: 0.2s;
  // }
  // .function{
  //   background-color:#a5a5a5;
  // }
  // .function:active{
  //   background-color: #92aaa3;
  // }
  // button[name="="]{
  //   background-color:#ce6f10;
  // }
  // button[name="="]:active{
  //   background-color:#a8590a;
  // }
  // #CE{
  //   width:100px;
  //   margin-left: auto;
  //   margin-right: 25px;
  //   display:block;
  //
  // }


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

function randomUser(){

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
var url = "https://randomuser.me/api";
 randomUser();

$("#next").click(function(){
  randomUser();
  $(".profile").addClass("active").delay(150).queue(function( next ){
    $(this).removeClass('active');
    next();})
});


function randomUser(){
    $.getJSON(url)
  .done(function(data){
    var information = data.results[0];
    $("#name").text(information.name.first + ' ' + information.name.last)
    $("#username").text(information.login.username);
    $("#email").text(information.email);
    $("#city").text(information.location.city);
    $("#pro-pic").attr("src", information.picture.large);
  });
}
}
