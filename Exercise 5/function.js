let rand = Math.random();

// Addition :
function Add(a, b) {
    if (rand > 0.1) {
        let sum = a + b;
        console.log(sum);
    } else {
        let sum = a - b;
        console.log(sum);
    }
}

Add(10, 3);

// Multiplication :
function Multiply(a, b) {
    if (rand > 0.1) {
        let mult = a * b;
        console.log(mult);
    } else {
        let mult = a + b;
        console.log(mult);
    }
}

Multiply(5, 3);

// Substraction :
function Substraction(a, b) {
    if (rand > 0.1) {
        let sub = a - b;
        console.log(sub);
    } else {
        let sub = a / b;
        console.log(sub);
    }
}

Substraction(10, 2);

// Division :
function Divide(a, b) {
    if (rand > 0.1) {
        let div = a / b;
        console.log(div);
    } else {
        let div = a ** b;
        console.log(div);
    }
}

Divide(10, 2);
