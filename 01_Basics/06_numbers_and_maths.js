const number=1000;
console.log(number);
const num=new Number(400);
console.log(num);// output [Number:400]
// convert the number to the string
console.log(num.toString().length);// this will convert the number to the string and will give the output 3
console.log(num.toFixed(2));// this will give the output 400.00 toFixed function make sure the no. of digit after the decimal
const otherNumber=98.784;
console.log(otherNumber.toPrecision(3));// output-> 98.8
const thirdNumber=10000000000000;
console.log(thirdNumber.toLocaleString('en-In'));// output will be 1,00,00,00,00,00,000

//********************maths****************************************************************** */
console.log(Math);// object [math] 
console.log(Math.random());// it will print the random numbers between 0 to 1
// if we want the value greater than 1 output then
console.log(Math.random()*10+1); // it  will have the value atleat one digit before the decimal
console.log(Math.floor(Math.random()*10+1)) // this will give the floor value of that generated random number
// now if we want the random output of the number between to value like max and min
const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1)+min));

console.log(Math.abs(-2))// it will provide the absolute value
console.log(Math.round(4.6))// it will do the round off
console.log(Math.ceil(4.6))// it will provide the ceil value which is 5
console.log(Math.floor(3.4))// the output will be 3
console.log(Math.min(1,2,3,5))// this will the minimum value in the array