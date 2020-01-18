function pow(x, n) {
    var i;
    var res = x;
    for (i = 1; i < n; ++i ) {
        x = (x * res);
    }
    return x;
}

var x = +prompt( 'Введите возводимое', '1' );
if ( x == x ) {
    
    var a = +prompt( 'Введите степень', '1' );
      if ( a == a  && a > 0)  {
        var n = parseInt( a,10 );
        alert(pow( x, n ));
    } else {
        alert( 'Введите ЦЕЛОЕ ПОЛОЖИТЕЛЬНОЕ ЧИСЛО!!!' ); }

} else {
    alert( 'Введите ЧИСЛО!!!' );
}


/**
 * Возводит x в степень n (комментарий JSDoc)
 *
 * @param {number} x число, которое возводится в степень
 * @param {number} n степень, должна быть целым числом больше 1
 *
 * @return {number} x в степени n
 */
function pow(x, n) {
    var result = x;
  
    for (var i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  var x = prompt("x?", '');
  var n = prompt("n?", '');
  
  if (n <= 1) {
    alert('Степень ' + n +
      'не поддерживается, введите целую степень, большую 1'
    );
  } else {
    alert( pow(x, n) );
  }