const fibonacci = function(x) {
    let sequence = [1];
    if (x < 0) {
        return "OOPS"
    }
    for (let i = 1; i < x; i++) {
        if (i < 2) {
            sequence.push(1);
        }
        else {
            sequence.push(sequence[i-1] + sequence[i-2]);
        }
    }
    return sequence.pop();
};


// Do not edit below this line
module.exports = fibonacci;
