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
class Person {
            constructor(firstname,lastname){
                this.firstname = firstname;
                this.lastname = lastname;
        
            }
        greet(){
            console.log("hi there i am", this.firstname );



        }
    }
    let p = new Person ("  shivam ", "shashankn");
    p.greet();







