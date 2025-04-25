const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(e(0) === 1);
assert(e(1) === 2.000000);
assert(e(5) === 2.7166666667);
assert(e(10) === 2.7182818011463845);
assert(e(15) === 2.71828182845823);
assert(e(20) === 2.7182818284590455);
