let myDate=new Date();
// console.log(myDate);
// console.log(typeof myDate);// date is the object and this is how you can get the detail of the current date and time
// console.log(myDate.getDate());// getDate  function gives the date 
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());// 2/22/2024, 3:08:26 PM this how you will get the value of using the function toLocalString
let myCreatedDate=new Date(2024,1,22,5,3);
// console.log(myCreatedDate.toDateString());// Thu Feb 22 2024
// console.log(myCreatedDate.toLocaleString());// this will the output some how like this 2/22/2024, 5:03:00 AM

let myTimeStamp=Date.now();
// console.log(myTimeStamp);// this will the current time in the millisecond 
// console.log(myCreatedDate.getTime()); // this will the time stamp in millisecond

// //  to convert the time in second instead of millisecond
// console.log(Math.floor(myTimeStamp/1000));


let newDate=new Date()

//  most used method for the programming 
newDate.toLocaleString('default',{
    weekday:"narrow",
   
})
console.log(newDate);