console.log(2<1);
console.log(2>1);
console.log(1==1);

console.log("2">1) ; // output true because there the type convesion is done so "2" is converted into number
console.log("02"> 1);

// we should avoid below comparisions
console.log(null > 0);// out put false

console.log(null==0); // output false
console.log(null>=0);//output true; reason int that an equality check == and comparisons > < > =<= work differently. 
// comparisions convert null to a number, treating it as 0. thats why (3) null >=0 is true and (1) null>0 is false;
console.log(undefined==0);// output false;

console.log(undefined>0);// output false;

console.log(undefined<0);// output false;
// for the strict comparision we use === which do not do the type conversion
console.log(1===1);// output true
console.log("2">1)// output false;