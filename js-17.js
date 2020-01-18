// BEGIN (write your solution here)
const smallestDivisor = (num) => {
  
   if (num < 1) {
    return NaN;
    console.log('num ' + num);
    
   } else if (num == 1) {
    return num;
    console.log('num ' + num);
    
  }
    else { 
  var div = 2;     
  while ((num % div) !== 0) {
    div = ++div;
    console.log('num ' + num);
    console.log('div ' + div);
  } return div; }
 }

alert(smallestDivisor(77));
// END

/* export default smallestDivisor;

import smallestDivisor from '../solution';

test('solution', () => {
  expect(smallestDivisor(-3)).toEqual(NaN);
  expect(smallestDivisor(0)).toEqual(NaN);
  expect(smallestDivisor(1)).toBe(1);
  expect(smallestDivisor(4)).toBe(2);
  expect(smallestDivisor(121)).toBe(11);
  expect(smallestDivisor(3)).toBe(3);
  expect(smallestDivisor(8)).toBe(2);
  expect(smallestDivisor(9)).toBe(3);
  expect(smallestDivisor(17)).toBe(17);
  expect(smallestDivisor(15)).toBe(3);
}); */
