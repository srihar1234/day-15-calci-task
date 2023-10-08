document.head.innerHTML += `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"></link>
                            <link rel="stylesheet" href="./style.css"/>`;
document.body.innerHTML += ` <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                             <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct" crossorigin="anonymous"></script>`
              
document.body.innerHTML +=
`<div class="container">
 <div class="header">
   <h1 id="title">CALCULATOR</h1>
   <input type="text" id="result"/>
   <p  id="description">You can perform only one operation at a time.
                        After a operation result, you should press clear button[cl] before entering another operation</p>
 </div>   
 <div class="display-area">
    <div id="res-sec">0</div>
    <div class="buttons">
     <div class="items n1"><button id="1">1</button></div>
     <div class="items n2"><button id="2">2</button></div>
     <div class="items n3"><button id="3">3</button></div>
     <div class="items n4"><button id="4">4</button></div>
     <div class="items n5"><button id="5">5</button></div>
     <div class="items n6"><button id="6">6</button></div>
     <div class="items n7"><button id="7">7</button></div>
     <div class="items n8"><button id="8">8</button></div>
     <div class="items n9"><button id="9">9</button></div>
     <div class="items n0"><button id="0">0</button></div>
     <div class="items n00"><button id="00">00</button></div>
     <div class="items equ"><button id="equal">=</button></div>
     <div class="items addi"><button id="add">+</button></div>
     <div class="items sub"><button id="subtract">-</button></div>
     <div class="items mul"><button id="multiply">*</button></div>
     <div class="items div"><button id="divide">/</button></div>
     <div class="items mod"><button id="modulus">%</button></div>
     <div class="items cl"><button id="clear" onclick="fresh()">cl</button></div>
     <div class="items arr"><button id="icon">arrow</button></div>
    </div> 
  </div>
 </div>`                             

 let inputs = document.getElementById("res-sec");
 let i1 = "";
 let i2 = "";
 let operator = ""; 
 let num1 = document.getElementById("1");
num1.addEventListener("click",(e)=>{
  if(operator==""){
    i1 += 1;
    inputs.innerText = (i1);
  }
  else{
    i2 += 1;
    inputs.innerText = (i2);
  } 
});
let num2 = document.getElementById("2");
num2.addEventListener("click",(e)=>{
  if(operator==""){
    i1 += 2;
    inputs.innerText = (i1);
  }
  else{
    i2 += 2;
    inputs.innerText = (i2);
  }
});
let num3 = document.getElementById("3");
num3.addEventListener("click",(e)=>{
  if(operator==""){
    i1 += 3;
    inputs.innerText = (i1);
  }
  else{
    i2 += 3;
    inputs.innerText = (i2);
  } 
});
let num4 = document.getElementById("4");
num4.addEventListener("click",(e)=>{
  if(operator==""){
    i1 += 4;
    inputs.innerText = (i1);
  }
  else{
    i2 += 4;
    inputs.innerText = (i2);
  } 
});
let num5 = document.getElementById("5");
num5.addEventListener("click",(e)=>{
  if(operator==""){
    i1 += 5;
    inputs.innerText = (i1);
  }
  else{
    i2 += 5;
    inputs.innerText = (i2);
  } 
});
let num6 = document.getElementById("6");
num6.addEventListener("click",(e)=>{
  if(operator==""){
    i1 += 6;
    inputs.innerText = (i1);
  }
  else{
    i2 += 6;
    inputs.innerText = (i2);
  } 
});
let num7 = document.getElementById("7");
num7.addEventListener("click",(e)=>{
  if(operator==""){
    i1 += 7;
    inputs.innerText = (i1);
  }
  else{
    i2 += 7;
    inputs.innerText = (i2);
  } 
});
let num8 = document.getElementById("8");
num8.addEventListener("click",(e)=>{
  if(operator==""){
    i1 += 8;
    inputs.innerText = (i1);
  }
  else{
    i2 += 8;
    cinputs.innerText = (i2);
  } 
});
let num9 = document.getElementById("9");
num9.addEventListener("click",(e)=>{
  if(operator==""){
    i1 += 9;
    inputs.innerText = (i1);
  }
  else{
    i2 += 9;
    inputs.innerText = (i2);
  } 
});
let num0 = document.getElementById("0");
num0.addEventListener("click",(e)=>{
  if(operator==""){
    i1 += 0;
    inputs.innerText = (i1);
  }
  else{
    i2 += 0;
    inputs.innerText = (i2);
  } 
});
let add = document.getElementById("add");
add.addEventListener("click",(e)=>{
  operator = "+";
  inputs.innerText = (operator);
});
let sub = document.getElementById("subtract");
sub.addEventListener("click",(e)=>{
  operator = "-";
  inputs.innerText = (operator);
});
let mul = document.getElementById("multiply");
mul.addEventListener("click",(e)=>{
  operator = "*";
  inputs.innerText = (operator);
});
let divide = document.getElementById("divide");
divide.addEventListener("click",(e)=>{
  operator = "/";
  inputs.innerText = (operator);
});
let mod = document.getElementById("modulus");
mod.addEventListener("click",(e)=>{
  operator = "%";
  inputs.innerText = (operator);
});
let res = document.getElementById("equal");
res.addEventListener("click",(e)=>{
   if(operator=="+"){
    inputs.innerText = (+i1)+(+i2); 
    console.log((+i1)+(+i2)); 
   }
   else if(operator=="-"){
    inputs.innerText = (+i1)-(+i2);
   }
   else if(operator=="*"){
    inputs.innerText = (+i1)*(+i2);
   }
   else if(operator=="/"){
    inputs.innerText = (+i1)/(+i2);
   }
   else if(operator=="%"){
    inputs.innerText = (+i1)%(+i2);
   }    
});
function fresh(){
  i1="";
  i2="";
  operator="";
  inputs.innerText = "0";
  console.log(i2,i2,operator);
}