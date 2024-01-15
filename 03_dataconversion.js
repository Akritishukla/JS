let score = "33abc"

//console.log(typeof score)
//console.log(Number(score))

const valueInNumber = Number(score);
//console.log(typeof valueInNumber) // typeof is number but actually its wrong 

//"33" => converted in number 33
// "33abc" => NaN
//typeof(NaN) => number (confusing but fact)

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
//console.log(booleanIsLoggedIn);

// 1 => true
// 0 => false
// "" => false
//"AKriti" => true

let randomNumber = 33
let stringNumber = String(randomNumber);

// console.log(stringNumber);
// console.log(typeof stringNumber)

//*********************************OPERATIONS*****************************************/

let value = 3;
let negValue = -value ;
//console.log(negValue)

let str1 = "Hello"
let str2 = " Akriti"

let str3 = str1 + str2 ;
//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + "2");
// console.log("1" + 2 + 2);
// console.log((1+ 2) + "3");

// console.log(+true);
// console.log(+"")

let gameCounter = 100;
//gameCounter++ ; // Postfix
++gameCounter; //prefix
console.log(gameCounter);

//important difference between prefic and post fix
