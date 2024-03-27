/* Module 03 Video Player
// If else

var mark = 32;
if (mark < 100 && mark >= 80) {
    document.write("A+");
}
else if (mark < 80 && mark >= 70) {
    document.write("A")
}
else if (mark < 70 && mark >= 60) {
    document.write("A-")
}
else if (mark < 60 && mark >= 50) {
    document.write("B")
}else if (mark < 50 && mark >= 40) {
    document.write("C")
}else if (mark < 40 && mark >= 33) {
    document.write("D")
}
else if (mark < 33) {
    document.write("Fail")
}


//Switch
var mark = 80;
switch (true) {
    case (mark < 100 && mark >= 80):
        document.write("A+");
        break;

    case (mark < 80 && mark >= 70):
        document.write("A");
        break;
    case (mark < 70 && mark >= 60):
        document.write("A-")
        break;
    case (mark < 60 && mark >= 50):
        document.write("B");
        break;
    case (mark < 50 && mark >= 40):
        document.write("C")
        break;
    case (mark < 40 && mark >= 33):
        document.write("D");
        break;
    default:
        document.write("Fail")
}


// For Loop, Continue and Break
var i;
for (i = 0; i < 10; i = i + 1) {
    if(i===2 || i===7){
        continue;
    }
    if (i === 4) {
        break;
    }
    document.write(i + "  <button>For Loop</button><br>");
}

//While Loop
var i=0;
while(i<5){
    document.write(i+"<button>While Loop</button> <br>");
    i++;
}

//Do While Loop
var i = 0;
do {
    document.write(i + "<button>Do While Loop</button><br>");
    i = i + 1;
} while (i < 5);


//Function & Perameter & Argument
let x=10;
let y=10;
function add(a,b){
    document.write(a+b+"<br>");
}
add(x,y);
function names(name){
    document.write(name);
}
names("Anas");



// Template Litaret 
let fName="Arabia";
let lName="Al Anas";
let age="3 Month"

let anas=`My Son Name is ${fName}${lName} and he is ${age} old`
document.write(anas);

let fName = "Arabia Al";
let lName = "Anas";
let age = "3 Month"
let anas = "My son Name is" +fName +lName;
document.write(anas);



//18 For Loop Over Array
let category = ["Fruits", "Drinks", "Grocery", "Fashion"]
let catLength=category.length;
for (i = 0; i < catLength; i++) {
    document.write(i + category[i] + "<br>");
}


//19 For In Loop Over Array
let category = ["Fruits", "Drinks", "Grocery", "Fashion"]
for(let item in category){
    document.write(category[item]+"<br>");
}


// 20 For In Loop Over Object
let person = {
    name: "Md Shah Alam",
    age: "24 Years",
    height:"5.4 inc"
}
for (let item in person){
    document.write(person[item]+"<br>");
}


// 21 Array Concate And Array Form

let array1=["A","B","C","D"];
let array2=["E","F","G","H"];
let array3=array1.concat(array2);
document.write(array3+"<br>");
var str="My Name Is Anas";
var strarr= Array.from(str);
document.write(str[5]);


// 22 Array Filter
let number=["30","35","33","38","40"];
let result=number.filter(function(item){
return item>35;
})
document.write(result);


// 23 Array Find Find Index
let number=["30","33","35","38","40","45",];

let result1=number.find(function(value){
    return value>38;
 })
let result2=number.findIndex(function(value){
   return value>38;
})
document.write(result);


// 24 Array ForEach Method
let number=["30","33","35","38","40","45",];
number.forEach(function(item){
    document.write(item+"<br>");
})


// 25 Array Includes And IndexOf

let number=["30","33","35","38","40","45",];
let result4= number.includes("39");
document.write(result4);

let number = ["30", "33", "35", "38", "40", "45",];
let result5 = number.indexOf("39");
document.write(result5);


// 26 Array Reverse Push Pop


let number=["30","33","35","38","40","45",];
let result6=number.reverse();
document.write(result6);

let number=["30","33","35","38","40","45",];
number.push("80");
number.push("90");
number.push("100");
document.write(number);

let number=["30","33","35","38","40","45",];
number.pop();
number.pop(); //delet last element
number.pop();
document.write(number);


// 27 Array Sort Slice And Splice
let number=["35","33","30","40","34","50","45"];
number.sort().reverse(); // acending and decending
document.write(number);

let number=["35","33","30","40","34","50","45"];
let result6=number.slice(2,5);
document.write(result6);


// 28 Splice
let number=["35","33","30","40","34","50","45"];
number.splice(1,2); // remove element by index no.
number.splice(0,0,20) // add element by index no.
document.write(number);;


// 29,30,31 String Methods

// CharAt()
let country="Bangladesh";
document.write(
    country.charAt(0)
);


// Concat()
let country1="Bangladesh";
let country2="India";
document.write(
    country1.concat(country2)
);

// IndexOf()
let country="Bangladesh";
document.write(
    country.indexOf("a")
)

// LastIndexOf()
let country="Bangladesh";
document.write(
    country.lastIndexOf("a")
)

// Replace()
let country="Bangladesh";
document.write(
    country.replace("desh","-Deshi")
)

// Substr()
let country="Bangladesh";
document.write(
    country.substr(0,6)
)

// Substring
let country="Bangladesh";
document.write(
    country.substring(6,10)
)

// Slice
let country="Bangladesh";
document.write(
    country.slice(0,6)
)

// Tolowercase
let country="Bangladesh";
document.write(
    country.toLowerCase()
)

// Touppercase
let country="Bangladesh";
document.write(
    country.toUpperCase()
)


// Trim
let country="     Bangladesh     ";
let countryTrim=country.trim();
document.write(
    "Before Trim  "+country.length+"<br>"
)
document.write(
    "After Trim  "+countryTrim.length+"<br>"
)



// 32 JavaScript Date Object

// getDate()
let obj1= new Date();
document.write(
    obj1.getDate()+"<br>"
)

// getDay()
let obj2= new Date();
document.write(
    obj2.getDay()+"<br>"
)

// getFullYears()
let obj3=new Date();
document.write(
    obj3.getFullYear()+"<br>"
)

// getHours()
let obj4= new Date();
document.write(
    obj4.getHours() +"<br>"
)

//getMillisecounds()
let obj5= new Date();
document.write(
    obj5.getMilliseconds() +"<br>"
)

// get time
let obj6= new Date();
document.write(
    obj6.getTime() +"<br>"
)

// TimeZoneOffset()
let obj7= new Date();
document.write(
    obj7.getTimezoneOffset() +"<br>"
)

// getUTCDay()
let obj8= new Date();
document.write(
    obj8.getUTCDay() +"<br>"
)

//getUTCHours()
let obj9= new Date();
document.write(
    obj9.getUTCHours() +"<br>"
)

//getUTCMinutes()
let obj10= new Date();
document.write(
    obj10.getUTCMinutes() +"<br>"
)

// 33 JavaScript Math Object
// abs()
let num=-10;
document.write(
    Math.abs(num)
)

// ceil()
let num=10.5;
document.write(
    Math.ceil(num)
)


// floor()
let num=10.8;
document.write(
    Math.floor(num)
)

// max()
document.write(
    Math.max(10,5,14,13,20,18,16,30)
)

// min()
document.write(
    Math.min(10,5,14,13,20,18,16,30)
)

// random()

document.write(
    Math.random()
)

// round()
let num=10.5;
document.write(
    Math.round(num)
)

//34 JavaScript Numbers

// isFinite()
let num=(5);
document.write(
    Number.isFinite(num)
)


// isIntiger()
let num=5;
document.write(
    Number.isInteger(num)
)


// parseFloat()
let num="1.5";
document.write(
    Number.parseFloat(num)
)


// parseInt()
let num=7.5;
document.write(
    Number.parseInt(num)
)

// toFixed()
let num=7.5054540;
document.write(
    num.toFixed(5)
)


// toString()
let num=7;
document.write(
    num.toString()
)



// 35 JS Window Object
// alert()
function alertFun() {
    alert("Welcome To My WebSite");
}

// confirm()
function confirmFun() {
    let result = confirm("Do You Want Load This Page ?");
    document.write(result);
}

// promt()
function promptFun() {
    let result = prompt("Enter your name");
    document.write(result);
}

// open()
function openFun() {
    open();
}

// close()
function closeFun() {
    close();
}

// setTimeout()
setTimeout(function(){
    alert("Hello Javascript Expert");
},5000)



// 36 JS Navigator Object

let appCodeName = navigator.appCodeName;
let appName = navigator.appName;
let appVersion = navigator.appVersion;
let coockieEnable = navigator.coockieEnable;
let language = navigator.language;
let userAgent = navigator.userAgent;
let platform = navigator.platform;
let online = navigator.online;


document.write(appCodeName + "<br>");
document.write(appName + "<br>");
document.write(appVersion + "<br>");
document.write(coockieEnable + "<br>");
document.write(language + "<br>");
document.write(userAgent + "<br>");
document.write(platform + "<br>");
document.write(online + "<br>");


// 37 js geolocation

navigator.geolocation.getCurrentPosition(function (position) {
    let altitude = position.coords.altitude;
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let speed = position.coords.speed;

    document.write("altitude :"+ altitude+"<br>");
    document.write("latitude :"+ latitude+"<br>");
    document.write("longitude :"+ longitude+"<br>");
    document.write("speed :"+ speed+"<br>");
})



// onclick()

// onmouseover()

// onmouseout()

// onchange()

// onkeydown()

// onload()

End 
End 2
*/

