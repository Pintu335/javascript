// stack(primitive), Heap(non primitive)
// whenever stack memory is used , we declare the primitive datatype we get it  copy
// whenever heap memory is used, we declare the non primitive datatype we get reference
let myYoutubeName="chai aur code";
let anothename= myYoutubeName;
anothename="rishav vlog";;
console.log(anothename);// output will be rishav vlog
console.log(myYoutubeName);// output will chai aur code
let userOne={
    email:"pintu@gmail.com",
    upi:"heelokjdhfi"
}
let userTwo=userOne;// here the userOne and useTwo is referencing 
//to the same thing so any change we do here in userTwo will also appear in user two and vise versa
userTwo.email="sye@gmail.com";
console.log(userOne.email);// output will be same for the userOne & userTwo will is sye@gmail.com
console.log(userTwo.email);

