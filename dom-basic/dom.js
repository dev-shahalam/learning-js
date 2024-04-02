/*
        //   ***DOM***____________________


// document.getElementsByTagName()[]
let h1tag= document.getElementsByTagName("h1")[0];
h1tag.innerHTML="Iam TagName Element";

// document.getElementById('')
let h1id=document.getElementById('h1');
h1id.innerHTML="Iam ID Element";

// document.getElementsByClassName()[]
let h1class=document.getElementsByClassName('h1class')[0];
h1class.innerHTML="Iam Class Element";


// document.querySelector("")____________________

let pTag= document.querySelector("p");
pTag.innerHTML="Hi Iam Tag Name Element";

let p1Id= document.querySelector("#p1id");
p1Id.innerHTML="Hi Iam Id Name Element";

let p1class= document.querySelector(".p1class");
p1class.innerHTML="Hi Iam Class Name Element";

let list= document.querySelector(".main-div ul li a ");
list.innerHTML="Change Link";


// document.querySelectorAll("")[0];
let pTag=document.querySelectorAll(".ptag")[2];
pTag.innerHTML="Hi Iam P Tag";



//***Onclick____________________

let img=document.querySelector("#myImg");
function btn1(){
img.src="img/anas.jpg";
}

function btn2(){
img.src="img/abdullah.jpg";
}

function btn3(){
img.src="img/umor.jpg";
}

*/

// DOM  * Change HTML Elements____________________
// Find/Get,
// Change,
// Add,
// Delete HTML Elements.

// Property____________________ 
// Element.innerHTML=""; new HTML content
// Element.attribute=""; new value
// Element.style.property=""; new style

// Method____________________
// Element.setAttribute(attribute, value); change the attribute value of an HTML element..

// Create Element____________________
// document.createElement("");
// document.createTextNode("");

// Add Element____________________
// Element.AppendChild(); add child element to parent element
// Element.insertBefore(before, after); add child element to parent element

// Remove Element________________
// Element.removeChild(); remove child element from parent element


// Downwards____________________
// pararentVariable.querySelector("childID");

// Upwards____________________
// childvariable.parentElement;

// Sideways - nextElementSibling, previousElementSibling
// 1stchild.nextElementSibling;  for next element
// 2ndchild.previousElementSibling; for previous element