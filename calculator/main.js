/*
// Simple Calcaluter by function 
   function submite() {
   var n1 = document.getElementById("inputValueOne").value;
   let n2 = document.getElementById("inputValueTwo").value;
   let add = document.getElementById("oparetor").value;
   let showResult = document.getElementById("result");


   if (add==="+"){
      showResult.innerHTML=parseFloat(n1)+parseFloat(n2);
   } else if (add==="-"){
      showResult.innerHTML=parseFloat(n1)-parseFloat(n2);
   }else if (add==="*"){
      showResult.innerHTML=parseFloat(n1)*parseFloat(n2);
   }else if (add==="/"){
      showResult.innerHTML=parseFloat(n1)/parseFloat(n2);
   }  
}
*/

// Simple Calcaluter by addEvenListener function 
document.querySelector("#cel").addEventListener("click", function () {
   let fNum = document.querySelector("#inputValueOne").value;
   let lNum = document.querySelector("#inputValueTwo").value;
   let oparetor = document.querySelector("#oparetor").value;
   let showResult = document.querySelector("#result");


   if (oparetor === "+") {
      showResult.innerHTML = parseFloat(fNum) + parseFloat(lNum);
   }
   else if (oparetor === "-") {
      showResult.innerHTML = parseFloat(fNum) - parseFloat(lNum);
   }
   else if (oparetor === "*") {
      showResult.innerHTML = parseFloat(fNum) * parseFloat(lNum);
   }
   else if (oparetor === "/") {
      showResult.innerHTML = parseFloat(fNum) / parseFloat(lNum);
   }

});


/*

// *** Form controls ***

let form = document.querySelector("form");
let name = form.querySelector("#name");
let email = form.querySelector("#email");
let password = form.querySelector("#password");

form.addEventListener("submit", formHandler);

function formHandler() {
   event.preventDefault();
   let nameValue = name.value;
   let emailValue = email.value;
   let passwordValue = password.value;
   const userInfo = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
   }
   console.log(userInfo);
   name.value = "";
   email.value = "";
   password.value = "";
}

*/
