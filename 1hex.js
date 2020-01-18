
// Разница углов

/* const diff = (a, b) => {
  let clockWise = Math.abs(a-b);
  let counterClockWise = 360 - clockWise;
  return alert (Math.min(clockWise, counterClockWise));
}

diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160; */


// Переворот числа

/* const reverseInt = (a) => {
  let mas = String(a).split('');
  if (mas[0] === '-') {
    mas.reverse().pop();
    return +( '-' + mas.join('');
  } else {
    mas.reverse();
    return  +(mas.join('');
  }
}


reverseInt(13); // 31 
reverseInt(-123); // -321 */



// Идеальные числа

/* const isPerfect = (a) => {
   if (a <= 0) {
    return false;
  }
  let mas = [];
  let sumMult = 0;
  for (let i = 1; i <= a / 2; i++) {
    if (a % i == 0) {
      mas.push(i);
    }
  }
  
  for (let i = 0; i < mas.length; i++) {
    sumMult += mas[i];
  }

  return sumMult == a ? true : false;
  }

  alert(isPerfect(496));
  alert(isPerfect(27));
 */



  // Функция Аккермана

 /*   const ackermann = (m,n) => {
    if (m < 0 || n < 0) {
      return undefined;
    }
    if (m == 0) {
      return n += 1;
    } else if (n == 0) {
      n += 1;
      return ackermann(m - 1, n);
    } else {
      let newN = ackermann(m, n - 1);
      return ackermann(m - 1, newN);
    } 
  }


alert(ackermann(0, 0)); // 1
alert(ackermann(2, 1)); // 5
alert(ackermann(2, 3)); // 9 
alert(ackermann(-1, 1));   */



// Форматированное время

/* const formattedTime = (a) => {
  let timePassed = [];
  timePassed[0] = ('0' + Math.floor(a / 60)).slice(-2);
  timePassed[1] = ('0' + (a - (timePassed[0] * 60))).slice(-2);
  return timePassed.join(':');
}

alert(formattedTime(5)); // 00:05
alert(formattedTime(15)); // 00:15
alert(formattedTime(60)); // 01:00
alert(formattedTime(67)); // 01:07
alert(formattedTime(175)); // 02:55
alert(formattedTime(600)); // 10:00
alert(formattedTime(754)); // 12:34 */



// Сумма квадратов

/* const sumSquareDifference = (n) => {
  let sumSquares = 0, sumsSquare = 0;
  for (let i = 1; i <= n; i++) {
    sumSquares += Math.pow(i, 2);
    sumsSquare += i;
  }  
  sumsSquare = Math.pow(sumsSquare, 2);
  return sumsSquare - sumSquares;
}

alert(sumSquareDifference(10)); */



// Преобразование DNA в RNA

/* const dnaToRna = (str) => {
  let mas = str.split('');
  
  outer: 
  for (let i = 0; i < mas.length; i++) {
  
  switch (mas[i]) {
    case 'G':
    mas[i] = 'C';
    break;
    case 'C':
    mas[i] = 'G';
    break;
    case 'T':
    mas[i] = 'A';
    break;
    case 'A':
    mas[i] = 'U';
    break;
    case '':
    mas = '';
    break outer;
    default:
    mas = null;
    break outer;
  } 
  } if (mas === null) {
      return null;
  } return mas.join('');   
}

alert(dnaToRna('ACGTGGTCTTAA')); // 'UGCACCAGAAUU'
alert(dnaToRna('CCGTA')); // 'GGCAU'
alert(dnaToRna('')); // ''
alert(dnaToRna('ACNTG')); // null */



