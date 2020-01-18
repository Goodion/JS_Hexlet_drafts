const Zero = func => z => z;
/* const Succ = Zero => x => Zero(x);  */

/* const Succ = s => func => z => func(s(func)(z))   */

const Succ = (s) => {
    return func => {
        return z => {
            return func( s(func)(z) );
        }
    }
}


const Nul = Zero;
console.log(Nul(x => x + 1)(0)); // 0

const one = Succ(Zero);
console.log(one(x => x + 1)(0)); // 1

const two = Succ(Succ(Zero));
console.log(two(x => x + 1)(0)); // 2

const three = Succ(Succ(Succ(Zero)));
console.log(three(x => x + 1)(0)); // 3

const four = Succ(Succ(two));
console.log(four(x => x + 1)(0)); // 4

const five = Succ(Succ(Succ(Succ(Succ(Zero)))));
console.log(five(x => x + 1)(0)); // 5






