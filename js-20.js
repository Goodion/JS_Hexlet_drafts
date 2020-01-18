/*  const sumDigits = (num) => {
  const str = String(num).length;
  num = String(num);  
  let res = 0;
    for (let i = 0; i < str; i++) {
    res = +num[i] + +res;
  } return res; 
}; 

const addDigits = (num) => {
  let i = String(num).length; 
  while (i > 1) {
    num = sumDigits(num);
    i = String(num).length;
    alert('sumDigits(num)=' + sumDigits(num) + ' i=' + i + ' num =' + num)
  } return num;
};

alert(addDigits(1234)); */

// BEGIN
const sum = (str) => {
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }

  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sum(String(result));
  }

  return result;
};

export default addDigits;
// END



