function isPalindrome(word) {
//Regex- (Regular expression)a sequence of characters that match a specific search pattern(should learn more in RegexOne website)

let reg = /[\ W_]/g; //This is how we write a Regex(g is for global meaning it should go through the entire string)
                     // The above is a pattern and we use it with .replace() as I will demonstrate below
let myString = word.toLowerCase().replace(reg, "") // In this section we are removing all alpha-numeric characters, converting them to lower case  in order to check for palindrome... .replace(takes two arguements, first the pattern that is whatever matches our reg we remove it and replace it with nothing as denoted by "")

  // Write your algorithm here
  // step 1: Start   
  // step 2 : Input any word choice
  // Step 3 : Put the word in a temporary variable
  // Step 4 : Reverse the word
  // step 5 : If the word stored in a temporary  containe and the reversed word read the same the word then equates to a palindrome.
  // Step 6 : If the word equates to a palindrome then return a boolean true otherwise return false
  let reversedString = myString.split('').reverse().join('');
  if (reversedString === myString){
    return true;
  } else {
    return false;
  }

}
console.log(isPalindrome("eye9"));

/* 
  Add your pseudocode here
  // Take in a string
  // Check the string for any alphanumeric characters
  // If it exists remove it by regex method and then convert it to lower case
  // Reverse the string and then compare it to the value one inputs for palindrome
  // If the string input is palindrom return true otherwise return false


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
