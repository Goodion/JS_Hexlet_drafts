const cons = (x, y) => f => f(x, y);
/* const car = f = (x, y) => x => pair(f(x, y)); */

/* const car = (pair) => {
    let res;
    let func = (x, y) => res = x;
    pair(func);
    return res;
}

const cdr = (pair) => {
    let res;
    let func = (x, y) => res = y;
    pair(func);
    return res;
} */

const car = pair => pair(x => x);
const cdr = pair => pair((x, y) => y);


/* const car = (pair) => {
    let res;
    let func = (x, y) => res = x;
    pair(func);
    return res;
}

const cdr = func => (cdr(pair(func(x), x)));

const pair = cons(5, 3);

console.log(car(pair)); 

console.log(cdr(pair)); */