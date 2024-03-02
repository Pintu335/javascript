const user={
    username:"pintu",
    price: 999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        // this is used to access the variable of the same scope here
        console.log(this); // this referse to the current context and show the data regarding it
    
    }

}
user.welcomeMessage();
user.username="Amit";
user.welcomeMessage();
console.log(this)// it will give the output empty object beacuse we are in node environment and we donot have any gobal scope or variable
// but if we print this function on the browser then the output will be window object

// function chai(){
//     let  username="pintu";
//     console.log(this.username);// use cannot use this like this in function it can be done only in object;
// }
//  chai();
// const chai=function(){
//     let username="kjshfoius";
//     console.log(this.username); // it will also not give the output same 
// }
// chai()


//===================================== Arrow function=============

// const  chai= () =>{
//     let username="pintu"
//     console.log(this.username);// here alos it will give the output undefined
//     console.log(this) // it will give the output as empty object
// }
// chai();


// const addTwo= (num1, num2) =>{
//     return num1+num2;
// }

// emplict return work same 
const addTwo =(num1, num2) => num1+num2  // when ever we use the curly brases then we have to give the return other wise not

const addNum =(num1, num2) => (num1+num2) 
console.log(addTwo(3,4));
// to use object with arrow function
const objectMethod =(num1, num2) => ({username:" "}) 
console.log(objectMethod(2,3))