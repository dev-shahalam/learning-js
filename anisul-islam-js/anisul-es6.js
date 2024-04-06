/*
// for of loop *Use in Array*

        let arrayOne=["A1","B2","C3","D4","E5","F6"];
        for (let x of arrayOne){
            console.log(x);
        }

// for in loop *Use in Object*

        let objectOne={
            Name: "Md Shah Alam",
            Age: "24 Years",
            Height:"5.4 inc"
        }
        for (let y in objectOne) {
            console.log(`${y} = ${objectOne[y]}`);
        }

// for each loop *Use in Array*

        let arrayTwo=[10,20,30,40];
        let arraySquare=[];
        arrayTwo.forEach(function(x){
            arraySquare.push(x*x);
        })
        console.log(arraySquare);


        let arrayFour=[5,10,15,20];
        arrayFour.forEach(function(x,y,z){
        z[y] = x+5;
        })
        console.log(arrayFour);


// Arrow Functions With Map() & Filter() (ES6)  

        const students = [
            {
                name:"Arabi",
                id: 101,
                class: 5,
                gpa: 3.5,
            },
            {
                name: "Sabbir",
                id: 102,
                class: 5,
                gpa: 2.9,
            },
            {
                name: "Jasim",
                id: 103,
                class: 5,
                gpa: 2.5,
            },
            {
                name: "Nipa",
                id: 104,
                class: 5,
                gpa: 3.8,
            },
        ];
        const student=()=>{
        return students.filter((x)=> x.gpa>=3 ).map((y)=> y.name);
        }
        console.log(student());


// Array Destructure

        const numbers=[10,15,15,20,25,30];
        let [n1,n2,n3,n4,n5,n6]=numbers;

        console.log(n1,n2,n3,n4,n5,n6);

// swap variables with destructure

        let a=10;
        let b=20;
        [a,b]=[b,a];
        console.log(a,b);


// Object Destructure

        const studentInfo1 = {
            fullName: "Anas",
            id: 101,
            class: 5,
            gpa: 3.5,
        }
        let { fullName, id } = studentInfo1;
console.log(fullName, id);


        const studentInfo = {
            fullName: "Anas",
            id: 101,
            class: 5,
            gpa: 3.5,
        }

        const stdn=({fullName,id})=>{
            return  `${fullName},${id}`;
        }

        console.log(stdn(studentInfo));

// Find 
// Find Index


// heigher order function and callback function 

// Synchronously
        const funOne=()=>{
            console.log("My Task One");
        }
        const funTwo=()=>{
            console.log("My Task Two");
        }
        const funThree=()=>{
            setTimeout(function(){
                console.log("My Task Three");
            },3000)
        }
        const funFour=()=>{
            console.log("My Task Four");
        }
        const funFive=()=>{
            console.log("My Task Five");
        }

        funOne();
        funTwo();
        funThree();
        funFour();
        funFive();


// Assynchronous

        const funOne=(back)=>{
            console.log("My Task One");
            back();
        }
        const funTwo=(back)=>{
            setTimeout(function(){
                console.log("My Task Two");
                back();
            },3000)
        }
        const funThree=(back)=>{
            setTimeout(()=>{
                console.log("My Task Three");
                back();
            },3000) 
        }
        const funFour=()=>{
            console.log("My Task Four");
        }
        funOne(()=>{
            funTwo(()=>{
                funThree(()=>{
                    funFour();
                });
            });
        });

// Buttons Show Paragraph *** Sample Project ***

let len = document.querySelectorAll(".btn").length;
let i = 0;

for (i = 0; i < len; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("p").innerHTML = text + " Say Hello";
    })
}

// Buttons with Audio *** Sample Project *** Audio * Animattion * keypress **
var len = document.querySelectorAll(".btn").length;
for (var i = 0; i < len; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        console.log(text);
        audioPlayer(text)
        animation(text)
    });
}
function audioPlayer(text) {
    switch (text) {
        case "A":
            var audio = new Audio("alphabet/a.mp3");
            audio.play();
            break;
        case "B":
            var audio = new Audio("alphabet/b.mp3");
            audio.play();
            break;
        case "C":
            var audio = new Audio("alphabet/c.mp3");
            audio.play();
            break;
        case "D":
            var audio = new Audio("alphabet/d.mp3");
            audio.play();
            break;
        case "E":
            var audio = new Audio("alphabet/e.mp3");
            audio.play();
            break;
        case "F":
            var audio = new Audio("alphabet/f.mp3");
            audio.play();
            break;
        case "G":
            var audio = new Audio("alphabet/g.mp3");
            audio.play();
            break;
        case "H":
            var audio = new Audio("alphabet/h.mp3");
            audio.play();
            break;
        case "I":
            var audio = new Audio("alphabet/i.mp3");
            audio.play();
            break;
        case "J":
            var audio = new Audio("alphabet/j.mp3");
            audio.play();
            break;
        case "K":
            var audio = new Audio("alphabet/k.mp3");
            audio.play();
            break;
        case "L":
            var audio = new Audio("alphabet/l.mp3");
            audio.play();
            break;
        case "M":
            var audio = new Audio("alphabet/m.mp3");
            audio.play();
            break;
        case "N":
            var audio = new Audio("alphabet/n.mp3");
            audio.play();
            break;
        case "O":
            var audio = new Audio("alphabet/o.mp3");
            audio.play();
            break;
        case "P":
            var audio = new Audio("alphabet/p.mp3");
            audio.play();
            break;
        case "Q":
            var audio = new Audio("alphabet/q.mp3");
            audio.play();
            break;
        case "R":
            var audio = new Audio("alphabet/r.mp3");
            audio.play();
            break;
        case "S":
            var audio = new Audio("alphabet/s.mp3");
            audio.play();
            break;
        case "T":
            var audio = new Audio("alphabet/t.mp3");
            audio.play();
            break;
        case "U":
            var audio = new Audio("alphabet/u.mp3");
            audio.play();
            break;
        case "V":
            var audio = new Audio("alphabet/v.mp3");
            audio.play();
            break;
        case "W":
            var audio = new Audio("alphabet/w.mp3");
            audio.play();
            break;
        case "X":
            var audio = new Audio("alphabet/x.mp3");
            audio.play();
            break;
        case "Y":
            var audio = new Audio("alphabet/y.mp3");
            audio.play();
            break;
        case "Z":
            var audio = new Audio("alphabet/z.mp3");
            audio.play();
            break;
    }
}

function animation(text){
    var anim=document.querySelector("."+text);
    anim.classList.add("animated");
    setTimeout(function(){
        anim.classList.remove("animated");
    },1500)
}

document.addEventListener("keypress",function(event){
    var even=event.key.toUpperCase();
    even.toUpperCase;
    audioPlayer(even);
    animation(even);
})

*/

// DOM Events
    // 1. Events Object
    //     -event type :   change 

    


    //                     submite



    //                     load



    //                     unload


    //                     open


    //                     play


    //                     canplay


    //                     pause


    //                     playing


    //                     progress


    //                     edned


    //                     resize


    //                     scroll


    //                     toggle



    // 2. MouseEvent Object


    // 3. KeyboardEvent Object


    // 4. FocusEvent Object


    // 5. ClipboardEvent Object


    // 6. DragEvent Object    


















