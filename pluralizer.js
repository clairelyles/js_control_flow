// Take an input like

// thing = "cat"
// count = "5"
// and output the pluralized form of the word like "5 cats" or "1 dog".

var count = 1;
var thing = "cat";

if(count > 1) {
	console.log(count + " " + thing + "s");
}
else {
	console.log (count + " " + thing);
}