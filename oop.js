/*

// 1. JavaScript Object 

     // 🟪 Variable type properties
     // 🟪 Method properties
     // 🟪 Object properties
     // 🟪 Array properties

     // There are 3 ways to create objects.



     //  a- By object literal

     var person={
        fName: "Arabiya Al ",
        lName: "Anas",
        age: "3 Month 9 Days",
        city: "Mirpur Dhaka",
        fullName: function(){
            console.log("My name is"+" "+ this.fName + this.lName);
            return ( `My name is this.${person.fName} ${person.lName}` );
        },
     }
     person.fullName();
     console.log(person.fullName());


     //  b- By creating instance of Object

        var person= new Object();
        person.fName = "Arabiya Al ";
        person.lName = "Anas";
        person.age = "3 Month 9 Days";
        person.city = "Mirpur Dhaka";
        person.fullName= function(){
            return ( `My name is ${person.fName}${person.lName}`);
        }

        console.log(person.fullName());

     //  c- By using constructor function


     function person(){
        this.fName = "Arabiya Al ";
        this.lName = "Anas";
        this.age = "3 Month 9 Days";
        this.city = "Mirpur Dhaka";
        this.fullName= function(){
            return ( `My name is ${this.fName}${this.lName}`);
        }
     }

     var personName= new person();
     console.log(personName.fullName());


// 2. Class
        // 🟪 Classes are blueprints of an Object
        // 🟪 Class is a template while Objects are instances of the class
        // 🟪 Using let or var to declare variables inside a class is unnecessary because class
        // properties are automatically scoped to the class instance and don't require explicit
        // variable declarations

        একটি ক্লাস শুধুমাত্র একবার ঘোষণা করা যেতে পারে। আমরা যদি একাধিকবার ক্লাস ঘোষণা করার চেষ্টা করি, এটি একটি ত্রুটি নিক্ষেপ করে।



     class person {
        fName="Arabia Al ";
        lName="Anas";
        fullName= function(){
            return (`My son name is ${this.fName}${this.lName}`);
        }
     }

     var person1= new person();
     console.log(person1.fullName());




        //  একটি ক্লাস সংজ্ঞায়িত করার আরেকটি উপায় হল একটি ক্লাস এক্সপ্রেশন ব্যবহার করে।
        //  এখানে, ক্লাসের নাম বরাদ্দ করা বাধ্যতামূলক নয়।
        //  সুতরাং, ক্লাস এক্সপ্রেশন নাম বা নামহীন হতে পারে
        //  এভাবে আপনি ক্লাস পুনরায় ঘোষণা করতে পারেন


    var person1= class {
            fName="Arabia Al ";
            lName="Anas";
            fullName= function(){
                return (`My son name is ${this.fName}${this.lName}`);
            }
        }

        var person1= new person1();
        console.log(person1.fullName());

    //  এভাবে আপনি ক্লাস পুনরায় ঘোষণা করতে পারেন
        var person1= class {
            fName="Arabia ";
            lName="Anas";
            fullName= function(){
                return (`My son name is ${this.fName}${this.lName}`);
            }
        }

        var person1= new person1();
        console.log(person1.fullName());



// 3. Constructor
     // 🟪 Class constructor is a magic method
     // 🟪 Constructor execute automatically when object is created
     // 🟪 Constructor can take parameter
     // 🟪 Constructor method can't return any result

        class addNum{
                constructor(a,b){
                    console.log(a+b);
                }
            }
            const addNum1= new addNum(20,20);


// 4. Static Keyword

        // জাভাস্ক্রিপ্টের স্ট্যাটিক কীওয়ার্ডটি একটি ক্লাসের জন্য স্ট্যাটিক পদ্ধতি এবং বৈশিষ্ট্যগুলি সংজ্ঞায়িত করতে ব্যবহৃত হয়
        // স্ট্যাটিক সদস্যদের (বৈশিষ্ট্য এবং পদ্ধতি) তাদের ক্লাস ইনস্ট্যান্ট না করেই ডাকা হয় এবং ক্লাস ইন্সট্যান্সের মাধ্যমে ডাকা যায় না

        class person{
           static fName= "Arabia Al ";
           static lName= "Anas";
           static age=4;
           static bio= function(){
                return (`My son name is ${this.fName} ${this.lName} and he is ${this.age} Months old`);
            }
        }

        // var person1= new person();
        console.log(person.bio());
        // console.log(person.age);

        
// 5. Inheritance
        Keyword extends is used to create inherit relationship between class
        🟪 For inherit relationship child class can use parent class properties

        class parent{
            firstName="Arabia Al";
            lastName="Anas";
            getFullName(){
                return (`This is ${this.firstName} ${this.lastName}`)
            }
        }
        class child extends parent {

        }

        // var parent1= new parent();
        // console.log(parent1.getFullName());
        var child1= new child();
        console.log(child1.getFullName());

// 6. Overriding
        🟪 Overriding works for inheritance relationship
        🟪 When child class change his parent properties , that is overriding

        class parent {
            firstName="Arabia";
            lastName="Anas";
            getFullName(){
                return (`This is ${this.firstName} ${this.lastName}`);   
            }
        }

        class child extends parent {
            firstName="Arabia Al";
        }

        let child1= new child();
        console.log(child1.getFullName());


        // let parent1= new parent();
        // console.log(parent1.getFullName());
  
// 7. Inheritance Constructor
        🟪 Constructor inside only parent class
        🟪 Constructor inside only parent class pass parameters
        🟪 Constructor inside only child class
        🟪 Constructor inside only child class pass parameters
        🟪 Constructor inside both parent & child class
        🟪 Constructor inside both parent & child class pass parameters

        class parent{
            constructor(msg,a,b){
                console.log("Iam a constructor of parent class");
                console.log(msg+" "+(a+b));
            }
        }

        class child extends parent{

         constructor(msg,a,b){
            super();
            console.log(msg+" "+(a+b));
            
         }

        }

        const parent1=new parent();
        const child1= new child("Iam a constructor of Parent class",10,10);

//8. Inheritance Static Properties

        🟪 When a class extends another, it inherits the parent class's static properties and methods

        class parent {
            static firstName="Arabia";
            static lastName="Anas";
        }
        class child extends parent {
            static firstName="Arabia Al";
        }
        console.log(parent.firstName);
        console.log(parent.lastName);

// 9. Method Overloading   

// 10. Abstraction
        🟪 Keyword "abstract" use for class abstraction
        🟪 You can't create object for abstract class
        🟪 Abstract class Always needs its inherited child class to perform
        🟪 JavaScript does not have built-in support for abstract

11. Polymorphism
        🟪 The polymorphism is a core concept of an object-oriented paradigm
        that provides a way to perform a single action in different forms.
        🟪 We already know about Inheritance, Overriding, Overloading - those concepts together represent polymorphism

// 12 Encapsulation

            // * Encapsulation Using Closures *

        function profile(){
            let details="Profile Data";
            return {
                updated:function(){
                    console.log("Profile Updated Proccess");
                },
                photoUpload:function(){
                    console.log("Photo Uploaded Proccess");
                },
                login:function(){
                    console.log("Login Proccess");
                },
                register:function(){
                    console.log("Register Proccess");
                },
                reset:function(){
                    console.log("Reset Proccess");
                }
            }
        }
        const profile1= new profile();
        profile1.photoUpload();


         // * Using Constructor Functions *


        function Car(make, model) {
            let mileage = 0;
            this.getMake = function() {
            return make;
            };
            this.getModel = function() {
            return model;
            };
            this.getMileage = function() {
            return mileage;
            };
            this.drive = function(distance) {
            mileage += distance;
            };
            }
            const myCar = new Car('Toyota', 'Corolla');
            console.log(myCar.getMake()); // Output: Toyota



         //   * Using ES6 Classes *

        class bankAccount{
        #balance=0;
            diposite (amount){
                this.#balance=this.#balance+amount;
            }
            widthrow(amount){
                if (amount <=this.#balance){
                    this.#balance-=amount;
                } else {
                    console.log("Insufficient Balance");
                }
            }
            getBalance(){
                return this.#balance;
            }
        }

        const acc= new bankAccount();
        acc.diposite(500);
        acc.widthrow(270);
        console.log(acc.getBalance());
        console.log(acc.balance); // show undifined balance
*/










