 // Have a variable maxLength, push words that are less than 
 // the maxLength into a new array, and console.log that.

var names = ["claire","myles","ann","zoie"];
var maxLength = 4;
var shortNames = [];

// loop 6 times, and for each loop you will check to see if the word is
// <= to the maxLength

for (var i=0; i < names.length; i++) {
	if (names[i].length < maxLength) {
		shortNames.push(names[i]);
	}
}

console.log(newArray);