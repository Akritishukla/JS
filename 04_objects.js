const tinderUser = new Object();  //singleton object
const tinderUser1 = {} //non singleton object

tinderUser.id = "123abc",
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false 

// console.log(tinderUser);
//console.log(tinderUser1)

const regularUser = {
    email : "sum@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Akriti",
            lastname:"Shukla"
        }
    }
}
//console.log(regularUser.fullname.userfullname)

const obj1 = {
    1: "A",
    2: "B"
}
const obj2 = {
    3: "C",
    4: "D"
}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
//console.log(obj3)

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));