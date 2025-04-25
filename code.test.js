const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');
const EPSILON = 1e-10;

assert(factorial(10) === 3628800);
assert(e(0) === 1);
assert(e(1) === 2.000000);
assert(Math.abs(e(5) - 2.7166666667) < EPSILON);
assert(Math.abs(e(10) === 2.7182818011463845) < EPSILON);
assert(Math.abs(e(15) === 2.71828182845823) < EPISLON);
assert(Math.abs(e(20) === 2.7182818284590455) < EPISLON);
