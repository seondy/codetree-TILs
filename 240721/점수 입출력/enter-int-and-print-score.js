const fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString());

console.log(`Your score is ${input} point.`);