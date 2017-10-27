/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
    this.values = {};
};


RandomizedSet.prototype.insert = function(val) {
   if(this.values.hasOwnProperty(val)) return false;
   else this.values[val] = 1;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
   delete this.values[val];
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var keys = Object.keys(this.values);
    return keys[keys.length * Math.random() << 0];
};

var test = new RandomizedSet();
test.insert(3);

test.insert(5);
test.insert(3);
console.log(test.getRandom());

console.log(test);
