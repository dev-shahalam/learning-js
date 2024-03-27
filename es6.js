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

*/