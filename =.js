// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.


function max(num1, num2){
    if (num1 > num2) {
    	return num1;
    } else if (num2 > num1) {
    	return num2;
    }}


// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.


function maxOfThree(num1, num2, num3){
    var max = Math.max(num1, num2, num3);
    return max;
 }


// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  var findVowel = function(letter) {

var vowels = ["a", "e", "i", "o", "u"];

for(var i in vowels){

    if(letter === i){
        return true;
    } else {
        return false;
    }
}

};

findVowel("e");
}


// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(a,b){
return a+b
}

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function average(a, b, c) {

return (a + b + c) / 3;

}

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(input){
  return input.length;
}



// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
var greaterThan = function(num1, num2) {
	return num1 < num2;
}


// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
var greet = function(name) {
  var msg = 'Hello, ' + name;
  return msg;
};


// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
var madlib = function(word1, word2, word3, word4) {
	var msg = "My " + word1 + " is a " + word2 + " and it's " + word3 + " has a lot of " + word4 + ".";
	return msg;
}
