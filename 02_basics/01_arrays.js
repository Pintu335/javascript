const myArr=[0,1,2,3,4,5];
console.log(myArr[0]);
// when we do the copy operation the shallow copy take place
// another method to define the array 
const second=new Array(1,2,3,4,5);
console.log(second[1]);

// some array methods
// push() it push the element in the array
second.push(8);
second.unshift(9);// unshift is a function used to insert the element at the first index
console.log(myArr.includes(9)); // includes() it tell that the given data or element is in the array or not
console.log(myArr.indexOf(5));// indexof() will the give the index of element
const myArr2= myArr.join()// join() convert the array to string 
console.log(myArr2);
console.log(typeof myArr2);// converted into string
console.log(myArr);


// slice, and splice
console.log("A",myArr);
const my1=myArr.slice(1,3); // it give the part of the array but it donot include the last index;
console.log(my1);
console.log("B ",myArr);
 


const my2=myArr.splice(1,3)// it delete that part form the original array but it give the output the sub array we gave the index
console.log(my2);
console.log("c ", myArr);// basically it manipulate the original array 
