console.log([1, 2, 3] === [1, 2, 3]);
// false because the addresses of the arrays are actually compared

let nums = [1, 2, 3];
let numsCopy = nums;
console.log(numsCopy);
console.log(numsCopy === nums);