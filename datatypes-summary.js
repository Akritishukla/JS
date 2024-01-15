//Primitive (call by value)
// 7 types : String , Number ,Boolean, Null, Undefined, Symbol and BigInt

const score = 100;
const scoreValue = 103.33;
const isLoggedIn = false;
const temperature = null;
let userEmail; //undefined
const id  = Symbol("123");
const anotherId = Symbol("123")

const bigNumber = 3322344478797807079097097079709698578578n;

//console.log(id === anotherId);



//Non Primitive (reference type)
// Arrays , Objects, Functions

const heros = ["Shaktiman", "Naagraj", "Doga"];

const myObj = {
    name: "Akriti",
    rollno : 23,
}

const myFunction = function(){
    //console.log("Hello World");
    //console.log(typeof temperature)
}
myFunction();




//========================Stack (Primitive) and Heap(Non-primitive) ===============================

let myName = "Akriti";

let anotherName  = myName;
anotherName = "Sonali"

console.log(myName);
console.log(anotherName);

//Incase of primitivr datatype we get a copy of teh variable 

let userOne = {
    email: "ak@gmail.com",
    upi: "ak@okicici"
}

let userTwo = userOne;
userOne.email = "aks@gamil.com"
console.log(userOne.email);
console.log(userTwo.email);

//incase of heap we get reference from the variable


