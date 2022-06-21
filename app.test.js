const { forEach } = require('./app');

let sum = 0;
forEach([1,2,3], (value) => {
    sum = sum + value;
});


if (sum !== 6) {
    throw new Error('Expected summing array to be 6')
}