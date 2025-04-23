// class ClassName{
//     constructor(prop1 , prop2){
//         this.prop1= prop1;
//         this.prop2= prop2;

//     }
// }
// let obj  = new ClassName("arg1","arg2");
// console.log(obj.prop1);
// console.log(obj.prop2);

///this  is a keyword refer ti the object itnbelongs to **************
// class Dog{
//     constructor(dogname,weight,color,breed){
//     this.dogname = dogname;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
// }
// }
// let dog = new Dog("juli","20","brown", "lebra");
// console.log(dog.dogname,dog.weight,dog.color,dog.breed);


//////  CLASSES****************************************
// class Person {
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;

//     }
// }
// let p = new Person("shivam","shashank");
// console.log("hi",p.firstname);
// console.log("hi",p.lastname);
// console.log("hi",p.firstname,p.lastname);


///next
// class Person {
//         constructor(firstname,lastname){
//             this.firstname = firstname;
//             this.lastname = lastname;
    
//         }
//     }
//     let p = new Person("shivam","shashank");
//     console.log("hi",p.firstname);
//     console.log("hi",p.lastname);


/////METHODS*************************** FUNCTION ON A CLASS IS CALLED METHODS
// class Person {
//             constructor(firstname,lastname){
//                 this.firstname = firstname;
//                 this.lastname = lastname;
        
//             }
//         greet(){
//             console.log("hi there i am", this.firstname );



//         }
//     }
//     let p = new Person ("  shivam ", "verma");
//     p.greet();


   // / what is instance variable ans= it is a  object

   /// /AbstractRange= hiding unnecesary object/detail

/// complement method
//    class Person {
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;

//     }

// greet(){
//     console.log("hi there i am",this.firstname);


// }
// compliment(name,object){
//     return "That is a wonderful"+ object+" ,"+name;
// }
// }
// let p= new Person("shivam","verma");
// p.greet();
// let compliment= p.compliment("Harry","hat");
// console.log(compliment);


///privata attribute
// class Person{
//     #firstname;
//     #lastname;

// constructor(firstname,lastname){
//     this. #firstname= firstname;
//     this.lastname = lastname;

// }
// }
// let p= new Person("shivam","verma");
// console.log(p.firstname);

// constructor(firstname,lastname){
//     if(firstname.startwith("N")){

//     }
//        this. #firstname= firstname;
    //     this.lastname = lastname;
//// get method ////////////////////////
// class Person{
//         #firstname;
//         #lastname;
    
//     constructor(firstname,lastname){
//         this. #firstname= firstname;
//         this.lastname = lastname;
    
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstname){
//         this.#firstname=firstname;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastname){
//         this.#lastname=lastname;
//     }
//     }
//     let p= new Person("shivam","verma");
//     console.log(p.firstname);
//     p.firstname="hello";
//     console.log(p.firstname);
//     console.log(p);


///// inheritance = reusability of code which is common to all classes that inherit the method aand propertis form the parent calss
/// single level multilevel multiple level hirearicical (hybrid)

// class Vehical{
//     constructor(color,currentSpeed,maxSpeed){
//         this.color= color;
//         this.currentSpeed= currentSpeed;
//         this.maxSpeed=maxSpeed;
//     }
//     move(){
//         console.log("arriving at", this.currentSpeed);
//     }
//     accelerate(amount){
//         this.currentSpeed+=amount;
//     }
// }
// ///next
// class Motorcycle extends Vehical{
//     constructor(color,currentSpeed,maxSpeed,fuel){
//         super(color,currentSpeed,maxSpeed);
//         this.fuel=fuel;

// }
// doWheelie(){
//     console.log("Driving  on one wheel");
// }

// }
// let motor = new Motorcycle("Black",0,250,"gasolin");
// console.log(motor.color);
// motor.accelerate(300);


///// PROTOTYPE /////////
///next
// class Person {
//                 constructor(firstname,lastname){
//                     this.firstname = firstname;
//                     this.lastname = lastname;
            
//                 }
//             greet(){
//                 console.log("hi there i am" );
    
//             }
    
//             }
//             Person.prototype.introduce=function(){
//                 console.log("hi i am ",this.firstname)
//             };

//         Person.prototype.favcolor="green";

//         let p = new Person ("  shivam ", "verma");
//         console.log(p.favcolor);
// 
// ///        p.introduce();
// next

// const fruits = new Map([
//     ["apples", 500],
//     ["banana", 300],
//     ["orange" , 200]
// ]);


//// next

//  const fruits= new Map();
// // set map values
// / fruits.set("apples",500);
// // fruits.set("banana",300);
// fruits.set("orange",102);
// // console.log(fruits);
// console.log(fruits.size);
//fruits.delete("apples");
//fruits.clear();

// /// return object ** type of fruit.

///Map.has() for checking   give true and false

// console.log(fruits.has("apples"));
// let text = "";
// fruits.forEach(function(value , key){
//     text += key + '=' +value;
// })
// console.log(text);


/// Map.endies();
// let text = "";
// for(const x of fruits.entries()){
//     text += x;
// }
// console.log(text);


// //next
// let text = "";
// for(const x of fruits.keys()){
//     text += x;
// }
// console.log(text);



//next
// let text = "";
// for(const x of fruits.values()){
//     text += x;
// }
// console.log(text);
/// sumof all
// let total =0;
// for(const x of fruits.values()){
//     total+= x;
// }
// console.log(total);

/// next

const apples ={name:'Apple'};
const banana ={name:'Banana'};
const grapes ={name:'Grapes'};
/// creat a map
const fruits=new Map();
fruits.set=(apples,500);
fruits.set=(banana,300);
fruits.set=(grapes,100);
console.log(fruits.get("apples"));