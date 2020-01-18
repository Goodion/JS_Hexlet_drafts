/* var a = prompt('Введите 1 число', '');
var b = prompt('Введите 2 число', '');

var res = +a + +b;
console.log(res);
alert(res);

alert( (0.1 * 10 + 0.2 * 10) / 10 + '$' );
alert (+0.1.toFixed(2) + +0.2.toFixed(3) + '$'); */

/* var price = 0.1 + 0.2;

alert(+price.toFixed(10) + '$'); */


function getDecimal(num) {
  var i = +Math.abs(num);
  
  num = (i * 1000 - Math.floor(i) * 1000) / 1000;
  // alert ( num );
  // alert(i);
  return num;
}



alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2 