// Без двух нулей
/* const withoutTwoZeros = (a, b) => {
  let digitsSum = a + b;
  let mas = [];
  let oneMas = [];
  let j = 0;
  let resMas = [];
  let obj = {};
  for (let i = 0; i < digitsSum; i++) {
      mas[i] = 0;
  }
  for (let i = 0; i < digitsSum; i++) {
      oneMas[i] = 1;
  }
  
  const checkNext = function () {
      if (mas[j] == 1) {
          mas[j] = 0;
          j++;
          resMas.push(mas.join(''));
          checkNext()
      } mas[j] = 1;
      
  }

  while (mas.join('') !== oneMas.join('')) {
      let res = 0;
      for (j = 0; j < mas.length; j++) {
          if (mas[j] == 0) {
              resMas.push(mas.join(''));
              mas[j] = 1;
              resMas.push(mas.join(''));
              break;
          } else {
              checkNext();
              break;
          }
      }
  }

   
  let checkString;
   let i = 0;  
   let counter = 0; 
      for (let k = 0; k < resMas.length; k++) {
     checkString = String(resMas[k]);
     
     i = checkString.indexOf('00');
     if (i !== -1) {
      resMas.splice(k, 1);
      k--;
     }  
  }
  
  for (let k = 0; k < resMas.length; k++) {
      counter = 0;
      checkString = String(resMas[k]);
      for (let x = 0; x < checkString.length; x++) {
      
      if (checkString.charAt(x) == '0') {
          counter++;
      }
      }
      
      if (counter !== a) {
          resMas.splice(k, 1);
          k--;
    }
  }

  function unique() {
      
    
      for (var i = 0; i < resMas.length; i++) {
        var str = resMas[i];
        obj[str] = true; // запомнить строку в виде свойства объекта
      }
    
      return Object.keys(obj); // или собрать ключи перебором для IE8-
    }

    resMas = unique(resMas);
    
alert(resMas.length);
}



withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3) // 4
withoutTwoZeros(2, 4); // 10 
withoutTwoZeros(4, 7); */



// Счастливые числа

/* const sumOfSquareDigits = (a) => {
  let str = String(a);
  let mas = str.split('');
  let res = 0;
  for (let i = 0; i < mas.length; i++) {
    res += Math.pow(+mas[i], 2);
  }
  return res;
}

const isHappyNumber = (a) => {
  let res = a;
  for (let i = 0; i <= 10; i++) {
    res = sumOfSquareDigits(res);
    if (res === 1) {
      return true;
    }
  }
return false;
}

alert(isHappyNumber(7));
alert(isHappyNumber(0));
alert(isHappyNumber(12));
alert(isHappyNumber(31)); */



// Счастливый билет

/* const isHappyTicket = (a) => {
  let str = String(a);
  let mas = str.split('');
  let left = 0, right = 0;
  for (let i = 0; i <= 2; i++) {
    left += +mas[i];
  }
  for (let i = 3; i < mas.length; i++) {
    right += +mas[i];
  }
  return left === right ? true : false;
}



alert(isHappyTicket(385916)); // true
alert(isHappyTicket(231002)); // false
alert(isHappyTicket(128722)); // true
alert(isHappyTicket('054702')); // true */



// Степень тройки

/* const isPowerOfThree = (a) => {
  let counter = 0;
  for (let i = 0; counter <= a; i++) {
    counter = Math.pow(3, i);
    if (counter === a) {
      return true;
    }
  }
  return false;
}



alert(isPowerOfThree(1)); // true (3^0)
alert(isPowerOfThree(2)); // false
alert(isPowerOfThree(9)); // true (3^2)
alert(isPowerOfThree(81));
alert(isPowerOfThree(1235)); */



// Найди Fizz и Buzz

/* const fizzBuzz = (begin, end) => {
  if (begin > end) { return; }

  for ( let i = begin; i <= end; i++ ) {
    if ( i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if ( i % 3 === 0 ) {
      console.log('Fizz');
    } else if ( i % 5 === 0 ) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(11, 20); */




// Инвертированный регистр


/* const invertCase = (str) => {
  let mas = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].toUpperCase() === str[i]) {
      mas.push(str[i].toLowerCase());
    } else {
      mas.push(str[i].toUpperCase());
    }
  }
  return mas.join('');
} 

alert(invertCase('Hello, World!')) // hELLO, wORLD!
alert(invertCase('I loVe JS')) // i LOvE js */

















