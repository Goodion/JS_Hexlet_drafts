// BEGIN (write your solution here)
const magic = (...args) => {
   
    let sumArgs = args.reduce((n, acc) => acc + n, 0);

    const f = (...args2) => {
        sumArgs += args2.reduce((n, acc) => acc + n, 0);
        return f;
    }
  
    f.valueOf = () => sumArgs;
  
    return f;
 }


  console.log((magic() == 0)); // true */
  console.log((magic(5, 2, -8) == -1)); // true
  console.log((magic(1, 2)(3, 4, 5)(6)(7, 10) == 38)); // true
  console.log((magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13)); // true
  // END