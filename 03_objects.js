//singleton
//Object.create(constructor methtod)


//Object lietrals

const mySym = Symbol("Key1")

const users = {
    name:"Akriti",
    [mySym]:"myKey1",
    age: 23,
    location: "Jaipur",
    email:"ak@google.com",
    sLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],

}

// console.log(users.email);
// console.log(users["email"]);
// console.log(users[mySym]);

users.email = "hr@justabroad.co"
//Object.freeze(users)

users.email = "ak@justabroad.co"
//console.log(users);

users.greeting = function(){
    console.log("Hello JS user");
}

users.greetingTwo = function(){
    console.log(`Hello JS user , ${this.name}`);
}
console.log(users.greeting());
console.log(users.greetingTwo());





// const symbols = Object.getOwnPropertySymbols(users);
// if (symbols.includes(mySym)) {
//     console.log("mySym is a symbol property:", users[mySym]);
// } else {
//     console.log("mySym is not a symbol property");
// }
