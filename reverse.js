// Write a program that will take a hardcoded string, 
// and console log the reversed version of it. Use a for loop

var inputString = "building";
var finalString = "";

for (var i = 0; i < inputString.length; i++) {
	finalString = inputString.charAt(i) + finalString;
}

console.log(finalString);
console.log(inputString);

