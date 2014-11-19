// Write a program that will take a hardcoded string, 
// and console log the reversed version of it. Use a for loop

var inputString = "building";
var finalString = " ";

for (var i = inputString.length-1;  i>=0; i--) {
	finalString = finalString + inputString.charAt(i);
}

console.log(finalString)

