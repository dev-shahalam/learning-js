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
*/
