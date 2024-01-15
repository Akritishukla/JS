console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);




//Capmarisons convert null to a number , treating it as a 0. thats why null >= 0 is true

/* On the other hand quality check == for undefined and null is defined such that without 
any conversions they are equal to each other and dont equal to anything else thats why null == 0 is false */

// === strict equlaity

console.log("2" == 2);

