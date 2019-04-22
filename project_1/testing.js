function sum(...args) {
    return args.reduce((sum, x) => sum + x);
};

function timesBy(multiplier, ...args) {
    return args.map(x => x * multiplier);
};

console.log(sum(1,2,3,4,5));
console.log(timesBy(2,1,2,3,4,5));