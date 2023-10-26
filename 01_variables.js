const accountID = 11223344;
let accountEmail = "akriti@abc.com";
var accountPassword = "akfunnnn";
 accountCity = "Jaipur";

 //accountID = 2; //not allowed
 //console.log(accountID);

 accountEmail = "ak@abc.com";
 accountPassword = "12345" ;
 accountCity = "Bengaluru" ;
/* Prefer not to use var 
    because of issue in block scope and functional scope
*/

 console.table([accountID,accountEmail,accountPassword,accountCity]);