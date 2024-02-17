// primitive type
// 7 types : String, number, Boolean, null, undefined, symbol, BigInt
let Name="Pintu"; //  return type String
let Number=100; // return type number
const LoggedInt=false; // typeof output boolean
const outsideTemp=null;// typeof output object
let userEmail;      // return type undefinde
 const id=Symbol('123'); // return type Symbol
 const anotherId= Symbol('123');// return type Symbol
 console.log(id===anotherId)// output is false here;

// Reference type (Non primitive)
// Array, Objects, Fuctions
// Array
 const heros=["saktiman", "naagraj","doga"]
 // return type will be array
 // objects
 let person={
    Name:"Rishabh",
    age:21,
 }
 // return type of person will be object
 // function
 // in javascript you can treat function as variable
 const myfunction= function(){
    console.log("hello world");
 }
 // console.log(typeof myfunction) -> output= function but it is called function object;