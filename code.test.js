const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(factorial(10) === 3628800);
assert(e(0) === 1);
assert(e(1) === 2.71828182846);
assert(e(5) === 13.5914091423);
assert(e(10) === 2.7182818011463845);
assert(e(15) === 40.7742274269);
assert(e(20) === 54.3656365692);
