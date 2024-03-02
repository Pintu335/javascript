 const userEmailId="ajdijhiudfasu@gmail"
 if(userEmailId){
    console.log("got the email");
 }
 else{
    console.log("dont got the email");
 }

 // falsy values are
 // 0,-0, BigInt 0n,false,undefined, NaN,null,""  <- these are the falsy values

 // truthy values
 // '0','false'," ",[],{},function(){}

 // to check for the empty object
 const marks=[];
 if(marks.length===0){
    console.log("array is empty");
 }
 // to check object is empty 
 const emptyObj={}
 if(Object.keys(emptyObj).length===0){ //Object.keys(emptyObj) <= this converted the object into array 
        console.log("object is empty")
 }

 // nullish coalescing operator (??): null and undefinded
 let val1=5??10 // output 5;
 let val2=null??10 // output 10;
 let val3=undefined??10 // output 10;
 let val4=null??10??20 // output 10;

// ternary operator 
// condition ? true:false
const price=200;
price > 200 ? console.log("true"):console.log("false");