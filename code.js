function factorial(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}

function e(n) {
    var factorial = 1; //since e(0) = 1 its easier to just set it this way
    var sum = 1; 

    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
        sum = sum + 1 / factorial;
    }

    return sum;
}
