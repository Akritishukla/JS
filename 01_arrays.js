//array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shrek","Mickey","Mini","Donald"];

const myArr2 = new Array(1,2,3,4)

//console.log(myArr[1]); 

//Array Methods
// myArr.push(6)
// myArr.push(8)
// myArr.pop()

// myArr.unshift(9)
//myArr.shift()
// console.log(myArr.includes(8))
// console.log(myArr.indexOf(19))
// console.log(myArr)


//const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr)
// console.log(typeof newArr)


//slice and splice(its changes/manipulates  the original array)

console.log("A",myArr);

const myn1 = myArr.slice(1,3);
console.log(myn1)
console.log("B",myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C",myArr)