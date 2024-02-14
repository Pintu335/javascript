let number=33;
let stringNumber=String(number);
//console.log(typeof stringNumber);//here 33 number in converted in string type ;




let score="34"
let stringValue=Number(34);
//console.log(stringValue);
//console.log(typeof stringValue);// here string 34 is converted into  number 34

let value="34abc"
let stringOutput=Number(value);
//console.log(stringOutput);// here when we convert the value in number the NaN which means not a number
//console.log(typeof stringOutput);

let x=null
let xOutput=Number(x);
//console.log(xOutput);// when we converte the value of null into number it becomes 0;
//console.log(typeof x);// here the type of x => object 
/* note :- if we take x=undefind then after conversion into number the output will become NaN;
          if we take boolean value true then after the conversion the value become 1 and for the false 0;*/

let y=""
let output=Boolean(y);
//console.log(output);          
// if we give sting value empty (" ") and convert it into the boolean datatype the output 
//will be false and if string contain some letter then  output will be true 


//.......................................................opertions.............................................
let num=1;
let NumValue=-num;
// console.log(NumValue);
 // console.log(2+1);
 // console.log(2-1);
 // console.log(2/1);
 // console.log(2*1);
 // console.log(2**1); power
 // console.log(2%1);
 
console.log(1+1+"1");// here the convesion take place depending upond the first letter output=>21
console.log("1"+2+2); // the output is 122 because the first letter is string that why reset 2 number will not be added
let str1=" hello "
let str2="  Pintu"
let str3=str1+str2;
console.log(str3);
let z=true
console.log(+z);// here the value of +z is converted into number so the output becomes 1
console.log(+"");// here the value of "" is converted into number so the output becomes zero