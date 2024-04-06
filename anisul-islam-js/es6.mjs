/*


"use strict"; // for error messages and warnings in javascript code.

    console.log("Hello world!");

// 5 Spread (...) Oparetor / 

    let pConunty=["Bangladesh","Srilongka"];
    let rConunty=[...pConunty,"America","China","Canada","France","Germany"];
    console.log(rConunty);


// 7 Rest Parameter is prefixed with three dots (...)
    function sum(...num) {
        let sum = 0;
        for (let i of num) {
            sum = sum + i;
        }
        console.log(sum);
    }
    sum(1, 2, 3, 4, 5);


// 8 Dynamic Function

    var fun=function(num1,num2){
        return num1 + num2;
    }
    console.log(fun(10,10));


// 9 ES6 Variable

// var
    var name="Alam";
    var name="Arabi"; // Redecleared Possible
    name="Anas"; // Reassaign Possible
    console.log(name);

// let
    let name="Alam";
    let name="Arabi"; // Redecleared not Possible
    name="Anas"; // Reassaign Possible
    console.log(name);

// const
    const name="Alam";
    const name="Arabi"; // Redecleared not Possible
    name="Anas"; // Reassaign not Possible
    console.log(name);


// 10 Variable Scope

    Global Scope- In the global scope the variable can be accessed from any part of the javascript Code. 

    Local Scope- In the local scope, the variable can be accessed within a function where it is declared.


// 11 Variable Hoisting 

    Hoisting অর্থ উত্তোলন করা।
    অর্থাৎ আগে value Assaign করা হবে এবং Declare করা হবে পরে, এমন variable কে variable hoisting variable বলে। 

    name="Anas";
    console.log(name);
    var name;


// 12+13 Simple For of Loop ( Array এর জন্য ফর অফ লুপ ব্যবহার করা হয় )

var country = ["Dhaka","Khulna","Chittagong","Barishal","Rajshahi"];

for (let myCountry of country) {
    console.log(myCountry);
}


// 14,15 Object

var anas = {
    personalInfo: {
        fullName: "Arabia Al Anas",
        age: "3 Month 9 Days",
        city: "Mirpur Dhaka"
    },

    educationInfo: {
        school: "B.Sc. in Computer Engineering",
        degree: "Bachelor of Engineering"
    },

    workInfo: {
        position: "Software Engineer",
        company: "Google"
    },

    skillsInfo: {
        languages: ["English", "Hindi", "Arabic"],
        tools: ["HTML", "CSS", "Javascript", "PHP","Laravel"],
    }

};

console.log(anas['personalInfo']['fullName'] + ' ' +anas['educationInfo']['school']);


// 16 for in loop use ( use for object ) 
    var anas = {
        fullName: "Arabia Al Anas",
        age: "3 Month 9 Days",
        city: "Mirpur Dhaka"
    };

    for (let props in anas) {
        // console.log(props); // view the only properties
        // console.log(anas[props]); // view the only values in the properties
        console.log(props + "= " + anas[props]);
    }


// 17 decision making

        let anas = {
            fullName: "Arabia Al Anas",
            age: "3 Month",
            city: "Mirpur Dhaka"
        }

        if (anas['age']=="3 Month"){
            console.log (`He is ${anas.fullName}`);
        } 
        else {
            console.log (`He is not ${anas.fullName}`);
        }

// 18 simple function and Parameterized functions

        // * Simple function *

        function addNum() {
            let num1 = 10;
            let num2 = 20;
            let sum = num1 + num2;
            console.log(sum);
        }
        addNum();

        // * Parameterized function * 

        function addName(nam1, nam2) {
            console.log(nam1 + nam2);
        }
        addName("Arabia Al", "Anas");

// 19 rest parameters functions

        function numbers(...numb){
            console.log(numb);
        }
        numbers(1,2,3);

// 20 function returns *** function returns anything
        function funOne(){
            return "Arabia Al Anas";
        }
        function funTwo(){
            return funOne();
        }
        console.log(funOne()+" "+funTwo());
        

// 21 anonymous functions *** Redeclear possible * A function without a name
        let fun=function(x){
            return x;
        }
        console.log (fun("Anas"));

// 22 arrow function
       let myFun=(y)=>{
            return y;
        }
        console.log(myFun("Arabi"));

// 24 simple arrays *** 2 ways to write a array *** for of loop use for arrays

        let array = ["A","B","C","D","E"];
        var arrayPro= new Array("1","2","3","F","G");
        // console.log(array[0]);
        // console.log(arrayPro[1]);

        for (let item of arrayPro){
            console.log(item);
        }


// 25 Multidimensional Arrays

        let arrayOne= ["A","B","C","D","E"];
        let arrayTwo= ["F","G","H","I","J"];
        let arrayThree= ["K","L","M","N","O"];

        let arrayFour= [arrayOne,arrayTwo,arrayThree]; // একাধিক অ্যারে নিয়ে যে একটি অ্যারে গঠন করে বা তৈরি করা হয় তাকে মাল্টিডাইমেনশনাল অ্যারে বলে ।
        console.log(arrayFour[1][3]);

// 26 array de-structuring
        let country= ["Ban","Pak","Canada","France","Germany"]
        var [a,b,c]=country;
        console.log(c);
        
// 27 28 29 es6 map

        let myMap = new Map();
        myMap.set("Key1", "Ban");
        myMap.set("Key2", "Ind");
        myMap.set("Key3", "Pak");
        myMap.set("Key4", "Bhu");
        myMap.set("Key5", "Sri");
        myMap.set("Key6", "Tha");
        myMap.set("Key7", "Can");

        //   console.log(myMap.values());
        //   console.log(myMap.keys());

        // *** delete() clear() get() has() ***

        // myMap.delete("Key1");
        // myMap.clear();
        // console.log (myMap.get("Key7"));
   
        // if(myMap.has("Key7")){
        //     console.log("Yes");
        // } else {
        //     console.log("No");
        // }

        //*for of loop* in map
        // for (let mayvalue of myMap.values()) {
        //     console.log(mayvalue);
        // }


// 30 31 es6 set

        let mySet = new Set();
        mySet.add("Ban");
        mySet.add("Ind");
        mySet.add("Pak");
        mySet.add("Bhu");

        //mySet.delete("Ban");       //delete()
        //mySet.clear();             //Clear()
        //console.log(mySet.size);   //size
        
        // if(mySet.has("Ind")){        // has()
        //     console.log("India");
        // } else {
        //     console.log("Not India");
        // }
    
        // console.log(mySet);


// 32 33 es6 create Class and use

            class profileClass{

                profileData(){
                    console.log("Profile Data is proccessing");
                }
                profileReg(){
                    console.log("Profile Register is proccessing");
                }
                profileLogin(){
                    console.log("Profile Login is proccessing");
                }
                profileReset(reset){
                    console.log(reset);
                }
            }

            let profile= new profileClass();
            profile.profileReset("Reset Your Profile Data");
            
// 34 35 es6 class constructor
            // Constructor হচ্ছে Class এর নিজস্ব মেথড বা ফাংশন
            // Class Object তৈরি হলেই, Constructor Auto Fire or Call করে
            // Constructor কোনো কিছু Return করতে পারে না ।
            // একটা ক্লাস এ একাধিক Constructor থাকতে পারে না ।

            class myCount{

                constructor(a,b){
                    this.n1=a;
                    this.n2=b;
                    console.log(a+b);
                }

                add(){
                    let result =this.n1+this.n2;
                    console.log(result);
                }
            }

            let count= new myCount(1,2);
            count.add();


// 36 es6 static keyword

            // static keyword এর সম্পর্ক ক্লাস এর সাথে হয় । এটি ক্লাসের অবজেক্ট এর সাথে কোন সম্পর্ক রাখে না । 

            class myClass{
                static myFun(){
                    console.log("Iam Static");
                }
            }

            // let obj=new myClass();
            // obj.myFun();
            // myClass.myFun();


// 37 38  es6 class inheritance
            // 🟪 Keyword extends is used to create inherit relationship between class
            // 🟪 For inherit relationship child class can use parent class properties

            class parent {
                addNum(a,b) {
                    console.log(a+b);
                }
            }
            class child extends parent {

            }
            let obj = new child();
            obj.demo();

// 39 es6 super keyword

            class parent {
                addNum() {
                    console.log("Hello");
                }
            }
            class child extends parent {
                demo(){
                    super.addNum();
                }
            }
            let obj = new child();
            obj.demo();

// 40 41 42 43 44 45 es6 module export import
            // Import & Export করার জন্য html file এ  javascript source file add করার সময় file type="module" লিখে দিতে হবে । অন্যথায় কাজ করবে না।
            // অথবা javascript file এর extention e .mjs লিখে দিতে হবে।

        import {bankAccount} from "./oop.mjs"; // named import
        import ccount from "./oop.mjs"; // default import
        let account = new ccount();

*/