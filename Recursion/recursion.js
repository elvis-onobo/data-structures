/**
 * Recursion is a way in which a function calls itself until it arrives at an answer.
 *
 * A recusrion always has the terminal condition and the format in which it should
 * call itself
 */
function recurse(num) {
  if (num <= 0) {
    return num; //the return keyword ends the recursion and returns the result of the recursion
  }

  return num + recurse(num - 1);
}

console.log(recurse(5));

/**
 *
 * A factorial multiplies a number subtracting one until the smallest
 */
function factorial(num) {
  if (num == 1) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(5));
