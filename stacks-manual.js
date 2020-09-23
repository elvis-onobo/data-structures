// Create the stack
let Stack = function () {
  this.count = 0; // keeps count of items in the stack
  this.storage = {};

  // Add a value to the end of the Stack
  this.push = function (value) {
    //   add the value to the top/end of the stack
    this.storage[this.count] = value; //this.count is the key of the value in the storage object
    this.count++; //we increment it so the next value has a unique key
  };

  // Remove and return the value at the top/end of the stack
  this.pop = function () {
    if (this.count === 0) {
      // there's nothing on the stack so return undefined
      return undefined;
    } else {
      /**
       * When we added an item to the storage  we incremented count by 1 each time.
       * this.count now has 3 items. However these items are stored in our storage
       * with key value pairs starting at 0 because we initialized our count value
       * to zero at the beginning.
       *
       * Therefore, to get the last item in the list, we need to decrement this.count
       * by one.
       *  */
      this.count--;
      let result = this.storage;
      delete this.storage[this.count];
      return result;
    }
  };

  this.size = function () {
    // return the number of items in the stack
    return this.count;
  };

  this.peek = function () {
    // returns the value on the top/end of the stack
    return this.storage[this.count - 1];
  };
};

// see it in action
let myStack = new Stack();

myStack.push(1);
myStack.push(2);
myStack.push(3);
// console.log(myStack.size());
// console.log(myStack.peek());
console.log(myStack.pop());
// console.log(myStack.peek());
