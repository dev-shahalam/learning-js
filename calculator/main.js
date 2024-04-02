let number1=document.getElementById("n1");
let number2=document.getElementById("n2");
let showResult=document.getElementById("result");
function add(){
   let result= number1.value+number2.value;
   showResult.innerHTML=result;
}