function fibs(n) {
    a = 0;
    b = 1;
    if (n === 1) return [a];
    if (n == 2) return [a, b];
    const output = [a, b];
    for (let i = 3; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
        output.push(c);
    }
    return output;
}

console.log(fibs(8));

function fibsRec(n) {
    let output = [0, 1];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];
    let newarr = fibsRec(n - 1);
    output = newarr.slice();
    let last = newarr.pop()
    let secondLast = newarr.pop();
    output[n - 1] = last + secondLast;
    return output;
}

console.log(fibsRec(8));