/*

///ফর লুপ দিয়ে নামতা/ধারাপাত/

var series;

for (i = 1; i <= 10; i++) {
    series = i + " = ";
    for (j = 1; j <= 10; j++) {
        series = series + i * j + " ";
    }
    console.log(series);
}



//  একটা সংখ্যার গুননীয়ক গুলো বের করা

var n = 144;
var range = Math.ceil(Math.sqrt(n));
var divisor = "";
for (i = 1; i <= range; i++) {

    if (n % i == 0) {

        if(i==n/i){
            divisor += i+" ";   
        }else {
         divisor += i+" "+(n/i)+" ";  
        }
    }
}
console.log(divisor);


// যেকোন মাসের ক্যালেন্ডার প্রিন্ট করা 

function cal(monthName,days,startingDays){
    var monthName;
    var days ;
    var startingDays;
    
    console.log("\n\n\n Calender Of", monthName, "\n\n");
    console.log("Sun  Mon  Tue  Wed  Thu  Fri  Sat  \n");
    

    for (var i = 0; i < 5; i++) {
        var dayRow = "";
        for (var j = 1; j <= 7; j++) {
            currentDay = 7 * i + j-startingDays;
            if (currentDay > days) {
                break;
            } else if(currentDay<1){
                currentDay=" ";
            }
            if (currentDay <= 9) {
                dayRow += currentDay + "    ";
            } else {
                dayRow = dayRow + currentDay +"   ";
            }
        }
        console.log(dayRow);
    }
}

cal("January 2024",31,1);
cal("February 2024",29,4);
cal("March 2024",31,5);
cal("April 2024",30,1);
cal("May 2024",30,3);
cal("June 2024",30,6);
cal("July 2024",31,1);
cal("August 2024",31,4);
cal("Septamber 2024",30,0);
cal("Otobar 2024",31,2);
cal("Novembar 2024",30,5);
cal("Decembar 2024",31,0);



// Array push() Method 
var list=["a","b","c","d"];
// list[4]="e";
// list[list.length-1]="f";
list.push("g");
console.log(list);


// Array pop() Method
var list = ["a", "b", "c", "d"];
var listF = list.pop();
console.log(listF);


// Array unshift() Method
var list=["b","c","d","e"];
list.unshift("a");
console.log(list);


// Array shift() Method
var list=["a","b","c","d","e"];
var listF =list.shift();
console.log(listF);



// Array Slice() Method
var list=["a","b","c","d","e","f","g"];
var chunk=list.slice(1,3);
var chunk1=list.slice(-5,-1);
console.log(chunk,chunk1);


// Array splice() Method
var list=["a","b","c","d","e","f"]
var chunk=list.splice(1,3);
console.log(list,chunk);


*/