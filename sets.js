/**
 * SET:
 *
 * The set is like an array but it accepts no duplicate items and
 * the values are not stored in any particular order
 */

function mySet() {
  //the collection will hold our set
  let collection = [];

  // Check for the presence of an element an return true or false if present or not
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // return all the values in the set
  this.values = function () {
    return collection;
  };

  // add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // remove an element from the set
  this.remove = function (element) {
    if (this.has(element)) {
      // return the position of the element since it is present
      let index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // return the size of the set
  this.size = function () {
    return collection.length;
  };

  /**
   * Return the union of two sets.
   * This will combine the sets but without any duplicates
   */
  this.union = function (otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();

    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  /**
   * Return an intersection(values common to the two sets) as a new set
   */
  this.intersection = function (otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  /**
   * Return the difference of two sets as a new set
   *
   * foreach element of otherSet, if that element doesn't exist in the
   * firstSet, then add that to the differenceSet
   */
  this.difference = function (otherSet) {
    let differenceSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
      return differenceSet;
    });
  };

  /**
   * SUBSET: checksif all the elements of the otherSet are in the firstSet
   */
  this.subset = function (otherSet) {
    let firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}
