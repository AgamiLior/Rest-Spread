// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...values) => values.filter(val => val % 2 === 0);


// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...values) => Math.min(...values);


// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

const mergeObjects = (firstObj, secondObj) => ({ ...firstObj, ...secondObj });


// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]

const doubleAndReturnArgs = (array, ...values) => ([...array, ...values.map(val => val * 2)]);



/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {

// }
const removeRandom = items => {
    let number = Math.floor(Math.random() * items.length)
    return [...items.slice(0,number), ...items.slice(number + 1)]
}

/** Return a new array with every item in array1 and array2. */

// function extend(array1, array2) {

// }
const extend = (array1, array2) => ([...array1, ...array2]);

/** Return a new object with all the keys and values
from obj and a new key/value pair */

// function addKeyVal(obj, key, val) {

// }

const addKeyVal = (obj, key, val) => {
    let newObject = {...obj};
    newObject[key] = val;
    return newObject;
}

/** Return a new object with a key removed. */

// function removeKey(obj, key) {

// }
const removeKey = (obj, key) => {
    let newObject = {...obj};
    delete newObject[key];
    return newObject;
}

/** Combine two objects and return a new object. */

// function combine(obj1, obj2) {

// }

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {

// }

const update = (obj, key, val) => {
    let newObject = {...obj};
    newObject[key] = val;
    return newObject;
}