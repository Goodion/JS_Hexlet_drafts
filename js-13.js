// с помощью for
/* function sumTo(n) {
   var i;
   for ( i = ( n-1 ) ; i >= 1; i-- ) {
     n = n + i;
   } 
   return n;
}

alert(sumTo(1));  */

// с помощью рекурсии
/* function sumTo(n) {
  if (n > 0) {
  return n + sumTo(n-1); 
} else {
  return n; }
}

alert(sumTo(100)); */

// по формуле среднего арифметического

/* function sumTo(n) {
  var res;
  res = (1 + n) / 2 * n;
  return res;
}
alert(sumTo(5)); */

/* function factorial(n) {
  if ( n > 1 ) {
    return n * factorial(n-1);
  } else {
  return n; }
} 



alert(factorial(1));

function factorial(n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120


function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

alert( sumTo(100) ); */



/* function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

alert( factorial(5) ); // 120 */

/* // Фибоначчи
function fib(n) {
  var a = 1;
  var b = 0;
  for ( i = 1 ; i <= n; i++ ) {
  var res = a + b;
  a = b;
  b = res;
}
return res;
}

alert( fib(1) ); // 1
alert( fib(2) ); // 1
alert( fib(3)); // 2
alert( fib(4) ); // 3
alert( fib(5) ); // 5
alert( fib(6)); // 8 */

