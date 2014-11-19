

// Grade problem using conditional logic
var testScore = 40

if (testScore >= 90 && testScore <=100) {
	console.log("You got an A!");
}
else if (testScore >= 80) {
	console.log("You go a B!");
}
else if (testScore >= 70) {
	console.log("You got a C!");
}
else if (testScore >= 60) {
	console.log("You got a D!");
}
else {
	console.log("You got an F!");
}

// switch statement is better than If/Else if conditional logic
// It's more deliberate thank an If/Else If
// swtich statements include a T/F, cases to check, and breaks if the 
// block of code runs True (in this example)

var score = 85;

switch(true) {
// a colon ":" comes at the end of the conditional statment
	case score >= 90:
		console.log("You got an A!");
		break;
	case score >= 80:
		console.log("You got an B!");
		break;
	case score >= 70:
		console.log("You got an C!");
		break;
	case score >= 60:
		console.log("You got an D!");
		break;
	case score >= 50:
		console.log("You got an F!");
		break;
// Don't forget the default statment!
	default:
}

