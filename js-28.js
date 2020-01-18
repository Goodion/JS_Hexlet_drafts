// BEGIN (write your solution here)
/* const func = () => partialApply(func); */
/* const partialApply = (func, a) => b => func(a, b); */
/* export default partialApply; */
// END


/* const func = (a, b) => partialApply(func, a);
const partialApply = (func, a) => (b) => func(a, b);
export default partialApply; */

/* const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);
alert(f1(1)); // => 2
alert(f1(10)); // => 1024

const f2 = partialApply((a, b) => a * b, 5);
alert(f2(2)); // => 10
alert(f2(5)); // => 25 */



/* const True = (str1) => (str2) => str1;
const False = (str1) => (str2) => str2;
const If = bool => str1 => str2 => bool(str1)(str2);

// BEGIN
export const True = x => () => x;
export const False = () => y => y;

export const If = f => f; */
// END



// Рабочий вариант
/* const True = (str1) => (str2) => {return str1;}
console.log(True);
const False = (str1) => (str2) => {return str2;}
console.log(False);
let bool;

const If = bool => str1 => str2 => {
    let res = bool(str1)(str2);
    console.log(bool);
    console.log(res);
    return res;
} */




/* If(True)('one')('two'); // one


If(False)('one')('two'); // two */


/* const compose = (func1, func2) => (v) => func1(func2(v));

const f = compose(Math.sqrt, Math.abs);
console.log(f(-4)); // => 2

console.log(compose(v => v, v => v)(10)); // => 10
console.log(compose(v => v + 2, v => v)(10)); // => 12
console.log(compose(v => v, v => v - 2)(10)); // => 8
console.log(compose(v => v ** 2, v => v - 2)(2)); // => 0
console.log(compose(v => v - 2, v => v ** 2)(2)); // => 2 */


// BEGIN (write your solution here)
import cube from './numbers1'; 
import { pow2, sum2, sub2 } from './numbers2';
import sqrt from './numbers3';
import multi from './numbers2';

const pow = pow2;
const sum = sum2;
const sub = sub2;



export default cube;
// END
