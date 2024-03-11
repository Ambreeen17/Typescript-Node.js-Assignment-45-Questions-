//Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); //true
console.log("apple==Apple"); //false
//using the lowercase function
console.log("Testing equality with lowercase:");
console.log("Apple".toLowerCase() == "apple"); //true
//Numerical Test 
console.log("Numerical tests:");
console.log(10 > 5); //true
console.log(2 < 1); //false
//Test using  "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); //false
console.log(true || false); //true
//Test whether an item is in a array
var fruit = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruit1?");
console.log(fruit.includes("apple")); //true
//Test whether an item is not in a array
console.log("Is 'mango' is in fruits");
console.log(!fruit.includes("mango")); //False
