// ---   *** JavaScript Maps ***  ----- // 

// const fruits = new Map([
//     ["apples", 500],
//     ["banana", 300],
//     ["orange" , 200]
// ]);
// console.log(newMap);


// create Map 
// const fruits = new Map();
// // Set Map 
// fruits.set("apple" , 500);
// fruits.set("banana", 200);
// fruits.set("orange", 200);
// console.log(fruits);



// Return objects :- types of fruits 
// instanceofMap return true

// const fruits = new Map([
//     ["apples", 500],
//     ["banana", 300],
//     ["orange" , 200]
// ]);
// console.log(fruits.size);
// //console.log(fruits.delete("apples"));
// //console.log(fruits.size);
// fruits.clear();
// console.log();


//Map.has() // return true 
//console.log(fruits.has("apples"));

// let text = "";
// fruits.forEach(function(value , key){
//     text += key + '=' +value;
// })
// console.log(text);

//Map.entries();


// let text = "";
// for(const x of fruits.entries()){
//     text += x;
// }
// console.log(text);


// laist all keys 
// let text = "";
// for(const x of fruits.keys()){
//     text += x;
// }
// console.log(text);



// Map.values()
// let text = "";
// for(const x of fruits.values()){
//     text += x;
// }
// console.log(text);



// // Sum all value 
// let total = 0;
// for(const x of fruits.values()){
//     total += x;
// }
// console.log(total);

// Creates Object 
// const apples = {name: 'Apples'};
// const banana = {name: 'Banana'};
// const grapes = {name: 'Grapes'};

// // create a map 

// const fruits = new Map();
// fruits.set(apples , 500);
// fruits.set(banana , 300);
// fruits.set(grapes , 200);

// console.log(fruits.get("apples"));


// JavaScript Destructing :- Destructuring is a powerful feature in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables.
//  This syntax makes it easier to work with complex data structures by extracting only the necessary parts.

// const Person={
//     firstName:"Shashank",
//     lastName:"dubey",
//     age:"80"

// };
// let{firstName,lastName}=Person;
//let(lastName,firstName)=Person;
// console.log(Person);

 //object default
 const Person={
    firstName:"Shashank",
    lastName:"dubey",
    age:"22"

 };
 let{lastName:name}= Person;
 console.log(Person);