//ADD TO ZERO.
//  Predicted Run Time: 53.3 µs  I believe the tested run time would be extremely fast for having a tiny array
let array = [1,2,3,-2]

let addToZero = false;
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    if (i !== j) {
      if (array[i] + array[j] === 0) {
        addToZero = true;
      } 
    }
  }
}

console.log(addToZero)


// //UNIQUE CHARACTERS.
// Predicted run time: > 53.3 µs  I believe the run time would be sub 53.3µs for this tiny string that stops the test when the the third character of the string is executed by a for loop.
let word = "Moonday"

function hasUniqueChars(word) {
     let uniqueChars = new Set([])
     for (let i = 0; i < word.length; i++) {
       uniqueChars.add(word[i])
     }
     return uniqueChars.size === word.length
   }
console.log(hasUniqueChars(word))

// //PANGRAM. 
//Predicted run time: 60+ µs. I believe the run time would be a slghtly slower for having a larger array.
const letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function checkPangram(string) {
   string = string.toLowerCase();
   return letters.every(x => string.includes(x))
}
console.log(checkPangram("The quick brown fox jumps over the lazy dog!"));

// //FIND THE LONGEST WORD.
// Predicted run time: > 50 µs. This would be another fast test because the array is small and the test would stop after sorting through each string(9)
function longestWord(...string) {
    return string.sort(function(a, b) {return b.length - a.length})[0];
  }
  
  console.log(longestWord('The', 'quick', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'));
  



