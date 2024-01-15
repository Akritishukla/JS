const name = "Akriti";
const repoCount = 10;

//console.log(name + repoCount + " Value");

//String Interpolation
//console.log(`Hello my name is ${name} and my repo count is  ${repoCount}`)



const gameName = "Akriti-Sh"

//console.log(gameName[1]);
//console.log(gameName.__proto__);
//console.log(gameName.toUpperCase());

//console.log(gameName.charAt(3));
//console.log(gameName.indexOf("t"));

const newString  = gameName.substring(0,4);
//console.log(newString);


const anotherString  = gameName.slice(-9,1)
//console.log(gameName.length)
//console.log(anotherString);

const newStrOne =  "     Akriti      ";
console.log(newStrOne);
console.log(newStrOne.trim());


const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace("%20","-"))

console.log(url.includes("hitesh"));
console.log(gameName.split("-"));
