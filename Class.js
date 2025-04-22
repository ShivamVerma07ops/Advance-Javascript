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
class Person{
        #firstname;
        #lastname;
    
    constructor(firstname,lastname){
        this. #firstname= firstname;
        this.lastname = lastname;
    
    }
    get firstname(){
        return this.#firstname;
    }
    set firstname(firstname){
        this.#firstname=firstname;
    }
    get lastname(){
        return this.#lastname;
    }
    set lastname(lastname){
        this.#lastname=lastname;
    }
    }
    let p= new Person("shivam","verma");
    console.log(p.firstname);
    p.firstname="hello";
    console.log(p.firstname);
    console.log(p);