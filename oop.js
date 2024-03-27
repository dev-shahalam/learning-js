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

*/