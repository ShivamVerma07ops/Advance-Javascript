// ***** Arrow Function **** //


// Spread OPERATOR

//  let spread =["so", "much" ,"fun"];
//  let message1 =["Javascript" , "is" , spread, ];
//  let message =["Javascript" , "is" , ...spread, ];
//  console.log(message1);
//  console.log(message);


// let spread =["so", "much" ,"fun"];
//  let message1 =["Javascript" , "is" , spread, "and" , "very" ,"powerful"];
//  let message2 =["Javascript" , "is" , ...spread, "and" , "very" ,"powerful"];
//  console.log(message1);
// console.log(message2);

 
// function addTwonum(x,y) {
//     console.log(x+y);
    
// }
// // let arr = [5,9];
// // addTwonum(...arr);







// function addFournum(x,y,z,a) {
//     console.log(x+y+z+a
//     );
    
// }
// let arr1 = [5,9];
// let arr2 = [3,1];

// addFournum(...arr1 , ...arr2);

//* REST PARAMETER */

// function and defination 

// function someFunction(param1 ,...param2) {
//     console.log(param1,param2);
    
// }
// someFunction("hi" , "there" ,"how are you");


// function addTwonum(x,y) {
//     console.log(x+y);
    
// }

// let result = addTwonum(4,5);
// console.log(result);


// arrow function se add two number
//  let addTwonum = (x,y) => .console.log(x+y);
//  ;
// // addTwonum(3,5);


// // find output 
// let resultArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwonum(i,2*i);
//     resultArr.push(result);
// }

// console.log(resultArr);

// *** Returing array function /// 

//let addTwonum = (x,y) => x+y;
// addTwonum(3,5);


// find output 
// let resultArr = [];
// for (let i = 0; i < 10; i++) {
//     let result = addTwonum(i,2*i);
//     resultArr.push(result);
// }

// console.log(resultArr);


////DATE 08/04/2025/////////////////////////////////////////////////////////////////////////////////////

/// variable scope in function/////
// function testAvaillabability(x){
//     console.log("available here",x);
    

// }
// testAvaillabability("Hii");
// console.log("Not available here",x);




///next program///
// function testAvaillabability(y){
//     let y = "localvariable";
//     console.log("available here",x);

// }
// testAvaillabability("Hii");
// console.log("Not available here");



/// next 
// function testAvaillabability(y){
//     let y = "'i'llreturn"
//     console.log("available here",y);
//     return y;
// }
// let z = testAvaillabability();
// console.log("outside the function",z)
// console.log("outside the function",y);



//// nextfunction doingstuff(){
//     if (true){
//         console.log(x);
//         var x = "local";


//     }

// doingstuff();






/// next


// function doingstuff(){
//     if (true){
//         console.log(x);
//         let x = "local";


//     }
// }
// doingstuff();

//// *** constant scope/**/// */

// function doingstuff(){
//         if (true){
           
//             const x = "local";
    
    
//         }
//         console.log(x);

//     }
//     doingstuff();




    /// next
    // let globalvar = "Accessible everywhere";
    // console.log("Outside function",globalvar);
    // function creatingnewScope(x){
    //     console.log(" access to global var inside function")
    // }




    /// next
    // let x = "global";
    // function doingstuff(){
    //     let x = "local";
    //     console.log(x);

    // }
    // doingstuff();
    // console.log(x);


    /// next WHEN WE REMOVE X FROM THE ABOVE PROGRAMM  WE FIND  OUT ONLY LOCAL LOCAL***///
    // let x = "global";
    // function doingstuff(){
    //      x = "local";
    //     console.log(x);

    // }
    // doingstuff();
    // console.log(x);


    ///next
//      let x = "global";
//      function doingstuff(x){

     
//      console.log(x);
// }
// doingstuff("param")


//// next
// function confuseReader(){
//     x = "Guess my scope...";
//     console.log(" inside the function",x);

// }
// confuseReader();
// console.log("outside the function",x);

//// IMMADIATELY INVOKED FUNCTION   EXPRESSION (IIFE)********************************

// (function(){
//     console.log("IIFE");

// })();


///NEXT
// (()=>{
//     console.log(" run right way");

// })();



//// RECURSIVE FUNCTION***********************************************************************

// function getRecursive(nr){
//     console.log(nr);
//     if(nr>0){
//     getRecursive(--nr);

// }
// }
// getRecursive(3);


/////next
// function logRecursive(nr){
//     console.log("Started function",nr);

       
//         if(nr>0){

//         logRecursive(nr-1);
    
//     }
//     else{
//         console.log("done with recursion");
        

//     }
//     console.log("Ended fun ",nr);
//     }
//     logRecursive(3);




