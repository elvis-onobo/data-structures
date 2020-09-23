/**
 * STACKS
 *
 * Stacks work based on a last in, first out principle.
 *
 * In a box of books, the last book which is ontop is
 * the first book you will need to get out if you need
 * to get to the book in the bottom which is the first
 * book to go in; the books are stacked.
 */

// Functions:
// push(Add to top of stack), pop(remove from top of stack),
// peek(display the top element of a stack), length(determine how many elements are in a stack)

/**
 * In the example below, we implement a palindrome checker using a stack
 */
let letters = []; // this is our stack

let word = "racecar";

let rword = "";

// insert the letters of the word into the stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// Reverse the items in the stack
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(`${word} is a palindrome`);
} else {
  console.log(`${word} is not a palindrome`);
}
