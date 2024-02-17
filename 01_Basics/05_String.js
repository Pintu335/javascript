const name="hitesh";
const repoCount=50;
//console.log(name+ repoCount+" value"); // odd  method to concatinate it 

// below method is String interpolation
// here we creat the placeholder and we can inject the value there
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// declaring varibale using String constructor;
const myName=new String("pintu-Kumar-sharma");

console.log(myName.length); // length of string

console.log(myName.toUpperCase());// convert string into capital letter

console.log(myName.charAt(2));// give the value of character at the index 2 example output will be 'n"

console.log(myName.indexOf('u'));// this will give the indexno who has the character u in string but first place only not all
const newString=myName.substring(0,4);

console.log(newString);// this will give the output "pint" it don't include the last index as well 
//as no negative value

const anotheString=myName.slice(-11,11);

console.log(anotheString);// this will give the output  "pintu-kumar "
// it can have negative value along  and the negative value start form the backside


const newStringOne="     pohot   ";
console.log(newStringOne);// output will be "    pohot   " which mean it will have the space in output

console.log(newStringOne.trim());// output will be "pohot" due to use of trim function it will remove the extra space; 
// we also have trimStart and trimEnd function to remove space from start and end both;

const url="https://hitesh.com/hitesh%20choudhary";

console.log(url.replace("%20","-"));
// above replace will replace the value %20 with - output will be https://hitesh.com/hitesh-choudhary

console.log(url.includes("hitesh"));
// this will show that it include the given value or not the answer in true for the above example;

console.log(myName.split('-'));
// it will create the array by just romving the "-" and give the output [ 'pintu', 'Kumar', 'sharma' ]