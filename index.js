let ss = require("simple-statistics");
const { min } = require("./node_modules/simple-statistics");

// The smallest number in the array (use the min() function)
// let numbers =[62, 60, 53, 9, 11, 14, 15, 16, 17, 65, 88];
// let smallest =ss.min(numbers);
// console.log(smallest)  // 9


let numbers =[62, 60, 53, 9, 11, 14, 15, 16, 17, 65, 88];

// The largest number in the array (use the max() function)
// let largest = ss.max(numbers);
// console.log(largest)  //88

// The sum of the numbers in the array (use the sumSimple() function)
// let answer = ss.sumSimple(numbers);
// console.log(answer)  // 410

// The average (or mean) value in the array (use the mean() function)
let answer = ss.mean(numbers);
console.log(answer)  // 37.27